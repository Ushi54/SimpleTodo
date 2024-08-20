<template>
  <div id="app" class="container">
    <h1 class="my-4">Todo List</h1>
    <div class="card">
      <div class="card-body">
        <input
          v-model="newTodo"
          @keyup.enter="addTodo"
          type="text"
          class="form-control"
          placeholder="Add new todo"
        />
      </div>
    </div>
    <ul class="list-group mt-3">
      <li
        v-for="(todo, index) in todos"
        :key="index"
        :class="{ 'list-group-item': true, completed: todo.completed }"
      >
        <span @click="toggleComplete(index)">{{ todo.text }}</span>
        <button
          @click="removeTodo(index)"
          class="btn btn-danger btn-sm float-right"
        >
          Remove
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },

  methods: {
    addTodo() {
      if (this.newTodo.trim() !== "") {
        this.todos.push({ text: this.newTodo, completed: false });
        this.newTodo = "";
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    toggleComplete(index) {
      this.todos[index].completed = !this.todos[index].completed;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.completed {
  text-decoration: line-through;
}
</style>
