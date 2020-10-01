import React, { useEffect, useContext } from 'react';
import { UserContext } from './utils/userContext.js';
import { Switch, Route, Redirect } from 'react-router-dom';
import BallotPage from './components/routes/BallotPage/BallotPage';
import CandidateProfile from './components/routes/CandidateProfile/CandidtateProfile';
import HomePage from './components/routes/HomePage/HomePage';
import UserDashboard from './components/routes/UserDashboard/UserDashboard';
import UserInformation from './components/routes/UserInformation/UserInformation';
import { GlobalStyles } from './global.jsx';
import { getUser } from './utils/apiUtils.js'

const App = () => {

	const { setUser, setAddress } = useContext(UserContext);

	useEffect(() => {
		const initialize = async () => {
			const user = await getUser()
			if( user ) {
				setUser(user);
				if (user.address) {
					setAddress(user.address)
				}
			}
		}
		initialize()

	}, []);

	return (
		<>
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
		</>
	);
};

export default App;
