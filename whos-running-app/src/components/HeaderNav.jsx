import React, { useContext, useState } from "react";
import Login from './layout/Login/Login'
import Modal from './layout/Modal/Modal'
import { UserContext } from "../utils/userContext.js";

const HeaderNav = (props) => {

	const { user } = useContext(UserContext);
	const [loginOpen, setLoginOpen] = useState(false);
	const closeLogin = () => setLoginOpen(false);

    return (
        <div>
            <header>
                <p>
                    Hi, guest
                    <span onClick={()=> setLoginOpen(true)}>Sign In</span>
                </p>
            </header>
            {
                loginOpen ? (
                    <Modal close={closeLogin}>
                        <Login closeLogin={closeLogin} />
                    </Modal>
                ) : (
                        ""
                    )
            }
        </div>
    );
// import React from 'react';
// import NavStyled from './Nav.styled';

// const HeaderNav = (props) => {
// 	return (
// 		<NavStyled >

// 		<div>
// 			<header className='header'>
// 				<p className='signIn'>
// 					Welcome!
// 					<br/>
// 					<a href='../../AddressForm/AddressForm.jsx' style={{textDecoration:'underline',color:'white'}}>Sign In</a>

// 				</p>
// 				<img src='img/whosIcon.png' alt='icon' className='whosIcon'/>
// 			</header>
// 		</div>
// 		</NavStyled>
// 	);
// };

// export default HeaderNav;
