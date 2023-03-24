import React from 'react';

const AddToDo = () => {
	const status = ['CREATED', 'IN PROGRESS', 'COMPLETED', 'CANCELED'];
	const priority = ['HIGH', 'MEDIUM', 'LOW'];

	return (
		<div className="add-task-form">
			<form>
				<div className="form-task form-input">
					<label>Task</label>
					<input type="text" />
				</div>
				<div className="form-description form-input">
					<label>Description</label>
					<textarea type="text" />
				</div>
				<div className="form-status">
					{status.map((e, index) => (
						<div key={index}>
							<input type="radio" name={e} />
							<label htmlFor="">{e}</label>
						</div>
					))}
				</div>
				<div className="form-priority">
					<label htmlFor="">Priority</label>
					<select>
						{priority.map((e, index) => (
							<option key={index}>{e}</option>
						))}
					</select>
				</div>
				<div className="form-btn">
					<button>Add Task</button>
				</div>
			</form>
		</div>
	);
};

export default AddToDo;
