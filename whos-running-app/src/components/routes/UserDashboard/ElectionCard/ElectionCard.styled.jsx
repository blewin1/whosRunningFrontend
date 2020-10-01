import styled from "styled-components";

export default styled.div`
    height: 100px;
    width: 90vw;
    background: #f5f9fa;
    border-left: 15px solid #1fbcde;

    .election {
        font-family: Noto Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        /* identical to box height */

        color: #29395f;

        grid-area: election;
    }

    .arrow {
        grid-area: arrow;
        svg {
            width: 20px;
            color: #1FBCDE;
        }
    }

    .highlight {
        color: #1FBCDE;
        font-weight: bold;
    }

    .date {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 4px;

        grid-area: date;

        font-family: Noto Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 15px;
        text-align: center;

        color: #ff7676;

        .date-number {
            line-height: 35px;
        }
        .date-text {
            font-size: 15px;
        }

        
    }
    .time-left {
        grid-area: time-left;
        margin-top: 10px;
    }
    display: grid;
    grid-template-rows: 22px 1fr 15px;
    grid-template-rows: 33px 34px 33px;
    grid-template-areas:
        " . election . "
        " date time-left arrow "
        " . . . ";
`;
