import styled from 'styled-components';

export default styled.div`
	display: flex;
	flex-direction: column;
	.userDash {
		padding: 0px 20px 20px 20px;
	}
	h2 {
		font-family: Merriweather;
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 30px;

		color: #29395f;
	}

	h3 {
		font-family: Merriweather;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 23px;
		color: #ff7676;
	}

	.prev-page {
		text-decoration: none;
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		line-height: 14px;
		/* identical to box height */

		color: #1fbcde;
	}

	.back-arrow {
		color: #1fbcde;
	}

	a {
		text-decoration: none;
	}

	.white {
		color: white;
	}

	.polling-link {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;

		height: 48px;
	}
`;
