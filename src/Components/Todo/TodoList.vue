<template>
  <ul class="todo-list">
    <p class="todo-list__empty" v-if="!getTodos.length">Your ToDo list is empty now!</p>
    <TodoItem v-for="todo in getTodos" :key="todo.id" :todo="todo"></TodoItem>
  </ul>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
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
      handleEditItem($event) {
        this.$emit('edit-todo', $event)
      }
    },
    computed: {
      ...mapGetters(['getTodos']),
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

    &__empty {
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