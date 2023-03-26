import { useState, useEffect } from 'react';
import LoginForm from './pages/Login/LoginForm';
import SignupForm from './pages/Signup/SignupForm';
// import Modal from './components/ui/Modal';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Todo from './pages/Home/Todo';
import LandingPage from './pages/Home/LandingPage';
import TodoDetails from './pages/Todos/TodoDetails';

function App() {
	const [username, setUser] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// const [todos, setTodos] = useState('');

	function onLogin({ username, email, password }) {
		setUser(username);
		setPassword(password);
		setEmail(email);
	}

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/todos" element={<Todo />} />
					<Route
						path="/login"
						element={<LoginForm message="Welcome Back" onLogin={onLogin} />}
					/>
					<Route
						path="/signup"
						element={<SignupForm message="Create an Account" />}
					/>
					{/* <Route to="todos/:id" element={<TodoDetails />} /> */}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
