<template>
    <li class="todo-item">
      <span v-if="!editing" class="todo-item__title" >{{ todo.title }}</span>
      <div v-if="!editing" class="todo-item__buttons">
        <v-btn @click="showEdit" class="ma-2 todo-item__button" x-small fab color="indigo">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>

        <v-btn @click="handleClick" class="ma-2 todo-item__button" x-small fab color="indigo">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </div>

      <div v-if="editing" class="todo-item__edit-input">
        <input type="text" v-model="todo.title" @keyup.enter="hideEdit">
      </div>
    </li>
</template>

<script>
  export default {
    props: {
      todo: Object,
      },
    name: "TodoItem",
    methods: {
      handleClick() {
        console.log(this.todo.id)
        this.$emit('delete-todo', this.todo.id)
      },
      showEdit() {
        this.todo.editing = true;
        this.$emit('edit-todo', this.todo.id)
      },
      hideEdit() {
        this.editing = false;
      }
    }
    
  };
</script>

<style lang="scss" scoped>
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
    &__edit-input{
      height: 32px;
    }
  }
</style>