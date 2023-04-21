import React from 'react'
import { HomeContainerStyled, LinkContainerStyled, LinksContainerStyled, MenuContainerStyled, NavbarContainerStyled, SpanStyled, UserContainerStyled, UserNavContainer, UserNavStyled } from './NavbarStyles'
import {motion} from "framer-motion"
import {HiHome} from "react-icons/hi"
import {FaUserAlt} from "react-icons/fa"
import {AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {
  return (
    <NavbarContainerStyled>
        <div>
            <a href="#">
                <img src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797659/coding/NucbaZappi/Assets/nucba-zappi-icon_oe3ark_xmvab5.png" alt="Logo" />
            </a>
        </div>
        <LinksContainerStyled>
            <HomeContainerStyled>
                <motion.div whileTap={{scale: 0.9}} >
                <a href="#">
                    <LinkContainerStyled home >
                        <HiHome/>
                    </LinkContainerStyled>
                    Home
                </a>
                </motion.div>
            </HomeContainerStyled>
            <UserNavStyled>
                <UserContainerStyled>
                    <SpanStyled>
                        Inicia Sesion
                    </SpanStyled>
                    <FaUserAlt/>
                </UserContainerStyled>
            </UserNavStyled>
            <motion.div whileTap={{scale:0.95}} >
                <MenuContainerStyled>
                    <AiOutlineMenu/>
                </MenuContainerStyled>
            </motion.div>
        </LinksContainerStyled>
    </NavbarContainerStyled>
  )
}

export default Navbar