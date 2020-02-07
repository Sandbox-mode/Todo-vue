<template>
  <div>
    <div class="todo-input">
        <input type="text" placeholder="Введите что-нибудь..." class="input__item">
        <v-btn rounded color="red" dark>Ok</v-btn>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TodoInput'

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