<template>
  <div id="app">
    <h1>Welcome to my Vue3 Pet Project</h1>
    <TodoList
      :todos="todos"
      @click="onClickTodo"
    />
    <TodoForm
      :addTodo="addNewTodo"
    />
  </div>
</template>

<script>

import { ref } from 'vue';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';
export default {
  name: 'App',
  components: {
    TodoForm,
    TodoList
  },
  setup() {
    const todos = ref([]);
    const addNewTodo = (todo) => {
      todos.value.push(todo);
    }

    const onClickTodo = ({ target: { __vnode: { key } } }) => {
      const index = todos.value.findIndex(todo => todo._id == key);
      todos.value[index].todoIsDone = !todos.value[index].todoIsDone;
    }

    return {
      todos,
      addNewTodo,
      onClickTodo
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
