import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import BallotPage from './components/routes/BallotPage/BallotPage';
import CandidateProfile from './components/routes/CandidateProfile/CandidtateProfile';
import HomePage from './components/routes/HomePage/HomePage';
import UserDashboard from './components/routes/UserDashboard/UserDashboard';
import UserInformation from './components/routes/UserInformation/UserInformation';
import { GlobalStyles } from './global.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
	const [candidate, setCandidate] = useState([]);

	useEffect(() => {
		axios
			.get('https://whos-running-app-api.herokuapp.com/candidates')
			.then((res) => {
				setCandidate(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<GlobalStyles>
			<GlobalStyles />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/user' component={UserInformation} />
				<Route exact path='/dashboard' component={UserDashboard} />
				<Route exact path='/ballot' component={BallotPage} />
				<Route
					exact
					path='/candidate/:candidateId'
					component={CandidateProfile}
				/>
				<Route path='*' render={() => <Redirect to='/' />} />
			</Switch>
		</GlobalStyles>
	);
};

export default App;
