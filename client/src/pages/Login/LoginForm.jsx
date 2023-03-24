import React from 'react';
import { RiLockPasswordLine, RiUser3Line } from 'react-icons/ri';
import IMAGES from '../../images/Images';

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
						New member? <a href="/signup">Sign up here</a>
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
