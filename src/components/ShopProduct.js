import React, { useState } from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//IMAGES
const Product = ({ img, title, price, price_befroe, off, rate, direction }) => {
  return (
    <StyledPrdouct direction={direction}>
      {" "}
      <img src={img} alt="" />
      <ProductDetails>
        <PrdouctTitle>{title}</PrdouctTitle>
        <Price>
          <span style={{ color: "red" }}>{price}</span>{" "}
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            {price_befroe}
          </span>{" "}
          <span style={{ color: "green" }}>{off}</span>{" "}
        </Price>
        <Rating>{rate}</Rating>
      </ProductDetails>
    </StyledPrdouct>
  );
};
export const StyledPrdouct = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: ${(props) => props.direction};
  box-shadow: 0 0 7px rgb(0 0 0 / 50%);

  img {
    height: 100%;
    width: 100%;
    display: block;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;

const ProductDetails = styled(motion.div)`
  height: auto;
  width: 100%;
  padding: 1rem;
`;
const PrdouctTitle = styled(motion.div)`
  height: auto;
  width: 100%;
`;
const Price = styled(motion.div)`
  height: auto;
  width: 100%;
`;
const Rating = styled(motion.div)`
  height: auto;
  width: 100%;
`;
export default Product;
