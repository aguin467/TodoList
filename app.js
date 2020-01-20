/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-undef
const app = new Vue({
	el: '#app',
	data: {
		title: 'The Coding A',
		newTodo: '',
		todos: []
	},
	methods: {
		addTodo() {
			this.todos.push({
				title: this.newTodo,
				done: false
			});
			this.newTodo = '';
		},
		removeTodo(todo) {
			const todoIndex = this.todos.indexOf(todo);
			this.todos.splice(todoIndex, 1);
		},
		allDone() {
			this.todos.forEach(todo => {
				todo.done = true;
			});
		},
	}
});
