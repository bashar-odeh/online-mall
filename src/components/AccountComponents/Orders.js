import React from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
import Line from "../Line";
const Orders = () => {
  return (
    <StyledMotion>
      <Title>
        <h2>الطلبات</h2>
      </Title>
      <Line />
      <Contnent>
        <TableWrapper>ssadasd</TableWrapper>
      </Contnent>
    </StyledMotion>
  );
};
const StyledMotion = styled(motion.div)``;

const Title = styled.div`
  h2 {
    font-size: 1.7rem;
  }
`;
const Contnent = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  margin: 1rem 0;

  table {
    th,
    td {
      border-bottom: 1px solid #efefef;

      padding: 1rem 2rem;
    }
  }
`;
const TableWrapper = styled.div`
  width: 600px;
  height: 50px;
  background-color: red;
`;
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
export default Orders;
