<template>
  <div>
    <TodoCard :todos="todos" @delete-todo="deleteTodo" @edit-todo = "showEdit"/>
    <TodoInput @TodoInput="addTodo"/>
  </div>
</template>


<script>
import TodoCard from './TodoCard'
import TodoInput from './TodoInput'
export default {
  name: 'Todo',
  components: {
    TodoCard,
    TodoInput
  },
  methods: {
    addTodo (newTodoObj) {
      this.todos = [...this.todos, newTodoObj];
    },
    showEdit(todoEditing) {
      this.todos[0][editing] = true
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    }
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'Выгулять собаку',
          editing: false,
        },
        {
          id: 2,
          title: 'Выгулять кошку',
          editing: false,
        }
      ]
    }
  },
};
</script>

<style>
</style>