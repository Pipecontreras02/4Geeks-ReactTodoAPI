import React, { useState } from "react";
import TodoForm from "./todoform.js";
import Todos from "./Todo.js";
import { library } from "@fortawesome/fontawesome-svg-core";

var newTodos = [];

const TodoList = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		newTodos = [todo, ...todos];
		setTodos(newTodos);
		console.log(newTodos);
	};

	const removeTodo = (id) => {
		console.log("helloow");
		const removeArr = [...todos].filter((todo) => todo.id !== id);
		console.log(removeArr);
		setTodos(removeArr);
	};
	var count = todos.length;
	return (
		<div className="todo-list">
			<h1>todos</h1>
			<TodoForm onSubmit={addTodo} />
			<div className="list-box">
				<Todos todos={todos} removeTodo={removeTodo} />
			</div>
			<div className="counter">
				<p id="counter-p">{count} todos left</p>
			</div>
		</div>
	);
};

export default TodoList;
