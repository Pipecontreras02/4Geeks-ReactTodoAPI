import React, { useState } from "react";
import TodoForm from "./todoform.js";
import TodoList from "./TodoList.js";

//create your first component
const App = () => {
	return (
		<div className="todoapp">
			<TodoList />
		</div>
	);
};

export default App;
