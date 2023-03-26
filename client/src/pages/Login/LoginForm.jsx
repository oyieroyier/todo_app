import React, { useState } from 'react';
import { RiLockPasswordLine, RiUser3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LoginForm = ({ message, onLogin }) => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (e) => {
		e.preventDefault();
		const user = {
			username,
			email,
			password,
		};

		fetch('http://localhost:3000/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				onLogin(data);
			});
	};
	return (
		<div className="login-form">
			<div className="form">
				<div className="form-body">
					<form onChange={handleLogin}>
						<fieldset>
							<legend>
								<h2>{message}</h2>
							</legend>
							<div className="field-group">
								<RiUser3Line />
								<label htmlFor="">email</label>
								<input
									type="text"
									placeholder="email or username"
									value={username || email}
									onChange={(e) =>
										setUsername(e.target.value) ||
										((e) => setEmail(e.target.value))
									}
								/>
							</div>
							<div className="field-group">
								<RiLockPasswordLine />
								<label htmlFor="">password</label>
								<input
									type="password"
									placeholder="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
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
