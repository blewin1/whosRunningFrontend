import React, { useContext, useEffect } from "react";
import { UserContext } from "../../../utils/userContext.js";
import { BoxArrowUpRight } from "@styled-icons/bootstrap/BoxArrowUpRight";
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline/ArrowIosForwardOutline";
import { Link } from "react-router-dom";
import HeaderNav from "../../HeaderNav.jsx";
import CandidateOption from "../../CandidateOption/CandidateOption.jsx";
import CandidatesContainer from "../../Styled/CandidatesContainer.jsx";

const UserDashboard = ({ history }) => {
    const { user, address, setAddress } = useContext(UserContext); //SetAddress just here temporarily

    useEffect(() => {
        //check if user exists in context

        //check if address exists in context
        if (!address) {
            setAddress({ city: "Handover", state: "NH" });
        }

        //if not, check if user exists in localstorage and call api to get user information

        //otherwise redirect to home page
        // history.push("/");
    }, [address, setAddress]);
    // if(user.candidates.length === 0){
    //     return (
    // 		<h6>
    // 			You do not have any chosen candidates.
    // 			<br />
    // 			Select a ballot and begin adding to your list.
    // 		</h6>
    // 	);
    // }

    if (!user || !user.candidates) return <span>loading...</span>;

    const favorites = user.candidates.map((el, i) => {
        return (
            <CandidateOption
                key={i}
                image={el.image_url}
                name={el.name}
                party={el.party_affiliation}
            />
        );
    });

    if (!address) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <HeaderNav />
            <h2>Name Here</h2>
            <span>{`${address.city}, ${address.state}`}</span>
            <Link to="/ballot">
                {/* {BallotPage} */}
                <ArrowIosForwardOutline className="icon" />
            </Link>

            <h1>Upcoming Elections</h1>
            <h2>New Hampshire 2020 Ballot</h2>
            <h6>November 3, 2020</h6>
            <h4>32 days until the election</h4>
            <h1>My Candidates</h1>
            <CandidatesContainer>
                {favorites}
            </CandidatesContainer>
            <a href="https://www.usa.gov/register-to-vote">
                Go Vote <BoxArrowUpRight className="icon" />
            </a>
        </div>
    );
};

export default UserDashboard;
