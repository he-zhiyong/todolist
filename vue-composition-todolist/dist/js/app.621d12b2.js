(function(e){function o(o){for(var n,d,l=o[0],c=o[1],a=o[2],u=0,p=[];u<l.length;u++)d=l[u],Object.prototype.hasOwnProperty.call(i,d)&&i[d]&&p.push(i[d][0]),i[d]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(o);while(p.length)p.shift()();return r.push.apply(r,a||[]),t()}function t(){for(var e,o=0;o<r.length;o++){for(var t=r[o],n=!0,l=1;l<t.length;l++){var c=t[l];0!==i[c]&&(n=!1)}n&&(r.splice(o--,1),e=d(d.s=t[0]))}return e}var n={},i={app:0},r=[];function d(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.m=e,d.c=n,d.d=function(e,o,t){d.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,o){if(1&o&&(e=d(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)d.d(t,n,function(o){return e[o]}.bind(null,n));return t},d.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(o,"a",o),o},d.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},d.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=o,l=l.slice();for(var a=0;a<l.length;a++)o(l[a]);var s=c;r.push([0,"chunk-vendors"]),t()})({0:function(e,o,t){e.exports=t("cd49")},"1f09":function(e,o,t){"use strict";var n=t("8ff1"),i=t.n(n);i.a},"8ff1":function(e,o,t){},cd49:function(e,o,t){"use strict";t.r(o);t("cadf"),t("551c"),t("f751"),t("097d");var n=t("2b0e"),i=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{attrs:{id:"app"}},[t("TodoListApp",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},r=[],d=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"hello"},[t("section",{staticClass:"todoapp"},[t("header",{staticClass:"header"},[t("h1",[e._v("todolist")]),t("add-todo",{on:{onAddTodo:e.addTodo}})],1),t("todo-list",{attrs:{totalCount:e.todos.length,visibleTodos:e.visibleTodos,activeTodoCount:e.activeTodoCount,todoBeingEdited:e.todoBeingEdited},on:{onStartEditTodo:e.startEditTodo,onEndEditTodo:e.endEditTodo,onDestroyTodo:e.destroyTodo,onToggleAllTodo:e.toggleAllTodo}}),t("filter-todo",{attrs:{totalCount:e.todos.length,activeTodoCount:e.activeTodoCount,completedTodoCount:e.completedTodoCount,visibilityFilter:e.visibilityFilter},on:{onFilterChange:e.setVisibilityFilter,onClearCompletedTodo:e.clearCompletedTodo}})],1),e._m(0)])},l=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("footer",{staticClass:"info"},[t("p",[e._v("Double-click to edit a todo")]),t("p",[e._v("TodoList based on vue")]),t("p",[e._v("Source:\n      "),t("a",{attrs:{href:"https://github.com/he-zhiyong/todolist/tree/master/vue-composition-todolist"}},[e._v(" GitHub ")]),e._v("or\n      "),t("a",{attrs:{href:"https://gitee.com/he-zhiyong/todolist/tree/master/vue-composition-todolist"}},[e._v(" Gitee ")])])])}],c=(t("8e6e"),t("456d"),t("bd86")),a=(t("ac6a"),t("6b54"),t("1d55"),t("750b")),s=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodoText,expression:"newTodoText"}],staticClass:"new-todo",attrs:{placeholder:"What needs to be done?",autofocus:"",autocomplete:"off"},domProps:{value:e.newTodoText},on:{keydown:function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.handleAddTodoKeyDown(o)},input:function(o){o.target.composing||(e.newTodoText=o.target.value)}}})},u=[],p=Object(a["b"])({name:"AddTodo",setup:function(e,o){var t=o.emit,n=Object(a["e"])("");function i(){n.value.trim()&&(t("onAddTodo",n.value.trim()),n.value="")}return{newTodoText:n,handleAddTodoKeyDown:i}}}),f=p,v=t("2877"),m=Object(v["a"])(f,s,u,!1,null,null,null),g=m.exports,T=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{directives:[{name:"show",rawName:"v-show",value:e.totalCount,expression:"totalCount"}],staticClass:"main"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.toggleAllTodo,expression:"toggleAllTodo"}],staticClass:"toggle-all",attrs:{id:"toggleAll",type:"checkbox"},domProps:{checked:Array.isArray(e.toggleAllTodo)?e._i(e.toggleAllTodo,null)>-1:e.toggleAllTodo},on:{change:function(o){var t=e.toggleAllTodo,n=o.target,i=!!n.checked;if(Array.isArray(t)){var r=null,d=e._i(t,r);n.checked?d<0&&(e.toggleAllTodo=t.concat([r])):d>-1&&(e.toggleAllTodo=t.slice(0,d).concat(t.slice(d+1)))}else e.toggleAllTodo=i}}}),t("label",{attrs:{for:"toggleAll"}}),t("ul",{staticClass:"todo-list"},e._l(e.visibleTodos,(function(o){return t("Todo",{key:o.id,staticClass:"todo",attrs:{todo:o,todoBeingEdited:e.todoBeingEdited},on:{onStartEditTodo:e.onStartEditTodo,onEndEditTodo:e.onEndEditTodo,onDestroyTodo:e.onDestroyTodo}})})),1)])},b=[],y=(t("c5f6"),function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("li",{class:{completed:e.todo.completed,editing:e.todo==e.todoBeingEdited}},[t("div",{staticClass:"view"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.todo.completed,expression:"todo.completed"}],staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.todo.completed)?e._i(e.todo.completed,null)>-1:e.todo.completed},on:{change:function(o){var t=e.todo.completed,n=o.target,i=!!n.checked;if(Array.isArray(t)){var r=null,d=e._i(t,r);n.checked?d<0&&e.$set(e.todo,"completed",t.concat([r])):d>-1&&e.$set(e.todo,"completed",t.slice(0,d).concat(t.slice(d+1)))}else e.$set(e.todo,"completed",i)}}}),t("label",{on:{dblclick:function(o){return e.handleStartEditTodo(e.todo)}}},[e._v(e._s(e.todo.text))]),t("button",{staticClass:"destroy",on:{click:function(o){return e.handleDestroyTodo(e.todo)}}})]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.editText,expression:"editText"},{name:"todo-focus",rawName:"v-todo-focus",value:e.todo==e.todoBeingEdited,expression:"todo == todoBeingEdited"}],staticClass:"edit",attrs:{type:"text"},domProps:{value:e.editText},on:{blur:function(o){return e.handleEndEditTodo(e.todo)},keyup:[function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.handleEndEditTodo(e.todo)},function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"esc",27,o.key,["Esc","Escape"])?null:e.handleCancelEditTodo(e.todo)}],input:function(o){o.target.composing||(e.editText=o.target.value)}}})])}),h=[],C=Object(a["b"])({name:"Todo",props:{todo:{type:Object,required:!0},todoBeingEdited:{type:Object,required:!1}},setup:function(e,o){var t=o.emit,n=Object(a["e"])("");function i(e){n.value=e.text.trim(),t("onStartEditTodo",e)}function r(o){if(e.todoBeingEdited){var i=n.value.trim();i?(o.text=i,t("onEndEditTodo",o)):t("onDestroyTodo",o.id)}}function d(e){t("onEndEditTodo",e)}function l(e){t("onDestroyTodo",e.id)}return{editText:n,handleStartEditTodo:i,handleEndEditTodo:r,handleCancelEditTodo:d,handleDestroyTodo:l}},directives:{"todo-focus":function(e,o){o.value&&e.focus()}}}),E=C,O=Object(v["a"])(E,y,h,!1,null,null,null),w=O.exports,_=Object(a["b"])({name:"TodoList",components:{Todo:w},props:{totalCount:{type:Number,required:!0},visibleTodos:{type:Array,required:!0},activeTodoCount:{type:Number,required:!0},todoBeingEdited:{type:Object,required:!1}},setup:function(e,o){var t=o.emit,n=e.activeTodoCount,i=Object(a["a"])({get:function(){return 0===n},set:function(e){t("onToggleAllTodo",e)}});function r(e){t("onStartEditTodo",e)}function d(e,o){t("onEndEditTodo",e,o)}function l(e){t("onDestroyTodo",e)}return{toggleAllTodo:i,onStartEditTodo:r,onEndEditTodo:d,onDestroyTodo:l}}}),j=_,x=(t("1f09"),Object(v["a"])(j,T,b,!1,null,"1b4cbca4",null)),A=x.exports,k=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("footer",{directives:[{name:"show",rawName:"v-show",value:e.totalCount,expression:"totalCount"}],staticClass:"footer"},[t("span",{staticClass:"todo-count"},[t("strong",[e._v(e._s(e.activeTodoCount))]),e._v(" "+e._s(e.activeTodoCount>1?"items":"item")+" left\n  ")]),t("ul",{staticClass:"filters"},[t("li",[t("a",{class:{selected:"all"==e.visibilityFilter},on:{click:function(o){return e.handleFilterChange("all")}}},[e._v("All")])]),t("li",[t("a",{class:{selected:"active"==e.visibilityFilter},on:{click:function(o){return e.handleFilterChange("active")}}},[e._v("Active")])]),t("li",[t("a",{class:{selected:"completed"==e.visibilityFilter},on:{click:function(o){return e.handleFilterChange("completed")}}},[e._v("Completed")])])]),t("button",{directives:[{name:"show",rawName:"v-show",value:e.completedTodoCount>0,expression:"completedTodoCount > 0"}],staticClass:"clear-completed",on:{click:e.handleClearCompletedTodo}},[e._v("\n    Clear completed\n  ")])])},S=[],F=Object(a["b"])({name:"FilterTodo",props:{totalCount:{type:Number,required:!0},activeTodoCount:{type:Number,required:!0},completedTodoCount:{type:Number,required:!0},visibilityFilter:{type:String,required:!0}},setup:function(e,o){var t=o.emit;function n(e){t("onFilterChange",e)}function i(){t("onClearCompletedTodo")}return{handleFilterChange:n,handleClearCompletedTodo:i}}}),P=F,N=Object(v["a"])(P,k,S,!1,null,null,null),D=N.exports;function B(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function q(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?B(t,!0).forEach((function(o){Object(c["a"])(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(t).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}var $=Object(a["b"])({name:"TodoListApp",components:{AddTodo:g,TodoList:A,FilterTodo:D},setup:function(){var e=Object(a["d"])({todos:o(),visibilityFilter:"all",todoBeingEdited:null,visibleTodos:Object(a["a"])((function(){switch(e.visibilityFilter){case"all":return e.todos;case"active":return e.todos.filter((function(e){return!e.completed}));case"completed":return e.todos.filter((function(e){return e.completed}));default:return e.todos}})),activeTodoCount:Object(a["a"])((function(){return e.todos.reduce((function(e,o){return e+(o.completed?0:1)}),0)})),completedTodoCount:Object(a["a"])((function(){return e.todos.length-e.activeTodoCount}))});function o(){var e=JSON.parse(localStorage.getItem("todos")||"[]");return e}function t(){localStorage.setItem("todos",JSON.stringify(e.todos))}function n(o){e.todos.push({text:o,id:Date.now().toString(),completed:!1})}function i(o){e.todoBeingEdited=o}function r(o){e.todos.forEach((function(e){e.id===o.id&&(e=o)})),e.todoBeingEdited=null}function d(o){e.todos.forEach((function(e){e.completed=o}))}function l(o){e.todos=e.todos.filter((function(e){return e.id!==o})),e.todoBeingEdited=null}function c(o){e.visibilityFilter=o}function s(){e.todos=e.todos.filter((function(e){return!1===e.completed}))}return window.onbeforeunload=function(){t()},q({},Object(a["f"])(e),{addTodo:n,startEditTodo:i,endEditTodo:r,toggleAllTodo:d,destroyTodo:l,setVisibilityFilter:c,clearCompletedTodo:s})}}),L=$,J=Object(v["a"])(L,d,l,!1,null,null,null),M=J.exports,V=n["a"].extend({name:"app",components:{TodoListApp:M}}),z=V,G=Object(v["a"])(z,i,r,!1,null,null,null),I=G.exports,K=t("9483");Object(K["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["a"].use(a["c"]),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(I)}}).$mount("#app")}});
//# sourceMappingURL=app.621d12b2.js.map