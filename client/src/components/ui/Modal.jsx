import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import AddToDo from '../AddToDo';

const Modal = ({ setIsOpen }) => {
	return (
		<>
			<div className="darkBG" />
			<div className="centered">
				<div className="modal">
					<button className="closeBtn" onClick={() => setIsOpen(false)}>
						<RiCloseLine style={{ marginBottom: '-3px' }} />
					</button>
					<div className="modalContent">
						<AddToDo />
					</div>
					<div className="modalActions">
						<div className="actionsContainer">
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
