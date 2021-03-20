import React from "react";
// STYLED
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
import phone from "../../images/phone.png";
import logo from "../../images/logo.png";
const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo>
        <img src={logo} alt="" />
      </Logo>
      <Search>
        <input type="text" placeholder="اختيار الفئة" />
        <select name="" id="">
          <option value="">اختيار فئة </option>
        </select>
      </Search>
      <Phone>
        <span>+972597043431</span>
        <img src={phone} alt="" />
      </Phone>
    </StyledNavbar>
  );
};
const StyledNavbar = styled(motion.div)`
  display: flex;
  height: 10vh;
  padding: 4rem 8rem;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    height: 30vh;
  }
`;
const Phone = styled(motion.div)`
  display: flex;

  justify-content: flex-start;
  align-items: center;

  img {
    height: 50px;
    width: 50px;
  }
`;
const Search = styled(motion.div)`
  display: flex;
  width: 60%;

  input {
    height: 100%;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ff324d;
  }
  select {
    width: 20%;
    padding: 0.5rem;
    border: 1px solid #ff324d;
    border-right: none;
  }
`;
const Logo = styled(motion.div)``;
export default Navbar;
