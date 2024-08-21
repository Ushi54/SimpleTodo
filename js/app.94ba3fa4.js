(function(){"use strict";var o={8285:function(o,t,e){var l=e(3751),n=e(641),s=e(33);const i={id:"app",class:"container"},a=(0,n.Lk)("h1",{class:"pt-3"},[(0,n.Lk)("i",{class:"bi bi-ui-checks"}),(0,n.eW)(" SimpleTodo")],-1),d={class:"list-group"},r={class:"container"},c={class:"row"},u={class:"col-2 mt-auto mb-auto"},f=["onClick"],m={class:"col-8 mt-auto mb-auto text-start"},b={class:"col-2 mt-auto mb-auto"},p=["onClick"],h=(0,n.Lk)("i",{class:"bi bi-trash"},null,-1),k=[h],v=(0,n.Lk)("div",{class:"spacer"},null,-1),L={key:0,class:"modal fade fadeIn",id:"confirmDeleteModel",tabindex:"-1",role:"dialog","aria-labelledby":"confirmDeleteModalLabel","aria-hidden":"true"},g={class:"modal-dialog shadow",role:"document"},w={class:"modal-content"},T=(0,n.Lk)("div",{class:"modal-header"},[(0,n.Lk)("h5",{class:"modal-title",id:"confirmDeleteModalLabel"},[(0,n.Lk)("i",{class:"bi bi-exclamation-triangle-fill text-warning"}),(0,n.eW)(" 確認 ")])],-1),y={class:"modal-body"},C=(0,n.Lk)("br",null,null,-1),x={style:{"font-weight":"bold"}},D={class:"modal-footer"},O={class:"card justify-content-center mt-3 shadow"},_={class:"card-body"},M=(0,n.Lk)("footer",null,[(0,n.Lk)("small",null,"© 2024 K.H")],-1);function j(o,t,e,h,j,E){return(0,n.uX)(),(0,n.CE)("div",i,[a,(0,n.Lk)("ul",d,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(j.todos,((o,t)=>((0,n.uX)(),(0,n.CE)("li",{key:t,class:(0,s.C4)(["list-group-item",{completed:o.completed}])},[(0,n.Lk)("div",r,[(0,n.Lk)("div",c,[(0,n.Lk)("div",u,[(0,n.Lk)("button",{onClick:o=>E.toggleComplete(t),class:(0,s.C4)(["btn btn-sm float-right border border-0 rounded-circle",{"btn-success":o.completed,"":!o.completed}])},[(0,n.Lk)("i",{class:(0,s.C4)(["bi",{"bi-check":o.completed,"bi-square":!o.completed}])},null,2)],10,f)]),(0,n.Lk)("div",m,(0,s.v_)(o.text),1),(0,n.Lk)("div",b,[(0,n.Lk)("button",{onClick:o=>E.confirmDelete(t),class:"btn btn-danger btn-sm float-right mr-3"},k,8,p)])])])],2)))),128))]),v,j.showConfirmDeleteModal?((0,n.uX)(),(0,n.CE)("div",L,[(0,n.Lk)("div",g,[(0,n.Lk)("div",w,[T,(0,n.Lk)("div",y,[(0,n.eW)(" 本当にこのタスクを削除しますか？"),C,(0,n.Lk)("span",x,(0,s.v_)(j.todoToDeleteText),1)]),(0,n.Lk)("div",D,[(0,n.Lk)("button",{onClick:t[0]||(t[0]=(...o)=>E.closeModal&&E.closeModal(...o)),type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," キャンセル "),(0,n.Lk)("button",{type:"button",class:"btn btn-danger",onClick:t[1]||(t[1]=(...o)=>E.removeTodo&&E.removeTodo(...o))}," 削除 ")])])])])):(0,n.Q3)("",!0),(0,n.Lk)("div",O,[(0,n.Lk)("div",_,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>j.newTodo=o),onKeyup:t[3]||(t[3]=(0,l.jR)(((...o)=>E.addTodo&&E.addTodo(...o)),["enter"])),type:"text",class:"form-control",placeholder:"Add new todo...",ref:"todoInput"},null,544),[[l.Jo,j.newTodo]])])]),M])}e(4114);var E={data(){return{newTodo:"",todos:JSON.parse(localStorage.getItem("todos"))||[],showConfirmDeleteModal:!1,todoToDelete:null,todoToDeleteText:""}},watch:{todos:{handler(){localStorage.setItem("todos",JSON.stringify(this.todos))},deep:!0}},methods:{addTodo(){""!==this.newTodo.trim()&&(this.todos.push({text:this.newTodo,completed:!1}),this.newTodo="",this.$refs.todoInput.blur(),window.scrollTo({top:0,behavior:"smooth"}))},confirmDelete(o){this.todoToDelete=o,this.todoToDeleteText=this.todos[o].text,this.showConfirmDeleteModal=!0},closeModal(){this.showConfirmDeleteModal=!1},removeTodo(){this.todos.splice(this.todoToDelete,1),this.closeModal()},toggleComplete(o){this.todos[o].completed=!this.todos[o].completed}}},I=e(6262);const S=(0,I.A)(E,[["render",j]]);var X=S;e(8736),e(414);(0,l.Ef)(X).mount("#app")}},t={};function e(l){var n=t[l];if(void 0!==n)return n.exports;var s=t[l]={exports:{}};return o[l].call(s.exports,s,s.exports,e),s.exports}e.m=o,function(){var o=[];e.O=function(t,l,n,s){if(!l){var i=1/0;for(c=0;c<o.length;c++){l=o[c][0],n=o[c][1],s=o[c][2];for(var a=!0,d=0;d<l.length;d++)(!1&s||i>=s)&&Object.keys(e.O).every((function(o){return e.O[o](l[d])}))?l.splice(d--,1):(a=!1,s<i&&(i=s));if(a){o.splice(c--,1);var r=n();void 0!==r&&(t=r)}}return t}s=s||0;for(var c=o.length;c>0&&o[c-1][2]>s;c--)o[c]=o[c-1];o[c]=[l,n,s]}}(),function(){e.d=function(o,t){for(var l in t)e.o(t,l)&&!e.o(o,l)&&Object.defineProperty(o,l,{enumerable:!0,get:t[l]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){e.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){var o={524:0};e.O.j=function(t){return 0===o[t]};var t=function(t,l){var n,s,i=l[0],a=l[1],d=l[2],r=0;if(i.some((function(t){return 0!==o[t]}))){for(n in a)e.o(a,n)&&(e.m[n]=a[n]);if(d)var c=d(e)}for(t&&t(l);r<i.length;r++)s=i[r],e.o(o,s)&&o[s]&&o[s][0](),o[s]=0;return e.O(c)},l=self["webpackChunk_06_todo_list_in_bootstrap"]=self["webpackChunk_06_todo_list_in_bootstrap"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=e.O(void 0,[504],(function(){return e(8285)}));l=e.O(l)})();
//# sourceMappingURL=app.94ba3fa4.js.map