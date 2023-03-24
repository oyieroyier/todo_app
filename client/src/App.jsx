import { useState } from 'react';
import LoginForm from './pages/Login/LoginForm';
import SignupForm from './pages/Signup/SignupForm';
import Modal from './components/ui/Modal';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="App">
			<Router>
				<Routes>
					{/* <Route path='/todos' element={} /> */}
					<Route path="/login" element={<LoginForm message="Welcome Back" />} />
					<Route
						path="/signup"
						element={<SignupForm message="Create an Account" />}
					/>
				</Routes>
			</Router>
			<button className="primaryBtn" onClick={() => setIsOpen(true)}>
				Add Todo
			</button>
			{isOpen && <Modal setIsOpen={setIsOpen} />}
		</div>
	);
}

export default App;
