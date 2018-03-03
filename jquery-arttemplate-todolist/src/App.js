import $ from 'jquery'

const App = {
  render:function(store,appTpl){
    let appDom = appTpl(store.state)
    $('#app').html(appDom)
    this.listeners(store,appTpl)
  },
  listeners:function(store,appTpl){
    let thisApp = this;
    let { state, getters} = store
    
    if(state.todoBeingEdited){
      let editInput = $('.editing .edit')
      let text = editInput[0].name
      editInput.val(text)
      editInput.focus()
    }else{
      $('.new-todo').focus()
    } 

    $('.new-todo').keypress(function(e){
      if(e.key == 'Enter'){
        let text = $(this).val().trim()
        if(text){
          state.todos.push({
            text,
            id:Date.now().toString(),
            completed:false
          })
          thisApp.render(store,appTpl)
        }
      }
    })

    $(".todo label").dblclick(function(){
      let id = $(this).attr('todoId')
      state.todos.forEach(todo => {
        if(todo.id === id){
          state.todoBeingEdited = todo
        }
      })
      thisApp.render(store,appTpl)
    })

    $(".edit").keydown(function(e){
      if(e.keyCode == 13){
        let id = $(this).attr('todoId')
        let newText = $(this).val()
        if(newText){
          state.todos.forEach(todo => {
            if(todo.id === id){
              todo.text = newText
            }
          })
        }else{
          state.todos = state.todos.filter(
            todo => todo.id !== id
          )
        }
        state.visibleTodos = getters.visibleTodos(store.state)
        state.todoBeingEdited = null
        thisApp.render(store,appTpl)
      }else if(e.keyCode == 27){
        state.todoBeingEdited = null
        thisApp.render(store,appTpl)
      }
    })

    $(".edit").blur(function(){
      let id = $(this).attr('todoId')
      let newText = $(this).val()
        if(newText){
          state.todos.forEach(todo => {
            if(todo.id === id){
              todo.text = newText
            }
          })
        }else{
          state.todos = state.todos.filter(
            todo => todo.id !== id
          )
        }
        state.visibleTodos = getters.visibleTodos(store.state)
        state.todoBeingEdited = null
        thisApp.render(store,appTpl)
    })

    $(".destroy").click(function(){
      let id = $(this).attr('todoId')
      state.todos = state.todos.filter(
        todo => todo.id !== id
      )
      state.visibleTodos = getters.visibleTodos(store.state)
      thisApp.render(store,appTpl)
    })

    $('.toggle').change(function(){
      let id = $(this).attr('todoId')
      state.todos.forEach(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
      })
      state.visibleTodos = getters.visibleTodos(store.state)
      thisApp.render(store,appTpl)
    })

    $('#toggleAll')[0].checked = getters.toggleAllChecked(state.todos)
    
    $('#toggleAll').change(function(){
      let checked = $(this)[0].checked
      state.todos.forEach(todo => {
        todo.completed = checked
      })
      state.visibleTodos = getters.visibleTodos(store.state)
      thisApp.render(store,appTpl)
    })

    if(state.todos.length > 0 ){
      $('.main').show()
      $('.footer').show()
    }else{
      $('.main').hide()
      $('.footer').hide()
    }

    $(".filters a").click(function(){
      let filterName = $(this)[0].name;
      state.visibilityFilter = filterName
      state.visibleTodos = getters.visibleTodos(store.state)
      thisApp.render(store,appTpl)
    })

    getters.activeTodoCount(state.todos) < state.todos.length
    ? $('.clear-completed').show()
    : $('.clear-completed').hide()

    $('.clear-completed').click(function(){
      state.todos = state.todos.filter(
        todo => todo.completed === false
      )
      state.visibleTodos = getters.visibleTodos(store.state)
      thisApp.render(store,appTpl)
    })
  }
}
 
export default App
