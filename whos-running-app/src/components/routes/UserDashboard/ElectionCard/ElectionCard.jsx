import React from "react";
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline/ArrowIosForwardOutline";
import { Link } from "react-router-dom";
import ElectionCardStyled from "./ElectionCard.styled";


const ElectionCard = () => {
    return (
        <ElectionCardStyled>
            <h2 className='election'>New Hampshire 2020 Ballot</h2>
            <Link to="/ballot" className="arrow">
                <ArrowIosForwardOutline className="icon" />
            </Link>
            <div className="date">
                <span className="date-number">3</span>
                <span className="date-text">NOV</span>
                <span className="date-text">2020</span>
            </div>
            <span className='time-left'><span className="highlight">32 days</span> until the election</span>
        </ElectionCardStyled>
    );
};

export default ElectionCard;
