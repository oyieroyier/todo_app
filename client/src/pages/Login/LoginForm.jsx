import React from 'react';
import { RiLockPasswordLine, RiUser3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LoginForm = ({ message }) => {
	return (
		<div className="login-form">
			<div className="form">
				<div className="form-body">
					<form action="">
						<fieldset>
							<legend>
								<h2>{message}</h2>
							</legend>
							<div className="field-group">
								<RiUser3Line />
								<label htmlFor="">email</label>
								<input type="text" placeholder="email or username" />
							</div>
							<div className="field-group">
								<RiLockPasswordLine />
								<label htmlFor="">password</label>
								<input type="password" placeholder="password" />
							</div>
							<div className="button">
								<button>Login</button>
							</div>
						</fieldset>
					</form>
					<p>
						New member? <Link to="/signup">Sign up here</Link>
					</p>
				</div>
				{/* <div className="form-image">
					<img src={IMAGES.image1} alt="" />
				</div> */}
			</div>
		</div>
	);
};

export default LoginForm;
