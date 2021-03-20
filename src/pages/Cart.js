import React, { useState } from "react";
// STYLED
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//routing
import { Link } from "react-router-dom";
import CartOrders from "../components/CartComponents/CartOrders";
const Cart = () => {
  const [total, setTotal] = useState(0);
  return (
    <div>
      <StyledCart>
        <CartOrders total={total} setTotal={setTotal}></CartOrders>
        <Cupon>
          <input type="text" placeholder="ضع الكوبون الخاص بك" />
          <Button>تحقق من الكوبون</Button>
        </Cupon>
        <Shipping>
          <CalculateShipping>
            <div>
              {" "}
              <input type="text" placeholder="choose an option" />
              <input type="text" placeholder="state/country" />
              <input type="text" placeholder="PostCode/ZIP" />
            </div>
            <Button>Update</Button>
          </CalculateShipping>
          <CartTotals>
            <Title>الحسابات</Title>
            <Row>
              <span>مجموع السلة</span>
              <span>{total}</span>
            </Row>
            <Row>
              <span>التوصيل</span>
              <span>مجاني</span>
            </Row>
            <Row>
              <span> المجموع النهائي</span>
              <span>{total}</span>
            </Row>
            <Button>اكمل الشراء</Button>
          </CartTotals>
        </Shipping>
      </StyledCart>
    </div>
  );
};

const StyledCart = styled(motion.div)`
  height: 100%;
  min-height: 100vh;
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 4rem;
  @media (max-width: 900px) {
    padding: 0;
  }
`;
const Cupon = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  input,
  button {
    padding: 0.5rem;
    border: 1px solid #ddd;
    &:focus {
      outline: none;
    }
  }
`;
const Shipping = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 2rem 0;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const CalculateShipping = styled.div`
  flex: 1 1 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  div {
    display: flex;
    flex-wrap: wrap;
    margin: 0 1rem;
    input {
      flex: 1 1 40%;
      padding: 0.5rem;
      margin: 0.5rem;
      font-size: 1.2rem;
    }
  }
`;
const CartTotals = styled.div`
  display: flex;
  flex: 1 1 50%;
  flex-direction: column;
  margin: 0 1rem;
  border: 1px solid #ddd;
  padding: 0 1rem;
  div {
    border-bottom: 2px solid #ddd;
    padding: 1rem 3rem;
  }
`;
const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  display: flex;
`;
const Button = styled.button`
  width: 20%;
  min-width: 30%;
  padding: 1rem;
  margin: 1rem 1.5rem;
  background-color: #ff324d;
  border: none;
  font-size: 1rem;
  font-weight: bolder;
  text-align: center;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #a82234;
  }
`;
export default Cart;
