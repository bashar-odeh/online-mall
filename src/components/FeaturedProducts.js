import React, { useState } from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//IMAGES
import thumbnail from "../images/thumbnail.jpg";
import Line from "../components/Line";
import arrow from "../images/arrow.png";
import arrow_right from "../images/arrow_right.png";
// components
import Product from "./Product";
const FeaturedProducts = () => {
  const [counter, setCounter] = useState(0);
  let response = [];
  for (let i = 0; i < 26; i++) {
    response.push(
      <Product
        img={thumbnail}
        title="Blue Dress For Woman"
        price="40"
        price_before="80"
        off="off 20%"
        rate="4 stars"
        direction="row"
      />
    );
  }
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr[i] = response.slice(0, 9);
    response = response.slice(9);
  }
  const SlideHandler = (direction) => {
    if (direction === "next") {
      setCounter((p) => (p += 1) % 3);
    } else {
      setCounter((p) => (p -= 1) % 3);
    }
  };
  return (
    <Wrapper>
      <Header>
        <h2>احدث المنتجات </h2>
        <div>
          <img onClick={() => SlideHandler("next")} src={arrow_right} alt="" />
          <img onClick={() => SlideHandler("prev")} src={arrow} alt="" />
        </div>
      </Header>

      <Line></Line>
      <Slider>
        <Panel>
          <Products>{arr[Math.abs(counter)]}</Products>
        </Panel>
      </Slider>
    </Wrapper>
  );
};
const Wrapper = styled(motion.div)`
  height: auto;
  min-height: 100vh;
  width: 100%;
  padding: 0rem 8rem;
  h2 {
    width: 100%;
    font-size: 2.5rem;
    padding: 1rem 0;
  }
  @media (max-width: 768px) {
    padding: 4rem;
  }
  @media (max-width: 400px) {
    padding: 2rem;
  }
`;
const Products = styled(motion.div)`
  height: 100%;
  width: 100%;
  padding-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(150px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  place-items: center;
  justify-content: center;
  align-items: center;
`;
const Prdouct = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  box-shadow: 0 0 7px rgb(0 0 0 / 10%);
  padding: 1.5rem;
  img {
    height: 100px;
    width: 100px;
    display: block;
    margin-left: 1rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;
const ProductDetails = styled(motion.div)``;
const PrdouctTitle = styled(motion.div)``;
const Price = styled(motion.div)``;
const Rating = styled(motion.div)``;
const Header = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    img {
      cursor: pointer;
      height: 25px;
      width: 25px;
    }
  }
`;
const Slider = styled(motion.div)``;
const Panel = styled(motion.div)``;
export default FeaturedProducts;
