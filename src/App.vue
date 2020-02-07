<template>
  <div id="app">
    <div class="container">
      <Todo />
    </div>
  </div>
</template>

<script>
import Todo from "./Components/Todo";

export default {
  name: "app",
  components: {
    Todo
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Roboto", sans-serif;
  min-height: 100vh;
  background-color: #ff698f;
  background-size: cover;
  text-decoration: none;
  display: flex;
  align-items: center;
}
</style>