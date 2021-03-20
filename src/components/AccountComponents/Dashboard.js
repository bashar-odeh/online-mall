import React from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
import Line from "../Line";
const Dashboard = () => {
  return (
    <StyledMotion>
      <Title>
        <h2>الرئيسية</h2>
      </Title>
      <Line />
      <Contnent>
        <p>
          From your account dashboard. you can easily check & view your recent
          orders, manage your shipping and billing addresses and edit your
          password and account details.
        </p>
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
  padding: 1rem;
  margin: 1rem 0;
  p {
    font-size: 1.2rem;
    color: #333;
  }
`;
export default Dashboard;
