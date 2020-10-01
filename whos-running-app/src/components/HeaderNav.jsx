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
};

export default HeaderNav;
