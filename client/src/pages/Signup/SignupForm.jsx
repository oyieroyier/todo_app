import React from 'react';
import { RiLockPasswordLine, RiUser3Line } from 'react-icons/ri';
import { MdAlternateEmail } from 'react-icons/md';

const SignupForm = ({ message }) => {
	return (
		<div className="signup-form">
			<div className="form">
				<div className="form-body">
					<form action="">
						<fieldset>
							<legend>
								<h2>{message}</h2>
							</legend>
							<div className="field-group">
								<RiUser3Line />
								<label htmlFor="">username</label>
								<input type="text" placeholder="username" />
							</div>
							<div className="field-group">
								<MdAlternateEmail />
								<label htmlFor="">email</label>
								<input placeholder="email" />
							</div>
							<div className="field-group">
								<RiLockPasswordLine />
								<label htmlFor="">password</label>
								<input type="password" placeholder="password" />
							</div>
							<div className="button">
								<button>Signup</button>
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignupForm;
