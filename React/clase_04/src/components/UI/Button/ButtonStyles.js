import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledButton = styled(motion.button)`
	padding: 0.8rem 1.5rem;
	outline: none;
	border: none;
	border-radius: ${({ radius }) => `${radius}px`};
	background: var(--btn-gradient);
	color: white;
	text-transform: uppercase;
	font-weight: 400;
	cursor: pointer;
	&:hover {
		opacity: 95%;
	}
	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;
