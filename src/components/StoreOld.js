import React from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//COMPONENTS
import Header from "./Header";
//images
import store1 from "../images/store1.jpg";
let cat = ["اطفال", "احذية", "ملابس"];
const Store = () => {
  return (
    <StyledStore>
      <Image>
        <img src={store1} />
      </Image>{" "}
      <div className="show"></div>
      <div className="onshow">
        {" "}
        <Title>
          <h3>اسم المحل </h3>
        </Title>
        <Categories>
          <span style={{ fontWeight: "bolder" }}>الفئات :</span>
          {cat.map((c) => (
            <span>{c},</span>
          ))}
        </Categories>
        <Button>
          {" "}
          <button>تسوق الان </button>
        </Button>
      </div>
    </StyledStore>
  );
};
const StyledStore = styled(motion.div)`
  height: 60vh;
  min-height: 60vh;
  width: 300px;
  box-shadow: 0px 0px 10px black;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  transition: all 1s ease;
  margin: 1rem;
  position: relative;
  .show {
    height: 100%;
    width: 100%;
    filter: blur(8px);
    -webkit-filter: blur(8px);
    position: absolute;
    top: 50%;
    left: 0;
    background: rgb(0, 0, 0, 0.8);
  }
  .onshow {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;

    color: white;
    backdrop-filter: blur(2px);
  }
`;
const Title = styled(motion.div)`
  height: auto;
  width: 100%;
  h3 {
    color: white;
    font-size: 2rem;
    padding: 1rem 1rem 0rem 0rem;
  }
`;
const Image = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: relative;
  /* clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%); */
  img {
    height: 100%;
    width: 100%;
    display: block;
  }
  width: 100%;
`;
const Categories = styled(motion.div)`
  width: 100%;
  height: 40%;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  span {
    color: white;
    width: auto;
    padding: 0.2rem 0.1rem;
  }
`;
const Button = styled(motion.div)`
  width: 100%;
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
    z-index: 2;
    outline: 0;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
export default Store;
