/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-undef
const app = new Vue({
	el: '#app',
	data: {
		title: 'Todo List',
		newTodo: '',
		todos: [],
	},
	methods: {
		addTodo() {
			this.todos.push({
				title: this.newTodo,
				done: false,
			});
			this.newTodo = '';
		},
		allDone() {
			this.todos.forEach((todo) => {
				todo.done = true;
			});
		},
		removeTodo(li) {
			const todoIndex = this.todos.indexOf(li);
			this.todos.splice(todoIndex);
		},
	},
});
