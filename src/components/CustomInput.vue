<template>
	<input
		:value="modelValue"
		@input="handleInputChange"
		:type="type"
	/>
</template>



<script>

export default {
	props: {
		modelValue: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: 'input'
		}
	},
	setup(props, { emit }) {
		const handleInputChange = (e) => {
			emit('update:modelValue', e.target.value);
		};
		return {
			handleInputChange
		}
	}
}
</script>

<style>
	
</style>