
<template>
	<form>
		<TodoInput
			v-model:todoTitle.capitalize="newTodo.todoTitle"
			v-model:todoIsDone="newTodo.todoIsDone"
		/>
	</form>
</template>

<script>
import { reactive } from 'vue';
import TodoInput from './TodoInput.vue';

export default {
	components: {
		TodoInput
	},
	setup() {
		const newTodo = reactive({
			todoTitle: '',
			todoIsDone: false
		});

		return {
			newTodo
		}
	}
}
</script>

<style>
</style>