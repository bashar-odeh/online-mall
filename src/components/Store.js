import React from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//COMPONENTS
import Header from "./Header";
//images
import store1 from "../images/store1.jpg";
import { Link } from "react-router-dom";
let cat = ["اطفال", "احذية", "ملابس"];
const Store = () => {
  return (
    <StyledStore>
      <img src={store1} alt="" />
      <Title>
        <h3>اسم المحل</h3>
      </Title>{" "}
      <Categories>
        <span style={{ fontWeight: "bolder" }}>الفئات :</span>
        {cat.map((c) => (
          <span>{c},</span>
        ))}
      </Categories>
      <Buttons>
        <Link to="/shop/1">
          <button>تسوق الان</button>
        </Link>
      </Buttons>
    </StyledStore>
  );
};
const StyledStore = styled(motion.div)`
  height: 100%;
  width: auto;
  flex: 1 1 30%;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 7px rgb(0 0 0 / 10%);
  overflow: hidden;
  img {
    height: 40vh;
    width: auto;
    display: block;
  }
`;
const Title = styled(motion.div)`
  height: auto;
  width: 100%;
  h3 {
    color: #333;
    font-size: 2rem;
    padding: 1rem 1rem 0rem 0rem;
  }
`;
const Categories = styled(motion.div)`
  width: 100%;
  height: 40%;
  padding-right: 1rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  span {
    color: #333;
    width: auto;
    padding: 0.2rem 0.1rem;
  }
`;
const Buttons = styled(motion.div)`
  width: 100%;
  padding-top: 1rem;
  button {
    width: 100%;
    padding: 1rem 2rem;
    background-color: #ff324d;
    border: none;
    font-size: 1.3rem;
    font-weight: bolder;
    text-align: center;
    color: white;
    cursor: pointer;
    transition: 0.5s all ease;
    z-index: 2;
    outline: 0;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
export default Store;
