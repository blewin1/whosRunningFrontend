import React, { useContext, useState } from "react";
import Login from "./layout/Login/Login";
import Modal from "./layout/Modal/Modal";
import { UserContext } from "../utils/userContext.js";
import { withRouter } from "react-router-dom";
import { BookmarkFill } from "@styled-icons/bootstrap/BookmarkFill";

const HeaderNav = ({ history }) => {
    const { user } = useContext(UserContext);
    const [loginOpen, setLoginOpen] = useState(false);
    const closeLogin = () => setLoginOpen(false);

    return (
        <div>
            <header>
                {user ? (
                    <span>
                        Hi,
                        <span onClick={() => history.push("/dashboard")}>
                            {user.name}
                        </span>
                        <span>v</span>
                        <BookmarkFill>{user.candidates.length}</BookmarkFill>
                    </span>
                ) : (
                    <p>
                        Hi, guest
                        <span onClick={() => setLoginOpen(true)}>Sign In</span>
                    </p>
                )}
            </header>
            {loginOpen ? (
                <Modal close={closeLogin}>
                    <Login closeLogin={closeLogin} />
                </Modal>
            ) : (
                ""
            )}
        </div>
    );
};

export default withRouter(HeaderNav);
