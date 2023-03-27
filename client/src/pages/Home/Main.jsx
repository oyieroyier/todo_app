import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TodoDetails from '../Todos/TodoDetails';
import UpdateTodos from '../../components/UpdateTodos';

const Main = () => {
	const todoStatusBackgroundColors = {
		CREATED: '#cfcf6f',
		'IN PROGRESS': '#58c962',
		COMPLETE: '#3199df',
		CANCELED: '#eb3f3f',
	};
	const todoStatusFontColors = {
		CREATED: '#333',
		'IN PROGRESS': 'whitesmoke',
		COMPLETE: 'whitesmoke',
		CANCELED: '#333',
	};
	const priorityColors = {
		HIGH: 'red',
		MEDIUM: 'yellowgreen',
		LOW: 'whitesmoke',
	};

	const [todos, setTodos] = useState([]);
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		fetch('https://todos-dummy-data.vercel.app/posts')
			.then((r) => r.json())
			.then((todos) => setTodos(todos));
	}, []);

	return (
		<div className="todo-cont">
			{todos.map((todo) => (
				<div key={todo.id} className="todo">
					<h4>{todo.title}</h4>
					<p>{todo.description}</p>
					<h5
						style={{
							backgroundColor: todoStatusBackgroundColors[todo.status],
							color: todoStatusFontColors[todo.status],
						}}
					>
						<span>Status:</span>
						{todo.status}
					</h5>
					<h5
						style={{
							color: priorityColors[todo.priority],
						}}
					>
						<span>Priority:</span>
						{todo.priority}
					</h5>
					<div className="todo-buttons">
						<button onClick={() => setIsOpen(true)}>UPDATE</button>
						<button className='del-btn'>DELETE</button>
					</div>
				</div>
			))}
			{isOpen && <UpdateTodos setIsOpen={setIsOpen} />}
		</div>
	);
};

export default Main;
