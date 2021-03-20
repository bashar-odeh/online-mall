import React, { useState } from "react";
// STYLED
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//routing
import { Link } from "react-router-dom";
//
const Footer = () => {
  return (
    <StyledFooter>
      <span>© 2020 All Rights Reserved by Bestwebcreator</span>
    </StyledFooter>
  );
};
const StyledFooter = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #202325;
  color: white;
  margin-top: 2 rem;
`;
export default Footer;
