import React, { useState } from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//IMAGES
const Product = ({ img, title, price, price_before, off, rate, direction }) => {
  return (
    <StyledPrdouct direction={direction}>
      {" "}
      <img src={img} alt="" />
      <ProductDetails>
        <PrdouctTitle>{title}</PrdouctTitle>
        <Price>
          <span style={{ color: "red" }}>{price}</span>{" "}
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            {price_before}
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
export default Product;
