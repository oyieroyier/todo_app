import React from 'react';
import Navbar from '../../components/Navbar';
import IMAGES from '../../images/Images';
import { Link } from 'react-router-dom';

const LandingPage = () => {
	const welcomeMessage = 'Welcome to My Todos';
	const secondaryMessage =
		'Keep track of all your important tasks with a simple lightweight application.';
	return (
		<div className="landing-page">
			<Navbar />

			<div className="hero">
				<h1>{welcomeMessage}</h1>
				<h2>{secondaryMessage}</h2>
				<img src={IMAGES.image1} alt="" />
				<p>
					New user?
					<Link to="/signup"> Signup Here</Link>
				</p>
				<p>
					Returning user?
					<Link to="/login"> Login Here</Link>
				</p>
			</div>
		</div>
	);
};

export default LandingPage;
