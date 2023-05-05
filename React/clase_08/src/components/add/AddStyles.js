import styled, { css } from "styled-components";

export const CounterButtonStyled = styled.button`
	padding: 10px 30px;
	background: linear-gradient(
		134.59deg,
		rgba(255, 255, 255, 0.05) 7.23%,
		rgba(255, 255, 255, 0.25) 100%
	);
	border: 3px solid white;

	${(props) =>
		props.last &&
		css`
			border-top-right-radius: 9px;
			border-bottom-right-radius: 9px;
		`}

	cursor: pointer;
`;
