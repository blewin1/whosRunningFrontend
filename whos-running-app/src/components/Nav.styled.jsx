import styled from 'styled-components';

export default styled.div`
	.whosIcon {
		text-align: left;
		position: relative;
		bottom: 60px;
		left: 2.5rem;
	}
	.header {
		background-color: #1fbcde;
		position: relative;
		width: 95vw;
		height: 85px;
		font-family: Noto Sans;
		font-size: 18px;
		font-style: normal;
		font-weight: 700;

		padding: 1rem 1rem 2rem 1rem;
		color: white;
	}
	.signIn {
		text-align: right;
		line-height: 16px;
	}
	@media (max-width: 700px) {
		.header {
			position: relative;
			width: 91%;
		}
		.whosIcon {
			text-align: left;
			bottom: 60px;
			left: 1rem;
			width: 25%;
			height: 70%;
		}
	}
`;
