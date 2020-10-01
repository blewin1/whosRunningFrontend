import React, { useContext, useEffect } from "react";
import { UserContext } from "../../../utils/userContext.js";
import { BoxArrowUpRight } from "@styled-icons/bootstrap/BoxArrowUpRight";
import { ArrowIosBackOutline } from "@styled-icons/evaicons-outline/ArrowIosBackOutline"
import HeaderNav from "../../HeaderNav.jsx";
import CandidateOption from "../../CandidateOption/CandidateOption.jsx";
import CandidatesContainer from "../../Styled/CandidatesContainer.jsx";
import Button from "../../Styled/Button.styled.jsx";
import ElectionCard from "./ElectionCard/ElectionCard.jsx";
import { Link } from "react-router-dom";
import UserDashboardStyled from "./UserDashboard.styled.jsx";


const UserDashboard = ({ history }) => {
    const { user, address, setAddress } = useContext(UserContext); //SetAddress just here temporarily

    useEffect(() => {
        //check if user exists in context

        //check if address exists in context
        if (!address) {
            
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

   

    const favorites = user ? user.candidates.map((el, i) => {
        return (
            <CandidateOption
                key={i}
                image={el.image_url}
                name={el.name}
                party={el.party_affiliation}
            />
        );
    }) : [];

    if (!address) {
        return <h1>Loading...</h1>;
    }

    return (
        <UserDashboardStyled>
            <HeaderNav />
            <Link to='/' className="prev-page"> <ArrowIosBackOutline className="icon back-arrow" />Change Location</Link>
            <h2>{`${address.city}, ${address.state}`}</h2>

            <h3>Upcoming Elections</h3>
            <ElectionCard />
            <h3>My Candidates</h3>
            <CandidatesContainer>
                {favorites}
            </CandidatesContainer>
            <Button className="polling-link" as='a' href="https://www.usa.gov/register-to-vote">
                Your Polling Place <BoxArrowUpRight className="icon white" />
            </Button>
        </UserDashboardStyled>
    );
};

export default UserDashboard;
