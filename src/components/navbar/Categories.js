import React, { useState } from "react";
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//routing
import { Link } from "react-router-dom";
import menu from "../../images/menu.png";

//IMAGES
import home from "../../images/home.png";
import mobile from "../../images/mobile.png";
import clothes from "../../images/clothes.png";
import shoe from "../../images/shoe.png";
import car from "../../images/car.png";
import arrow from "../../images/arrow.png";
const Categories = () => {
  const [toggleCategory, setToggleCategory] = useState(false);

  return (
    <StyledCategories
      category={toggleCategory}
      onClick={() => setToggleCategory(!toggleCategory)}
    >
      <CategoryHeader>
        <img src={menu} alt="" />
        <span>جميع الفئات</span>
      </CategoryHeader>
      <FloatingCat category={toggleCategory}>
        <CategoryElement>
          <div>
            <img src={clothes} alt="" />
            <li>ملابس</li>
          </div>
          <Arrow src={arrow} alt="" />
        </CategoryElement>
        <CategoryElement>
          <div>
            <img src={car} alt="" />
            <li>قطع سيارات</li>
          </div>{" "}
          <Arrow src={arrow} alt="" />
        </CategoryElement>
        <CategoryElement>
          <div>
            <img src={home} alt="" />
            <li>ادوات منزلية</li>
          </div>{" "}
          <Arrow src={arrow} alt="" />
        </CategoryElement>
        <CategoryElement>
          <div>
            <img src={mobile} alt="" /> <li>موبايلات</li>
          </div>{" "}
          <Arrow src={arrow} alt="" />
        </CategoryElement>
        <CategoryElement>
          <div>
            {" "}
            <img src={shoe} alt="" />
            <li>احذية</li>
          </div>{" "}
          <Arrow src={arrow} alt="" />
        </CategoryElement>{" "}
        <ShowAll>
          <i class="fas fa-plus-square"></i>
          <span>عرض الكل</span>
        </ShowAll>
      </FloatingCat>
    </StyledCategories>
  );
};
const StyledCategories = styled(motion.div)`
  height: 100%;
  flex-basis: 250px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
  background-color: ${(props) => (props.category ? "#ff324d" : "none")};
  padding: 0rem 4rem;
  color: white;
  position: relative;
  z-index: 2;
  &:hover {
    background-color: #ff324d;
  }
  img {
    margin-left: 0.8rem;
    height: 25px;
    width: 25px;
  }
`;
const FloatingCat = styled(motion.ul)`
  display: flex;
  position: absolute;

  background: white;
  opacity: ${(props) => (props.category ? 1 : 0)};
  pointer-events: ${(props) => (props.category ? "all" : "none")};
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
  padding: 0;
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
const Arrow = styled(motion.img)`
  margin-right: 2rem;
  transform: translateX(-1rem);
`;
const CategoryHeader = styled(motion.div)`
  height: 100%;
  position: absolute;
  top: 0;
  right: 10%;
  display: flex;

  justify-content: flex-start;
  z-index: 10;
  align-items: center;
  pointer-events: all;
  cursor: pointer;
  img {
    pointer-events: none;
  }
`;
const ShowAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: #ff324d;
  color: White;
  font-size: 1.2rem;
  i {
    margin: 0 1rem;
  }
  cursor: pointer;
  &:hover {
    background-color: #e01a35;
  }
`;
export default Categories;
