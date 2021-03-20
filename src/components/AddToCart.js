import React from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
const AddToCart = ({ cartQuantity, setCartQuantity }) => {
  return (
    <StyledAddToCart>
      <Amount>
        <span
          onClick={() => {
            setCartQuantity((prev) => (prev += 1));
          }}
        >
          +
        </span>
        <input min="0" type="number" value={cartQuantity} />
        <span
          onClick={() => {
            setCartQuantity((prev) => (prev -= 1));
          }}
        >
          -
        </span>
      </Amount>
    </StyledAddToCart>
  );
};
const StyledAddToCart = styled(motion.div)`
  display: flex;
  padding: 2rem 0;
  border-bottom: 1px solid #ddd;
`;

const Amount = styled(motion.div)`
  width: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  input {
    width: 30%;

    padding: 0.5rem;
    appearance: none;
    -moz-appearance: textfield;
    border: 2px solid #ddd;
    text-align: center;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  span {
    display: flex;
    width: 25px;
    height: 25px;
    justify-content: center;
    align-items: center;
    background-color: #ddd;
    margin: 0 1rem;
    border-radius: 100%;
    cursor: pointer;
    pointer-events: all;
  }
`;
export default AddToCart;
