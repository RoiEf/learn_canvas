import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Board from "../routes/board";
// import Profile from '../routes/profile';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Board path="/board" />
		</Router>
	</div>
)

export default App;
