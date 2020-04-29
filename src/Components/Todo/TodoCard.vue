<template>
  <div class="todo-card">
    <h2 class="todo-card__header">2DoApp</h2>
    <TodoList></TodoList>
  </div>
</template>

<script>
  import TodoList from "./TodoList";
  export default {
    props: {
      todos: Array,
    },
    name: "TodoCard",
    components: {
      TodoList
    },
    methods: {
      handleEdit(event) {
        this.$emit('edit-todo', event)
      }
    },

  };
</script>

<style lang="scss">
  .todo-card {
    position: relative;
    max-width: 480px;
    height: 100%;
    background-color: #f5f5f5;
    border-radius: 10px;
    margin: 0 auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    padding: 0 10px;

    &__header {
      text-align: center;
      padding: 20px;
      border-bottom: 1px solid #000;
    }
  }
</style>