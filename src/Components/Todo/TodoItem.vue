<template>
  <li class="todo-item">
    <span v-if="!todo.editing" class="todo-item__title">{{ todo.title }}</span>
    <div class="todo-item__buttons">
      <v-btn v-if="!todo.editing" @click="showEdit" class="ma-2 todo-item__button" x-small fab color="indigo">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn v-if="!todo.editing" @click="handleClick" class="ma-2 todo-item__button" x-small fab color="indigo">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </div>

    <div v-if="todo.editing" class="todo-item__edit-input">
      <input ref="input" maxlength="29" class="todo-item__input-edit" type="text" v-model="localValue" @keyup.enter="hideEdit">
    </div>

    <v-btn v-if="todo.editing" class="ma-2 todo-item__checkbutton" x-small fab color="indigo" @click="hideEdit">
      <v-icon>mdi-check</v-icon>
    </v-btn>
  </li>
</template>

<script>
  export default {
    props: {
      todo: Object,
    },
    name: "TodoItem",
    data() {
      return {
        localValue: this.todo.title,
      }
    },
    methods: {
      handleClick() {
        console.log(this.todo.id)
        this.$emit('delete-todo', this.todo.id)
      },
      showEdit() {
        // console.log(this.$refs)
        this.todo.editing = true;
        // this.$emit('edit-todo', this.todo.id);
        this.$nextTick(() => this.$refs.input.focus())

      },
      hideEdit() {
        if (!this.localValue) return

        this.$emit('edit-todo', {
          id: this.todo.id,
          title: this.localValue,
          editing: false
        });
      },
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

    &__checkbutton {
      display: block;
    }

    &__edit-input {
      height: 32px;
      display: flex;
      text-align: center;
      justify-content: space-between;
      width: 100%;
    }

    &__input-edit {
      background-color: #fff;
      width: 80%;
      border-radius: 5px;
    }


  }
</style>