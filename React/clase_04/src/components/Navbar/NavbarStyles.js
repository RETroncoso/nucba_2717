import styled from "styled-components";

export const NavbarContainerStyled = styled.header`
	height: 100px;
	background-color: #18191a;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 4rem;
`;

export const LinksContainerStyled = styled.div`
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 40px;
	a {
		padding: 1rem 1.5rem;
	}
	a:first-child {
		background: var(--orange-bg);
		border-radius: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5px;
	}
`;

export const LinkContainerStyled = styled.div`
	font-size: 1.2rem;
	align-items: center;
	color: ${(props) => (props.home ? "#ff9d01" : "#ff9300")};
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
	display: flex;
`;

export const HomeContainerStyled = styled(LinkContainerStyled)`
	display: flex;
	@media (max-width: 768px) {
		display: none;
	}
`;

export const MenuContainerStyled = styled(LinkContainerStyled)`
	display: none;
	cursor: pointer;
	font-size: 2rem;
	@media (max-width: 768px) {
		display: flex;
	}
`;

export const UserNavStyled = styled.div`
	gap: 15px;
	cursor: pointer;
	span {
		color: white;
		font-size: 1rem;
		margin-right: 20px;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

export const SpanStyled = styled.span`
	&:hover {
		text-decoration: underline;
	}
`;
