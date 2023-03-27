import React, { useState } from 'react';

const UpdateForm = () => {
	const statuses = ['CREATED', 'IN PROGRESS', 'COMPLETED', 'CANCELED'];
	const priorities = ['HIGH', 'MEDIUM', 'LOW'];
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [status, setStatus] = useState([]);
	const [priority, setPriority] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const todo = {
			title,
			description,
			status,
			priority,
		};

		fetch('http://localhost:3000/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(todo),
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					console.log(res);
					throw Error('Response from this resource has a problem: ');
				}
			})
			.then((data) => console.log(data))
			.catch((error) => console.error(error));
	};

	return (
		<div className="add-task-form">
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>Update Task</legend>

					<div className="form-task form-input">
						<label>Task</label>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className="form-description form-input">
						<label>Description</label>
						<textarea
							type="text"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>
					<div className="form-status">
						{statuses.map((e, index) => (
							<div key={index}>
								<input
									type="radio"
									value={status}
									name="status"
									onChange={(e) => setStatus(e.target.value)}
								/>
								<label htmlFor="">{e}</label>
							</div>
						))}
					</div>
					<div className="form-priority">
						<label htmlFor="">Priority</label>
						<select>
							{priorities.map((e, index) => (
								<option
									key={index}
									value={priority}
									onChange={(e) => setPriority(e.target.value)}
								>
									{e}
								</option>
							))}
						</select>
					</div>
					<div className="form-btn">
						<button>Update Task</button>
					</div>
				</fieldset>
			</form>
		</div>
	);
};

export default UpdateForm;
