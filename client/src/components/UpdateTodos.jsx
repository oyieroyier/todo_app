import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import UpdateForm from './UpdateForm';
// import AddToDo from '../AddToDo';

const UpdateTodos = ({ setIsOpen }) => {
	return (
		<>
			<div className="darkBG" />
			<div className="centered">
				<div className="modal">
					<button className="closeBtn" onClick={() => setIsOpen(false)}>
						<RiCloseLine style={{ marginBottom: '-3px' }} />
					</button>
					<div className="modalContent">{<UpdateForm />}</div>
					<div className="modalActions">
						<div className="actionsContainer"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UpdateTodos;
