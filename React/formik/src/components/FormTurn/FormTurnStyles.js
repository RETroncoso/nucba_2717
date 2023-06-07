import styled from "styled-components";
import { Form as FormStyled } from "formik";

export const Form = styled(FormStyled)`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	column-gap: 30px;
	row-gap: 25px;
`;

export const FormBox = styled.div`
	max-width: 580px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-left: 1px solid var(--white);
	border-right: 1px solid var(--white);
	padding: 70px;
	margin: 0 auto;
`;

export const FormTitle = styled.h2`
	align-self: flex-start;
	font-size: 2rem;
	margin: 0;
`;

export const FormSubtitle = styled.p`
	font-size: 1.2rem;
	max-width: 80%;
	align-self: flex-start;
`;
