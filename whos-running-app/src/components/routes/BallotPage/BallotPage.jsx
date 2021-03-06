import React, { useEffect, useState } from "react";
import Nav from "../../Nav";
import HeaderNav from "../../HeaderNav";
import { getCandidates } from "../../../utils/apiUtils";
import { positions } from "./BallotPositionsList";
import CandidatesContainer from "../../Styled/CandidatesContainer";
import CandidateOption from "../../CandidateOption/CandidateOption";
import BallotStyled from "./Ballot.styled";

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
		<BallotStyled>
			<div>
				<HeaderNav />
				<main className='BallotContainer'>
					<h2 className='ballotTitle'>
						New Hampshire 2020
						<br />
						November Ballot
					</h2>
					<p className='ballotSub'>November 3rd, 2020</p>
					<Nav setSelected={setSelectedPostion} />
					<h4 className='positionName'>{positions[selectedPosition].name}</h4>
					<p className='ballotDescription'>
						{positions[selectedPosition].description}
					</p>
					<CandidatesContainer>
						{filteredCandidates}
					</CandidatesContainer>
				</main>
			</div>
		</BallotStyled>
	);
};

export default BallotPage;
