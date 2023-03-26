import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import LoginForm from '../../pages/Login/LoginForm';
import AddToDo from '../AddToDo';

const Modal = ({ setIsOpen }) => {
	return (
		<>
			<div className="darkBG" />
			<div className="centered">
				<div className="modal">
					{/* <div className="modalHeader">
					</div> */}
					<button className="closeBtn" onClick={() => setIsOpen(false)}>
						<RiCloseLine style={{ marginBottom: '-3px' }} />
					</button>
					<div className="modalContent">
						<AddToDo/>
					</div>
					<div className="modalActions">
						<div className="actionsContainer">
							{/* <button className="deleteBtn" onClick={() => setIsOpen(false)}>
								CANCEL
							</button> */}
							{/* <button className="cancelBtn" onClick={() => setIsOpen(false)}>
								Cancel
							</button> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
