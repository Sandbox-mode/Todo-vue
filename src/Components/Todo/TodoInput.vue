<template>
  <div>
    <div class="todo-input">
      <input v-model="title" maxlength="29" @keyup.enter="setAddItemHandle" type="text"
        placeholder="Введите что-нибудь..." class="input__item">
      <v-btn @click="setAddItemHandle" rounded color="red" dark>Ok</v-btn>
    </div>
  </div>
</template>

<script>
  import uuid from 'uuid';
  import { mapGetters, mapActions } from 'vuex';
  export default {
    data() {
      return {
        title: '',
      };
    },
    name: 'TodoInput',
    methods: {
      ...mapActions(['setAddItem']),
      setAddItemHandle() {
        if (!this.title.length) {
          return alert("Недопустимое количество символов!");
        }
        this.setAddItem({ title: this.title });
        this.title = '';
      }
    }
  }
</script>

<style lang="scss">
  .todo-input {
    width: 420px;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }

  .input__item {
    background-color: #fff;
    width: 80%;
    height: 40px;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
</style>