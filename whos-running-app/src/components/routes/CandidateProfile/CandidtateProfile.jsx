import React, { useEffect, useState } from 'react';
import Nav from '../../Nav';
import HeaderNav from '../../HeaderNav';
import { getCandidates } from '../../../utils/apiUtils';
import { positions } from '../BallotPage/BallotPositionsList';
import CandidatesContainer from '../../Styled/CandidatesContainer';
import CandidateOption from '../../CandidateOption/CandidateOption';
import { Route, Link } from 'react-router-dom';
import BallotPage from "../BallotPage/BallotPage"


const CandidatePage = (props) => {
    const [candidates, setCandidates] = useState([]);
	const [selectedPosition, setSelectedPostion] = useState(0);

	useEffect(() => {
		const initialize = async () => {
			setCandidates(await getCandidates());
		};
		initialize();
	}, []);

    let candidateInfo = candidates.map((candi, index) => {
		if (props.match.params.candidateId == candi.id) {
			return (
				<div>
					<img src={candi.image_url} alt='pic' />
					<em>{candi.bio}</em>
					<h1>{candi.name} </h1>
					<h3>{candi.position} </h3>
					<p>{candi.bio}</p>
					<a href={candi.twitter}> Twitter </a>
					<a href={candi.facebook}> Facebook </a>
					<a href={candi.campaign_website}> Campaign website </a>
				</div>
			)
		} 
    });
    let notCandidateInfo = candidates.map((candi, index) => {
		if (props.match.params.candidateId == candi.id) {
			return (
				<div>
					<img src={candi.image_url} alt='pic' />
					<em>{candi.bio}</em>
					<h1>{candi.name} </h1>
					<h3>{candi.position} </h3>
					<p>{candi.bio}</p>
					<a href={candi.twitter}> Twitter </a>
					<a href={candi.facebook}> Facebook </a>
					<a href={candi.campaign_website}> Campaign website </a>
				</div>
			);
		}
    });
    console.log(candidates)
    return (
        <div>
            <HeaderNav />
            <nav> 
            <Link to='/ballot'> All Candidates </Link>
            </nav>
            {candidateInfo}
        </div>
    )
}

export default CandidatePage
