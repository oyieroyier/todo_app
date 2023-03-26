import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TodoDetails from '../Todos/TodoDetails';

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

	useEffect(() => {
		fetch('http://localhost:8000/posts')
			.then((r) => r.json())
			.then((todos) => setTodos(todos));
	}, []);

	return (
		<div className="todo-cont">
			{todos.map((todo) => (
				<div key={todo.id} className="todo">
					{/* <Link to={<TodoDetails />}> */}
						<h4>{todo.title}</h4>
						<p>{todo.description}</p>
					{/* </Link> */}
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
						<button>UPDATE</button>
						<button>DELETE</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Main;
