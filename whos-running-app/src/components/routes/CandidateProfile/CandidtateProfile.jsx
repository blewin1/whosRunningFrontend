import React, { useEffect, useState, useContext } from "react";
import Nav from "../../Nav";
import HeaderNav from "../../HeaderNav";
import { getCandidates } from "../../../utils/apiUtils";
import { positions } from "../BallotPage/BallotPositionsList";
import CandidatesContainer from "../../Styled/CandidatesContainer";
import CandidateOption from "../../CandidateOption/CandidateOption";
import { Route, Link } from "react-router-dom";
import RoundImage from "../../Styled/RoundImage.styled";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { Link45deg } from "@styled-icons/bootstrap/Link45deg";
import CandidatePageStyled from "./CandidatePage.styled";
import { Bookmark } from "@styled-icons/boxicons-regular/Bookmark";
import { BookmarkFill } from "@styled-icons/bootstrap/BookmarkFill";
import { UserContext } from "../../../utils/userContext.js";
import {
    addFavorite as APIaddFavorite,
	getUser,
	removeFavorite as APIremoveFavorite
} from "../../../utils/apiUtils";

let role = "";

const CandidatePage = (props) => {
    const [candidates, setCandidates] = useState([]);
    const [selectedPosition, setSelectedPostion] = useState(0);
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        const initialize = async () => {
            setCandidates(await getCandidates());
        };
        initialize();
    }, []);

    const addFavorite = async () => {
        await APIaddFavorite(user.id, parseInt(props.match.params.candidateId));
        setUser(await getUser());
    };
    const removeFavorite = async () => {
		await APIremoveFavorite(user.id, parseInt(props.match.params.candidateId));
		setUser(await getUser());
	};
    let candidateInfo = candidates.map((candi, index) => {
        if (props.match.params.candidateId == candi.id) {
            role = candi.position;
            return (
                <div>
                    <CandidatePageStyled>
                        <div className="picAndQuote">
                            <img
                                src={candi.image_url}
                                alt="candidate"
                                className="bigPic"
                            />
                            <p className="bioOfCandi">"{candi.bio}"</p>
                        </div>
                        <h1 className="candiName">{candi.name} </h1>
                        <h3 className="candiPosition">{candi.position} </h3>
                        <div className="favorite">
							{user &&
							user.candidates &&
                            user.candidates.find(
                                (el) => el.id == props.match.params.candidateId
                            ) ? (
                                <BookmarkFill onClick={removeFavorite}/>
                            ) : (
                                <Bookmark onClick={addFavorite} />
                            )}
                        </div>
                        <p className="candiBio">{candi.bio}</p>
                        <div className="socialLinks">
                            <a href={candi.twitter}>
                                <Twitter className="twitter" Twitter />{" "}
                            </a>
                            <a href={candi.facebook}>
                                <Facebook className="facebook" Facebook />{" "}
                            </a>
                            <a href={candi.campaign_website}>
                                {" "}
                                <Link45deg className="links" Campaign website />
                            </a>
                            <h3 className="whatPos">
                                Other Candidates General Election:
                                {candi.position}
                            </h3>
                        </div>
                    </CandidatePageStyled>
                </div>
            );
        }
    });
    let notCandidateInfo = candidates.map((candi, index) => {
        if (
            role == candi.position &&
            candi.id != props.match.params.candidateId
        ) {
            return (
                <div>
                    <span className="line"></span>
                    <CandidatePageStyled>
                        <img
                            className="secondCandi"
                            src={candi.image_url}
                            alt="additional candiddates"
                        />
                        <h4 className="secondName">{candi.name}</h4>
                        <h5>{candi.party_affiliation}</h5>
                    </CandidatePageStyled>
                </div>
            );
        }
    });
    return (
        <div>
            <HeaderNav />
            <nav>
                <Link to="/ballot"> All Candidates </Link>
            </nav>
            {candidateInfo}
            {notCandidateInfo}
        </div>
    );
};

export default CandidatePage;
