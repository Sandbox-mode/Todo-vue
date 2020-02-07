<template>
  <li class="todo-item">
    <span class="todo-item__title">Выгулять собаку</span>
    <div class="todo-item__buttons">
      <v-btn class="ma-2 todo-item__button" x-small fab color="indigo">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>

      <v-btn class="ma-2 todo-item__button" x-small fab color="indigo">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </div>
  </li>
</template>

<script>
export default {
  name: "TodoItem"
};
</script>

<style lang="scss">
.todo-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  background: rgba(218, 27, 202, 0.3);
  border-radius: 10px;
  padding: 5px 10px;
  list-style-type: none;

  &__button {
    margin-left: 5px;
  }
}
</style>