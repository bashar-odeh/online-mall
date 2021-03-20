import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddToCart from "../AddToCart";
import thumb from "../../images/thumbnail.jpg";
const CartOrder = ({ total, setTotal }) => {
  const [cartQuantity, setCartQuantity] = useState(1);
  const [orderTotal, setOrderTotal] = useState(0);
  useEffect(() => {
    setOrderTotal(() => cartQuantity * 45);
    setTotal((prev) => prev + orderTotal);
  }, [cartQuantity, orderTotal]);

  return (
    <tr>
      <td>
        <img src={thumb} alt="" />
      </td>
      <td>Blue Dress For Woman</td>
      <td>45$</td>
      <td>
        <AddToCart
          cartQuantity={cartQuantity}
          setCartQuantity={setCartQuantity}
        />
      </td>
      <td>{orderTotal}</td>
      <td>
        <Button>X</Button>
      </td>
    </tr>
  );
};
const Button = styled.button`
  width: 100%;
  padding: 0.5rem 1.5rem;
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
`;

export default CartOrder;
