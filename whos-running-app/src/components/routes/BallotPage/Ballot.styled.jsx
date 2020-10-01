import styled from 'styled-components';

export default styled.div`
	.BallotContainer {
		position: relative;
		padding: 2rem 2rem 2rem 2rem;
	}
	.ballotTitle {
		left: 20px;
		top: 128px;
		font-family: Merriweather;
		font-style: normal;
		font-weight: bold;
		font-size: 50px;
		color: #29395f;
	}
	.ballotSub {
		font-family: Noto Sans;
		font-style: normal;
		font-weight: normal;
		font-size: 2em;
		line-height: 16px;
		color: #7a85a0;
	}
	.positionName {
		font-family: Merriweather;
		font-style: normal;
		font-weight: bold;
		font-size: 2em;
		line-height: 23px;
		color: #ff7676;
	}
	.ballotDescription {
		font-family: Noto Sans;
		font-style: normal;
		font-size: 12px;
		line-height: 150%;
		color: #29395f;
	}
	@media (max-width: 700px) {
		.ballotTitle {
			padding: 15x;
			font-size: 200%;
		}
		.ballotSub {
			font-size: 12px;
			line-height: 16px;
			color: #7a85a0;
		}
		.positionName {
			font-size: 18px;
			line-height: 23px;
		}
		.ballotDescription {
			font-size: 12px;
			line-height: 150%;
			color: #29395f;
		}
	}
`;
