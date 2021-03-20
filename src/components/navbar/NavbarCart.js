import React, { useState } from "react";
// STYLED
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//routing
import { Link } from "react-router-dom";
//
import shopping_cart from "../../images/shopping_cart.png";
import thumbnail from "../../images/thumbnail.jpg";

const NavbarCart = () => {
  const [toggleCart, setToggleCart] = useState(false);

  return (
    <Cart>
      <img
        src={shopping_cart}
        alt=""
        onClick={() => setToggleCart(!toggleCart)}
      />
      <NumverOfItems>
        <span>3</span>
      </NumverOfItems>
      <CartItems toggleCart={toggleCart}>
        <Item>
          <img src={thumbnail} alt="" />
          <CartItemInfo>
            <span>Variable Product 001</span>
            <span>$78.00</span>
          </CartItemInfo>
          <CanelItem>X</CanelItem>
        </Item>{" "}
        <Item>
          <img src={thumbnail} alt="" />
          <CartItemInfo>
            <span>Variable Product 001</span>
            <span>$78.00</span>
          </CartItemInfo>
          <CanelItem>X</CanelItem>
        </Item>{" "}
        <Item>
          <img src={thumbnail} alt="" />
          <CartItemInfo>
            <span>Variable Product 001</span>
            <span>$78.00</span>
          </CartItemInfo>
          <CanelItem>X</CanelItem>
        </Item>{" "}
        <ShowAll to="/cart" onClick={() => setToggleCart(false)}>
          <i class="fas fa-plus-square"></i>
          <span>عرض الكل</span>
        </ShowAll>
      </CartItems>
    </Cart>
  );
};

const Cart = styled(motion.div)`
  position: relative;
  height: 100%;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  margin: 0 1rem;
  pointer-events: all;
  img {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 10%;
    padding-left: 1rem;
  }
`;
const CanelItem = styled(motion.div)`
  padding: 0 0.5rem;
  color: gray;
  cursor: pointer;
`;
const CartItemInfo = styled(motion.div)`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;
const CartItems = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: auto;
  top: 100%;
  left: 100%;
  box-shadow: 0 0 10px black;
  transition: all 0.5s ease;
  transform-origin: top left;
  transform: ${(props) => (props.toggleCart ? "scale(1)" : "scale(0)")};
  pointer-events: ${(props) => (props.toggleCart ? "all" : "")};
  display: flex;
  flex-direction: column;
  background: white;

  @media (max-width: 425px) {
    width: 250px;
  }
`;
const Item = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  border-bottom: 1px solid gray;
  img {
    height: 100px;
    width: 100px;
    display: block;
    padding: 0.5rem;
  }
`;
const NumverOfItems = styled(motion.div)`
  height: 18px;
  width: 18px;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0, 50%);
  font-size: 0.7rem;
  font-weight: bolder;
  background-color: #ff324d;
  color: white;
  font-weight: bolder;
  border-radius: 100%;
  @media (max-width: 768px) {
    left: 30%;
  }
`;
const ShowAll = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: #ff324d;
  color: White;
  font-size: 1.2rem;
  text-decoration: none;
  i {
    margin: 0 1rem;
  }
  cursor: pointer;
  &:hover {
    background-color: #e01a35;
  }
`;
export default NavbarCart;
