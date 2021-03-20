import React, { useState } from "react";
// STYLED
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//routing
import { Link } from "react-router-dom";
//
// NAV COMPONENTS
import Categories from "./Categories";
import Cart from "./NavbarCart";
import NavbarLinks from "./NavbarLinks";
import MobileNavbar from "./MobileNavbar";
const MainNavbar = () => {
  return (
    <StyledMainNavbar>
      <Wrapper>
        <Categories />
        <NavbarLinks />
        <MobileNavbar />
        <Cart />
      </Wrapper>
    </StyledMainNavbar>
  );
};
const Wrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0rem 8rem;
  justify-content: flex-start;
  .active {
    color: #ff324d;
  }

  @media (max-width: 1024px) {
    padding: 0;
  }
`;

const StyledMainNavbar = styled(motion.div)`
  height: 10vh;
  width: 100%;
  background: #212529;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
`;

export default MainNavbar;
