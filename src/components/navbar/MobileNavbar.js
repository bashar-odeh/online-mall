import React, { useState } from "react";
// STYLED
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//routing
import { Link } from "react-router-dom";
//
import menu from "../../images/menu.png";
import arrow from "../../images/arrow.png";

const MobileNavbar = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);

  return (
    <StyledMobileNavBar onClick={() => setToggleMobileNav(!toggleMobileNav)}>
      <img src={menu} alt="" />
      <FloatingCat toggleMobileNav={toggleMobileNav}>
        <CategoryElement>
          <div>
            <li>الرئيسية</li>
          </div>
          <Arrow src={arrow} alt="" />
        </CategoryElement>
        <CategoryElement>
          <div>
            <li>تسجيل الدخول</li>
          </div>
          <Arrow src={arrow} alt="" />
        </CategoryElement>
        <CategoryElement>
          <div>
            <li>حسابي</li>
          </div>{" "}
          <Arrow src={arrow} alt="" />
        </CategoryElement>
        <CategoryElement>
          <div>
            <li>العلامات التجارية</li>
          </div>{" "}
          <Arrow src={arrow} alt="" />
        </CategoryElement>
        <CategoryElement>
          <div>
            {" "}
            <li>تواصل معنا</li>
          </div>{" "}
          <Arrow src={arrow} alt="" />
        </CategoryElement>{" "}
        <CategoryElement>
          <div>
            <li> عن الموقع</li>
          </div>{" "}
          <Arrow src={arrow} alt="" />
        </CategoryElement>
      </FloatingCat>
    </StyledMobileNavBar>
  );
};
const StyledMobileNavBar = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  @media (max-width: 900px) {
    display: flex !important;
  }
  img {
    height: 25px;
    width: 25px;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
const FloatingCat = styled(motion.ul)`
  display: flex;
  position: absolute;

  background: white;
  opacity: ${(props) => (props.toggleMobileNav ? 1 : 0)};
  pointer-events: ${(props) => (props.toggleMobileNav ? "all" : "none")};
  transition: all 0.5s ease;
  width: 100%;
  flex-direction: column;

  top: 100%;
  box-shadow: 0 0 5px black;
  right: 0;
  div li {
    color: black;
  }
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
  }
`;
const CategoryElement = styled(motion.div)`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  &:hover {
    background-color: #ff324d;
  }
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    li {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    img {
      width: 25px;
      height: 25px;
    }
  }
`;
const Arrow = styled(motion.img)``;
export default MobileNavbar;
