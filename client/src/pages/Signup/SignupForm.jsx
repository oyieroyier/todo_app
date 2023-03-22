import React from 'react';

const SignupForm = ({message}) => {
	return (
		<div className='form'>
			<h2>{message}</h2>
			<form action="">
				<label htmlFor="">email</label>
				<input type="text" name="" id="" />
				<label htmlFor="">password</label>
				<input type="text" name="" id="" />
				<button>Signup</button>
			</form>
		</div>
	);
};

export default SignupForm;
