import React, { useState, useEffect, useRef } from "react";

//create your first component
const TodoForm = (props) => {
	const [input, setInput] = useState("");

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	});

	const [id, setId] = useState(0);
	const OnChange = (e) => {
		setInput(e.target.value);
		setId(id);
	};
	const Submit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: id,
			label: input,
			done: false,
		});
		setInput("");
		setId(id + 1);
	};

	return (
		<form className="todo-form" onSubmit={Submit}>
			<input
				type="text"
				placeholder="What needs to be done?"
				value={input}
				name="label"
				className="input"
				onChange={OnChange}
				ref={inputRef}></input>
			<button className="todo-button">Add to do</button>
		</form>
	);
};

export default TodoForm;
