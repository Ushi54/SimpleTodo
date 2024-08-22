<template>
  <div id="app" class="container">
    <h1 class="pt-3"><i class="bi bi-ui-checks"></i> SimpleTodo</h1>
    <ul class="list-group">
      <!-- todos配列の各Todoをリスト表示 -->
      <li
        v-for="(todo, index) in todos"
        :key="index"
        class="list-group-item"
        :class="{ completed: todo.completed }"
      >
        <!-- todosをループ -->
        <!-- 一意のキー -->
        <!-- 完了したTodoにクラスを適用 -->
        <!-- クリックで完了状態を切り替え -->
        <div class="container">
          <div class="row">
            <div class="col-2 mt-auto mb-auto">
              <button
                @click="toggleComplete(index)"
                class="btn btn-sm float-right border border-0 rounded-circle"
                :class="{
                  'btn-success': todo.completed,
                  '': !todo.completed,
                }"
              >
                <!-- Todoの完了状態を切り替えるボタン -->
                <!-- 完了時のスタイル -->
                <!-- 未完了時のスタイル -->
                <i
                  class="bi"
                  :class="{
                    'bi-check': todo.completed,
                    'bi-square': !todo.completed,
                  }"
                ></i>
                <!-- 完了時のアイコン -->
                <!-- 未完了時のアイコン -->
              </button>
            </div>
            <div class="col-8 mt-auto mb-auto text-start">{{ todo.text }}</div>
            <!-- Todoのテキスト -->
            <div class="col-2 mt-auto mb-auto">
              <button
                @click="confirmDelete(index)"
                class="btn btn-danger btn-sm float-right mr-3"
              >
                <!-- Todoを削除するボタン -->
                <!-- クリックで削除確認モーダルを表示 -->
                <i class="bi bi-trash"></i>
                <!-- ゴミ箱アイコン -->
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="spacer"></div>
    <!-- 削除確認モーダル -->
    <div
      v-if="showConfirmDeleteModal"
      class="modal fade fadeIn"
      id="confirmDeleteModel"
      tabindex="-1"
      role="dialog"
      aria-labelledby="confirmDeleteModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog shadow" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="confirmDeleteModalLabel">
              <i class="bi bi-exclamation-triangle-fill text-warning"></i>
              確認
              <!-- モーダルのタイトル -->
            </h5>
          </div>
          <div class="modal-body">
            本当にこのタスクを削除しますか？<br />
            <span style="font-weight: bold">{{ todoToDeleteText }}</span>
          </div>
          <!-- 確認メッセージ -->
          <div class="modal-footer">
            <button
              @click="closeModal"
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              キャンセル
              <!-- キャンセルボタン -->
            </button>
            <button type="button" class="btn btn-danger" @click="removeTodo">
              削除
              <!-- 削除ボタン -->
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card justify-content-center mt-3 shadow">
      <div class="card-body">
        <input
          v-model="newTodo"
          @keyup.enter="addTodo"
          type="text"
          class="form-control"
          :placeholder="placeholders"
          ref="todoInput"
        />
        <!-- 新しいTodoを追加するための入力フィールド -->
        <!-- v-modelでß新しいTodoの値をバインド -->
        <!-- EnterキーでTodoを追加 -->
        <!-- プレースホルダー -->
        <!-- input要素を参照可能に-->
      </div>
    </div>
    <footer><small>&copy; 2024 K.H</small></footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "", // 新しいTodoのテキスト
      todos: JSON.parse(localStorage.getItem("todos")) || [], // ローカルストレージからTodoリストを取得
      showConfirmDeleteModal: false, // 削除確認モーダルの表示状態
      todoToDelete: null, // 削除するTodoのインデックス
      todoToDeleteText: "", // 削除するTodoのテキストを保存
      placeholders: this.isMobile() ? "Add new todo...( [改行]タップで追加 )" : "Add new todo...", //スマホの場合と、それ以外の場合で出しわけ
    };
  },

  watch: {
    todos: {
      handler() {
        localStorage.setItem("todos", JSON.stringify(this.todos)); // todosが変更されたときにローカルストレージを更新
      },
      deep: true, // 深い監視を有効にする
    },
  },

  methods: {
    isMobile(){
      return /Mobi|Android/i.test(navigator.userAgent);
    },
    addTodo() {
      if (this.newTodo.trim() !== "") {
        // 空でない場合のみ追加
        this.todos.push({ text: this.newTodo, completed: false }); // 新しいTodoを追加
        this.newTodo = ""; // 入力フィールドをクリア
        this.$refs.todoInput.blur(); //フォーカスをはずす
        window.scrollTo({
          top: 0,
          behavior: "smooth", // スムーズにスクロール
        });
      }
    },
    confirmDelete(index) {
      this.todoToDelete = index; // 削除するTodoのインデックスを保存
      this.todoToDeleteText = this.todos[index].text; // Todoのテキストを保存
      this.showConfirmDeleteModal = true; // モーダルを表示
    },
    closeModal() {
      this.showConfirmDeleteModal = false; // モーダルを非表示
    },
    removeTodo() {
      this.todos.splice(this.todoToDelete, 1); // 指定したインデックスのTodoを削除
      this.closeModal(); // モーダルを非表示
    },
    toggleComplete(index) {
      this.todos[index].completed = !this.todos[index].completed; // 完了状態を切り替え
    },
  },
};
</script>

<style>
@import "bootstrap-icons/font/bootstrap-icons.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; /* フォント設定 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; /* 中央揃え */
  color: #2c3e50; /* テキストカラー */
  margin-top: 30px; /* 上部マージン */
  background-color: #e5edef;
}
#confirmDeleteModel {
  display: block;
  opacity: 1;
}
html {
  background-color: #e5edef;
}
h1 {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
  background-color: #e5edef;
  width: 100vw;
  height: 5rem;
}
.form-control {
  background-color: #eee; /* 入力フィールドの背景色 */
}
.completed {
  text-decoration: line-through !important; /* 完了したTodoに取り消し線 */
  color: gray !important; /* 完了したTodoのテキストカラー */
  background-color: #dddddd !important; /* 完了したTodoの背景色 */
}
.list-group {
  margin-top: 5rem;
}
.list-group-item {
  word-break: break-all; /* 単語の折り返し */
}
.modal {
  --bs-modal-margin: 0 !important;
}
.modal-dialog {
  border-radius: 0.5rem;
  width: 90vw !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
}

@media (min-width: 576px) {
  .modal-dialog {
    top: 50%;
    left: 0;
    transform: translate(0, -50%) !important;
  }
}
.modal-content {
  background-color: #ebeff0 !important;
}
.modal-body {
  word-break: break-all;
}
.fadeIn {
  animation-name: fadeInAnime;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes fadeInAnime {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
.card {
  width: 90vw;
  position: fixed !important;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -30%);
  background-color: #e5edef !important;
}
.spacer {
  height: 6rem;
}
footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  opacity: 0.5;
}
</style>
