import React, { useState, useEffect } from "react";
import TodoForm from "./todoform.js";
import Todos from "./Todo.js";
import { library } from "@fortawesome/fontawesome-svg-core";

var newTodos = [];

let url = "https://assets.breatheco.de/apis/fake/todos/user/pipecontreras";

const TodoList = () => {
	const [todos, setTodos] = useState([]);

	// API START function
	async function startAPI(web) {
		let response = await fetch(web, {
			// Reiniciamos la API
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
		});
		response = await response.json();
		let secondResponse = await fetch(web, {
			//reiniciamos/creamos la lista vacia
			method: "POST",
			body: JSON.stringify([]),
			headers: { "Content-Type": "application/json" },
		});
		secondResponse = await secondResponse.json();
	}
	// API START
	useEffect(() => {
		startAPI(url);
	}, []);

	const updateAPI = (todos) => {
		let updateTodos = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(todos),
		};

		fetch(url, updateTodos)
			.then((res) => {
				if (res.status >= 200 && res.status < 300) {
					console.log("El request se hizo bien");
					return res.json();
				} else {
					console.log(res.status);
				}
			})
			.then((body) => console.log(body))
			.catch((error) => console.log("error", error));
	};

	const addTodo = (todo) => {
		newTodos = [todo, ...todos];
		console.log(newTodos);
		setTodos(newTodos);
		updateAPI(newTodos);
	};

	const removeTodo = (id) => {
		const removeArr = [...todos].filter((todo) => todo.id !== id);
		console.log(removeArr);
		setTodos(removeArr);
		updateAPI(removeArr);
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
