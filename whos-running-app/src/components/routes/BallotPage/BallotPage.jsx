import React, { useContext, useEffect, useState } from "react";
import Nav from "../../Nav";
import HeaderNav from "../../HeaderNav";
import { UserContext } from '../../../utils/userContext.js';
import { getCandidates } from '../../../utils/apiUtils'
import { positions } from './BallotPositionsList'
import CandidatesContainer from "../../Styled/CandidatesContainer";
import CandidateOption from "../../CandidateOption/CandidateOption";

const BallotPage = (props) => {

	const [candidates, setCandidates] = useState([])
	const [selectedPosition, setSelectedPostion] = useState(0)

	useEffect(()=>{
		const initialize = async () => {
			setCandidates(await getCandidates())
		}
		initialize();
	},[])


	console.log("postiions: ", positions)
	console.log(positions[selectedPosition])

	const filteredCandidates = candidates.filter(el => el.position == positions[selectedPosition].name).map((el,i) => 
			<CandidateOption
                key={i}
                image={el.image_url}
                name={el.name}
                party={el.party_affiliation}
            />
		);

		console.log(filteredCandidates)
	

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
				<CandidatesContainer>
					{filteredCandidates}
				</CandidatesContainer>
            </main>
            Ballot Page https://www.npmjs.com/package/tiny-slider-react
        </div>
    );
};

export default BallotPage;
