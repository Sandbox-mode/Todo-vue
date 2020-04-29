<template>
  <div>
    <TodoCard />
    <TodoInput />
  </div>
</template>


<script>
  import TodoCard from './TodoCard'
  import TodoInput from './TodoInput'
  export default {
    name: 'Todo',
    components: {
      TodoCard,
      TodoInput
    },
    methods: {
    },
  };
</script>

<style>
</style>