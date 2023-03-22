import React from 'react';

const LoginForm = ({ message }) => {
	return (
		<div className="form">
			<h2>{message}</h2>
			<form action="">
				<label htmlFor="">email</label>
				<input type="text" />

				<label htmlFor="">password</label>
				<input type="password" />
				<button>Login</button>
			</form>
		</div>
	);
};

export default LoginForm;
