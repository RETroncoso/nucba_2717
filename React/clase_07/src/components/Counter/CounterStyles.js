import styled, { css } from "styled-components";

export const CounterContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	height: calc(100vh - 30px);
`;

export const CounterButtonContainerStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	& p {
		display: flex;
		align-items: center;
		margin: 0;
		margin-bottom: 3px;
		font-size: 20px;
		color: white;
	}
`;

export const CounterSpanStyled = styled.span`
	padding: 10px;
	min-width: 100px;
	width: auto;
	font-size: 30px;
	text-align: center;
	color: white;
`;

export const CounterButtonStyled = styled.button`
	padding: 10px 30px;
	background: linear-gradient(
		134.59deg,
		rgba(255, 255, 255, 0.05) 7.23%,
		rgba(255, 255, 255, 0.25) 100%
	);
	border: 3px solid white;

	${(props) =>
		props.left &&
		css`
			border-top-left-radius: 9px;
			border-bottom-left-radius: 9px;
		`}

	${(props) =>
		props.right &&
		css`
			border-top-right-radius: 9px;
			border-bottom-right-radius: 9px;
		`}

    cursor: pointer;
`;
