import React, { useEffect, useState } from "react";
import Nav from "../../Nav";
import HeaderNav from "../../HeaderNav";
import { getCandidates } from "../../../utils/apiUtils";
import { positions } from "./BallotPositionsList";
import CandidatesContainer from "../../Styled/CandidatesContainer";
import CandidateOption from "../../CandidateOption/CandidateOption";

const BallotPage = ({ history }) => {
    const [candidates, setCandidates] = useState([]);
    const [selectedPosition, setSelectedPostion] = useState(0);

    useEffect(() => {
        const initialize = async () => {
            setCandidates(await getCandidates());
        };
        initialize();
    }, []);



    const filteredCandidates = candidates
        .filter((c) => c.position === positions[selectedPosition].name)
        .map((el, i) => (
            <CandidateOption
                key={i}
                image={el.image_url}
                name={el.name}
                party={el.party_affiliation}
				id={el.id}
				history={history}
            />
        ));


    return (
        <div>
            <HeaderNav />
            <main>
                <h2>
                    New Hampshire 2020
                    <br />
                    November Ballot
                </h2>
                <p>November 3rd, 2020</p>
                <Nav
                // description.map((category) =>{
                //     return (

                //     )
                // })
                />
                <CandidatesContainer>{filteredCandidates}</CandidatesContainer>
            </main>
            Ballot Page https://www.npmjs.com/package/tiny-slider-react
        </div>
    );
};

export default BallotPage;
