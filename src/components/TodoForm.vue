
<template>
	<form
		@submit.prevent="handleSubmit"
	>
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
	props: {
		addTodo: {
			type: Function
		}
	},
	setup(props) {
		const initialTodoState = {
			todoTitle: '',
			todoIsDone: false
		}
		const newTodo = reactive({...initialTodoState});

		const clearForm = () => {
			Object.assign(newTodo, initialTodoState);
		}

		const handleSubmit = () => {
			props.addTodo({...newTodo, _id: new Date()});
			clearForm();
		}

		return {
			newTodo,
			handleSubmit,
			clearForm
		}
	}
}
</script>

<style>
</style>