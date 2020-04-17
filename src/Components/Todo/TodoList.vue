<template>
  <ul class="todo-list">
    <p class="todo-list__empty" v-if=" this.todos.length == 0">Your todo list is empty now!</p>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @delete-todo="handleDeleteItem($event)" @edit-todo="handleEditItem($event)"></TodoItem>
  </ul>
</template>

<script>
  import TodoItem from "./TodoItem";
  export default {
    props: {
      todos: Array,
    },
    name: "TodoList",
    components: {
      TodoItem
    },
    methods: {
      handleDeleteItem($event) {
        this.$emit('delete-todo', $event)
      },
      handleEditItem($event) {
        this.$emit('edit-todo', $event)
      }
    }
  };
</script>

<style lang="scss">
  .todo-list {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
    padding: 0 10px;
    &__empty{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 35px;
      padding: 5px 10px;
      list-style-type: none;
    }
  }
</style>