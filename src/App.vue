<template>
  <div id="app">
    <h1>Welcome to my Vue3 Pet Project</h1>
    <TodoForm
      :addTodo="addNewTodo"
    />
    <p v-for="todo in todos" :key="todo._id">
      {{todo.todoTitle}}
    </p>

  </div>
</template>

<script>

import { ref } from 'vue';
import TodoForm from './components/TodoForm.vue';
export default {
  name: 'App',
  components: {
    TodoForm
  },
  setup() {
    const todos = ref([]);
    const addNewTodo = (todo) => {
      todos.value.push(todo);
    }

    return {
      todos,
      addNewTodo
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
