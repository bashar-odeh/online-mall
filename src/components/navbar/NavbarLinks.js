import React, { useState } from "react";
// STYLED
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//routing
import { Link } from "react-router-dom";
//
const NavbarLinks = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div>
      <StyledNavbarLinks>
        <StyledLink
          className={currentPage === 0 ? "active" : ""}
          onClick={() => setCurrentPage(0)}
          to="/"
        >
          الرئيسية
        </StyledLink>
        <StyledLink to="/login">تسجيل الدخول</StyledLink>
        <StyledLink
          className={currentPage === 1 ? "active" : ""}
          onClick={() => setCurrentPage(1)}
          to="/account"
        >
          حسابي
        </StyledLink>
        <li>العلامات التجارية</li>
        <li>تواصل معنا</li>
        <li>عن الموقع</li>
      </StyledNavbarLinks>
    </div>
  );
};
const StyledNavbarLinks = styled(motion.div)`
  width: 100%;
  display: flex;

  justify-content: flex-start;
  color: white;
  @media (max-width: 900px) {
    display: none;
  }
  li {
    list-style-type: none;
    padding: 1rem;
    margin: 0.5rem;
    cursor: pointer;
    &:hover {
      color: #ff324d;
    }
  }
`;
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  list-style-type: none;
  padding: 1rem;
  margin: 0.5rem;
  cursor: pointer;
  &:hover {
    color: #ff324d;
  }
`;
export default NavbarLinks;
