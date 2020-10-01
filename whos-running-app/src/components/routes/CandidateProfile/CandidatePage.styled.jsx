import styled from "styled-components";

export default styled.div`
	.twitter {
		position: absolute;
		width: 32px;
		height: 32px;
		left: 277px;
		top: 576px;
	}
	.facebook {
		position: absolute;
		width: 24px;
		height: 24px;
		left: 320px;
		top: 580px;
	}
	.links {
		position: absolute;
		width: 28px;
		height: 28px;
		left: 354px;
		top: 577px;
	}
	.socialLinks {
		float: right;
	}
	// .picAndQuote{
	//     display: flex;
	//     justify-content: space-around;
	//     padding-left: 20px;
	// 	padding-top: 100px;
	// }
	.bigPic {
		border-radius: 100%;
		border: 4px solid black;
		height: 125px;
		width: 125px;
		background-size: cover; //contain
		background-repeat: no-repeat;
		background-position: start center;
		position: absolute;
		width: 150px;
		height: 150px;
		left: 15px;
	}
	.bioOfCandi {
		position: absolute;
		width: 196px;
		height: 133px;
		left: 198px;
		top: 131px;
		font-family: Noto Sans;
		font-style: italic;
		font-weight: normal;
		font-size: 14px;
		line-height: 19px;
		color: #727e9a;
	}
	.candiName {
		width: 172px;
		height: 20px;
		left: 20px;
		top: 323px;
		font-family: Merriweather;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 23px;

		color: #ff7676;
	}
	.candiPosition {
		position: relative;
		font-family: Merriweather;
		font-style: normal;
		font-weight: bold;
		font-size: 14px;
		line-height: 18px;
		color: #29395f;
	}
	.candiBio {
		position: relative;
		// width: 374px;
		// height: 162px;
		left: 20px;

		font-family: Noto Sans;
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 150%;
		color: #29395f;
	}
	.secondCandi {
		border-radius: 100%;
		border: 4px solid black;
		height: 125px;
		width: 125px;
		background-size: cover; //contain
		background-repeat: no-repeat;
		background-position: start center;
		position: absolute;
		width: 98.67px;
		height: 148px;
		left: 61px;
		top: 692px;
	}
	.secondName {
		position: absolute;
		width: 177px;
		height: 39px;
		left: 21px;
		top: 820px;
		font-family: Noto Sans;
		font-style: normal;
		font-weight: bold;
		font-size: 14px;
		line-height: 150%;
		text-align: center;
		color: #1fbcde;
	}
	.line {
		position: absolute;
		width: 359px;
		height: 0px;
		left: 28px;
		top: 623px;
		border: 1px solid #e8eced;
	}
	.whatPos {
		position: absolute;
		width: 376px;
		height: 54px;
		left: 20px;
		top: 642px;
		font-family: Merriweather;
		font-style: normal;
		font-weight: bold;
		font-size: 14px;
		line-height: 18px;

		color: #29395f;
	}

	.favorite {
		position: absolute;
		left: 90.82%;
		right: 4.83%;
		top: 36.05%;
		bottom: 60.83%;
		svg {
			color: #1fbcde;
		}
	}
	@media (max-width: 700px) {
		.bigPic {
			position: relative;
			top: 5px;
			right: 5px;
		}
		.allCand {
			position: relative;
			font-size: 15%;
		}
		.candiName {
		}
		.bookmark {
			position: relative;
			top: 400%;
			right: 80%;
		}
		.bioOfCandi {
			position: absolute;
			width: 45%;
			height: 133px;
			left: 198px;
			top: 131px;
			font-family: Noto Sans;
			font-style: italic;
			font-weight: normal;
			font-size: 14px;
			line-height: 19px;
			color: #727e9a;
		}
		.candiBio {
			position: relative;
			width: 90%;
			// height: 162px;
			left: 20px;

			font-family: Noto Sans;
			font-style: normal;
			font-weight: 500;
			font-size: 12px;
			line-height: 150%;
			color: #29395f;
		}
		.whatPos {
			position: absolute;
			width: 90%;
			top: 100%;
			font-family: Merriweather;
			font-style: normal;
			font-weight: bold;
			font-size: 14px;
			line-height: 18px;

			color: #29395f;
		}
		.container {
			padding: 1em 1em 1em 1em;
		}
		.secondName {
			position: relative;
			// width: 177px;
			// height: 39px;
			// left: 21px;
			// top: 820px;
			font-family: Noto Sans;
			font-style: normal;
			font-weight: bold;
			font-size: 14px;
			line-height: 150%;
			text-align: center;
			color: #1fbcde;
		}
		.secondCandi {
			border-radius: 100%;
			border: 4px solid black;
			height: 100%;
			width: 100%;
			background-size: cover; //contain
			background-repeat: no-repeat;
			background-position: start center;
			position: relative;
			width: 98.67px;
			height: 148px;
			left: 61px;
			top: 692px;
		}

	}
`;
