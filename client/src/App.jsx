import { useState } from 'react';
import './App.css';
import LoginForm from './pages/Login/LoginForm';
import SignupForm from './pages/Signup/SignupForm';

function App() {
	return (
		<div className="App">
			<LoginForm message="Welcome Back" />
			<SignupForm message="Create an Account" />
		</div>
	);
}

export default App;
