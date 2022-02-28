import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Todos({ todos, removeTodo }) {
	// const item = props.todos;
	const [isHovering, setIsHovering] = useState(false);

	const listItems = todos.map((i) => {
		return (
			<div
				key={i.id}
				id={i.id}
				className="list"
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}>
				<p>{i.label}</p>

				<div className="icon-div">
					<FontAwesomeIcon
						icon={faXmark}
						onClick={() => removeTodo(i.id)}
						className={isHovering ? "" : "hidden"}
					/>
				</div>
			</div>
		);
	});
	return <div>{listItems}</div>;
}

export default Todos;
