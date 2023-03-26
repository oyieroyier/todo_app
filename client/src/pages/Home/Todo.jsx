import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import Main from './Main';

const Todo = () => {
	const [isOpen, setIsOpen] = useState(false);
	/* const [todos, setTodos] = useState({
		title,
		description,
		status,
		priority,
	}); */
	return (
		<div className="todos-container">
			<div className="btn-class">
				<h1>My Todos</h1>
				<button className="primaryBtn" onClick={() => setIsOpen(true)}>
					Add Todo
				</button>
				{isOpen && <Modal setIsOpen={setIsOpen} />}
			</div>

			<div className="todo-lists">
				<Main/>
			</div>
		</div>
	);
};

export default Todo;
