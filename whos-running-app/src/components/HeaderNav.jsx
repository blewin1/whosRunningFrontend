import React, { useContext, useState } from 'react';
import Login from './layout/Login/Login';
import Modal from './layout/Modal/Modal';
import { UserContext } from '../utils/userContext.js';
import { withRouter } from 'react-router-dom';
import { BookmarkFill } from '@styled-icons/bootstrap/BookmarkFill';
import NavStyled from './Nav.styled';
import whosIcon from './whosIcon.png';

const HeaderNav = ({ history }) => {
	const { user, setUser, setAddress } = useContext(UserContext);
	const [loginOpen, setLoginOpen] = useState(false);
	const closeLogin = () => setLoginOpen(false);

	const logout = () => {
		localStorage.setItem('UserID', null);
		setUser(null);
		setAddress(null);
		history.push('/');
	};

	return (
		<NavStyled>
			<div className='headerNav'>
				<header className='header'>
					{user ? (
						<span>
							Welcome, <br></br>
							<span onClick={() => history.push('/dashboard')}>
								{user.name}!
							</span>
							<span className='logout' onClick={logout}>
								logout
							</span>
						</span>
					) : (
						<p>
							Welcome, guest!
							<br></br>
							<span
								onClick={() => setLoginOpen(true)}
								className='signIn'>
								Sign In
							</span>
						</p>
					)}
				</header>
			<a href='/dashboard' >
				<img src={whosIcon} alt='icon' className='whosIcon' />
				</a>	
				{loginOpen ? (
					<Modal close={closeLogin}>
						<Login closeLogin={closeLogin} />
					</Modal>
				) : (
					''
				)}
			</div>
		</NavStyled>
	);
};

export default withRouter(HeaderNav);
