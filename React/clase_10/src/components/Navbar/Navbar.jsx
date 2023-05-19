import React, { useContext } from 'react';
import styled from 'styled-components';
import { logoURL } from '../../data/productsData';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';


const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & img {
    width: 30px;
  }
`;

const LinkContainer = styled.ul`
  display: flex;
  gap: 20px;
`;

const NavLinkStyled = styled(NavLink)`
  color: white;
  &.active {
    color: #4747ff;
    font-weight: 600;
  }
`

const Navbar = () => {

  const {isAuth, user} = useContext(AuthContext);
  const navigate = useNavigate();
  
  return (
    <NavbarContainer>
      <Logo
        onClick={() => navigate("/")}
      >
        <img src={logoURL} alt=''/>
      </Logo>

      <LinkContainer>
        <NavLinkStyled to="/" >Home</NavLinkStyled>
        <NavLinkStyled to="/products" >Products</NavLinkStyled>
        {/* <NavLinkStyled to="/login" >Login</NavLinkStyled> */}
        <NavLinkStyled to={isAuth ? `/usuario/${user}` : 'login'} >
          {isAuth ? "Perfil" : "Login"}
        </NavLinkStyled>
      </LinkContainer>
    </NavbarContainer>
  );
};

export default Navbar;
