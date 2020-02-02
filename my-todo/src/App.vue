<template>
  <div id="app">
    <div class="container">
      <div class="todo-table">
        <div class="todo-table__header">
          <h2>2DoApp</h2>
        </div>
        <hr class="todo-table__underline">
        <div class="todo-table__list">
          <ul>
            <li class="todo-table__item">Выгулять собаку</li>
            <li class="todo-table__item">Купить молока</li>
            <li class="todo-table__item">Отправить начальнику отчет</li>
            <li class="todo-table__item">Убраться во дворе</li>
          </ul>
        </div>
        <div class="todo-table__clean-button"></div>
      </div>

      <div class="todo-input">
        <input type="text"  placeholder="Введите что-нибудь..." class="input__item">
      </div>

    </div>
  </div>
</template>

<script>


  export default {
    name: 'app',
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    background-color: #F48FB1;
    background-size: cover;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  .todo-table {
    position: relative;
    max-width: 480px;
    height: 100%;
    background-color: #f5f5f5;
    border-radius: 10px;
    margin: 0 auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

    &__underline {
      width: 90%;
      margin: 0 auto;
    }

    &__header {
      text-align: center;
      padding: 20px;
    }

    &__list {
      display: flex;
      align-items: center;
      margin-top: 30px;
      padding-left: 23px;

    }

    &__item {
      margin-bottom: 30px;
      list-style-type: none;
    }
  }

  .todo-input {
    width: 360px;
    margin: 0 auto;
    margin-top: 30px;
  }
  .input__item{
    background-color: #fff;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }

</style>