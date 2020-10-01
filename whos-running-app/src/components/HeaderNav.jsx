import React, { useContext, useState } from "react";
import Login from "./layout/Login/Login";
import Modal from "./layout/Modal/Modal";
import { UserContext } from "../utils/userContext.js";
import { withRouter } from "react-router-dom";
import { BookmarkFill } from "@styled-icons/bootstrap/BookmarkFill";
import NavStyled from './Nav.styled';
import whosIcon from './whosIcon.png'

const HeaderNav = ({ history }) => {
    const { user } = useContext(UserContext);
    const [loginOpen, setLoginOpen] = useState(false);
    const closeLogin = () => setLoginOpen(false);

    return (
		<NavStyled>
			<div>
				<header className='header'>
					{user ? (
						<span className='signIn'>
							Welcome!
							<span onClick={() => history.push('/dashboard')}>
								{user.name}
							</span>
							<span>v</span>
							<BookmarkFill>
								{user.candidates.length}
							</BookmarkFill>
						</span>
					) : (
						<p className='signIn'>
							Welcome!
							<span onClick={() => setLoginOpen(true)}>
								Sign In
							</span>
						</p>
					)}
					<img src={whosIcon} alt='icon' className='whosIcon' />
				</header>
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
 }
export default withRouter(HeaderNav);
