<template>
	<div>
		<input
			:value="todoTitle"
			type="input"
			@input="handleTitleChange"
		/>
		<input
			:checked="todoIsDone"
			type="checkbox"
			@input="handleIsDoneToggle"
		/>
	</div>
</template>

<script>
import { emitUpdate } from '../utils';

export default {
	props: {
		todoTitle: {
			type: String,
			default: ''
		},
		todoIsDone: {
			type: Boolean,
			default: false
		},
		todoTitleModifiers: {
			type: Object,
			default: () => ({})
		}
	},
	setup(props, { emit }) {
		const handleTitleChange = ({ target: { value }}) => {
			const updateTitle = emitUpdate('todoTitle');
			let title = value;
			if (props.todoTitleModifiers.capitalize) {
				title = value.toUpperCase();
			}
			emit(updateTitle, title);
		}

		const handleIsDoneToggle = ({ target: { checked }}) => {
			const updateTodoIsDone = emitUpdate('todoIsDone');
			emit(updateTodoIsDone, checked);
		}
		return {
			handleTitleChange,
			handleIsDoneToggle
		}
	}
}
</script>

<style>
	
</style>