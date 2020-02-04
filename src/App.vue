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
            <div class="todo-table__line">
              <li class="todo-table__item">Выгулять собаку</li>
              <div class="todo-table__line-buttons">
                <v-btn class="ma-2 line-button" small fab color="indigo">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>

                <v-btn class="ma-2 line-button" small fab color="indigo">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </div>

            <div class="todo-table__line">
              <li class="todo-table__item">Бла бла бла </li>
              <div class="todo-table__line-buttons">
                <v-btn class="ma-2 line-button" small fab color="indigo">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>

                <v-btn class="ma-2 line-button" small fab color="indigo">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </div>

            <div class="todo-table__line">
              <li class="todo-table__item">Потравить тараканов</li>
              <div class="todo-table__line-buttons">
                <v-btn class="ma-2 line-button" small fab color="indigo">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>

                <v-btn class="ma-2 line-button" small fab color="indigo">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </div>

            <div class="todo-table__line">
              <li class="todo-table__item">Прочитать книгу</li>
              <div class="todo-table__line-buttons">
                <v-btn class="ma-2 line-button" small fab color="indigo">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>

                <v-btn class="ma-2 line-button" small fab color="indigo">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </div>

          </ul>
        </div>
        <div class="todo-table__clean-button"></div>
      </div>

      <div class="todo-input">
        <input type="text" placeholder="Введите что-нибудь..." class="input__item">
        <v-btn rounded color="red" dark>Ok</v-btn>
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
    background-color: #ff698f;
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
      padding-left: 25px;


    }

    &__line {
      width: 428px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 35px;
      background: rgba(218, 27, 202, 0.3);
      border-radius: 10px;
      padding: 5px;
    }

    .line-button {
      margin-left: 5px;
    }



    &__item {

      list-style-type: none;

    }
  }

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