import React, { useState, useRef, useEffect } from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
import CartOrder from "./CartOrder";
import Line from "../Line";
const CartOrders = ({ total, setTotal }) => {
  const arr = [1, 2, 3];
  return (
    <StyledMotion>
      <Title>
        <h2>السلة</h2>
      </Title>
      <Line />
      <Contnent>
        <TableWrapper>
          <table>
            <thead></thead>
            <tr>
              <th>المنتج</th>
              <th>المنتج</th>
              <th>السعر</th>
              <th>الكمية</th>
              <th>المجموع</th>
              <th>حذف</th>
            </tr>
            <tbody>
              {arr.map(() => (
                <CartOrder total={total} setTotal={setTotal} />
              ))}
            </tbody>
          </table>
        </TableWrapper>
      </Contnent>
    </StyledMotion>
  );
};
const StyledMotion = styled(motion.div)`
  width: 80%;
`;

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
  box-shadow: 0 0 7px rgb(0 0 0 /10%);
  table {
    th,
    td {
      border-bottom: 1px solid #efefef;
      padding: 1rem 2rem;
    }
  }
`;
const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;
`;

export default CartOrders;
