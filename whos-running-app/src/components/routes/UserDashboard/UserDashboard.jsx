import React, { useContext, useEffect } from "react";
import { UserContext } from "../../../utils/userContext.js";

const UserDashboard = ({ history }) => {
    const { user, address, setAddress } = useContext(UserContext); //SetAddress just here temporarily

    useEffect(() => {
        //check if user exists in context
        //check if address exists in context
        if(!address) {
            setAddress({ city: 'Dallas', state: 'TX'})
        }

        //if not, check if user exists in localstorage and call api to get user information

        //otherwise redirect to home page
        // history.push("/");
    }, []);

    if(!address) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h2>Name Here</h2>
            <span>{`${address.city}, ${address.state}`}</span>
        </div>
    );
};

export default UserDashboard;
