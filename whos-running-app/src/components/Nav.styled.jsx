import styled from 'styled-components';

export default styled.div`
	.headerNav {
		background-color: #1fbcde;
		padding: 1rem 1rem 0rem 0rem;
		height: 150px;
	}
	.whosIcon {
		text-align: left;
		position: relative;
		bottom: 70px;
		left: 2.5rem;
	}
	.header {
		font-family: Noto Sans;
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		text-align: right;
		line-height: 22px;
		color: white;
	}
	.signIn {
		font-size: 12px;
	}
	@media (max-width: 700px) {
		.headerNav {
			height: 110px;
		}
		.header {
			position: relative;
		}
		.whosIcon {
			text-align: left;
			left: 1rem;
		}
	}
`;
