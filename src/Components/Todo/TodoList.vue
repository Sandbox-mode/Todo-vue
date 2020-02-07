<template>
  <ul class="todo-list">
    <TodoItem></TodoItem>
  </ul>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "TodoList",
  components: {
    TodoItem
  }
};
</script>

<style lang="scss">
.todo-list {
  display: flex;
  align-items: center;
  margin-top: 30px;
  padding: 0 10px;
}
</style>