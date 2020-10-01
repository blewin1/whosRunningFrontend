import React from 'react'
import RoundImage from '../Styled/RoundImage.styled'
import CandidateOptionStyled from './CandidateOption.styled'

const CandidateOption = ({ name, party, image, id, history }) => {

    const selectCandidtate = (e) => {
        if (!id || !history ) return
	
        history.push(`/candidate/${id}`)
    }

    return (
        <CandidateOptionStyled onClick={selectCandidtate}>
            <RoundImage image={image} />
            <h4>{name}</h4>
            <span>{party}</span>
        </CandidateOptionStyled>
    )
}

export default CandidateOption
