import React from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//COMPONENTS
import Store from "./Store";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Line from "../components/Line";

const Stores = () => {
  return (
    <Wrapper>
      <h2>المحلات التجارية</h2>
      <Line></Line>
      <StyledStores>
        {" "}
        <Store />
        <Store />
        <Store />
      </StyledStores>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  padding: 0 4rem;

  h2 {
    width: 100%;
    font-size: 2.5rem;
    padding: 1rem 0;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
const StyledStores = styled(motion.div)`
  height: 100%;
  width: 100%;
  padding: 2rem;
  @media (max-width: 400px) {
    padding: 0rem;
  }
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 2fr));
  place-items: center;
  align-items: center; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0rem;
  }
`;
const StyledSlider = styled(Slider)`
  width: 100%;
  height: auto;
  padding: 10rem;
`;

export default Stores;
