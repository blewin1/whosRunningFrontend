import React, { useContext, useState } from "react";
import Login from './layout/Login/Login'
import Modal from './layout/Modal/Modal'
import { UserContext } from "../utils/userContext.js";
import NavStyled from './Nav.styled';

const HeaderNav = (props) => {

	const { user } = useContext(UserContext);
	const [loginOpen, setLoginOpen] = useState(false);
	const closeLogin = () => setLoginOpen(false);

    return (
        <NavStyled >
        <div>
            <header className='header'>
                <p className='signIn'>
                    Welcome!
 					<br/>
                    <span onClick={()=> setLoginOpen(true)} style={{textDecoration:'underline',color:'white'}}>Sign In</span>
                </p>
                <img src='img/whosIcon.png' alt='icon' className='whosIcon'/>
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
        </NavStyled>
    );
        }
    export default HeaderNav;

