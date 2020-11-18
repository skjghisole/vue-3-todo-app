<template>
  <div id="app">
    <h1>Welcome to my Vue3 Pet Project</h1>
   <!--  <CustomInput
      :v-model:modelValue="email"
    /> -->
    <TodoForm/>
  </div>
</template>

<script>

import { ref, watch } from 'vue';
// import CustomInput from './components/CustomInput.vue';
import TodoForm from './components/TodoForm.vue';
export default {
  name: 'App',
  components: {
    // CustomInput,
    TodoForm
  },
  setup() {
    const email = ref('');
      console.log('The new email value is: ' + email.value)

    watch(email, (newValue) => {
      console.log('The new email value is: ' + newValue)
    })
    return {
      email
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
