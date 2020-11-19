<template>
	<div class="todo-list-container">
	   	<p
	   		v-for="todo in todos"
	   		:key="todo._id"
	   		v-bind="$attrs"
	   		:class="{isTodoDone: todo.todoIsDone}"
	   	>
	      {{todo.todoTitle}}
	    </p>
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
	props: {
		todos: {
			type: Array,
			default: []
		}
	},
	data() {

	}
}
</script>

<style>
	.isTodoDone {
	    text-decoration: line-through;
	}
</style>