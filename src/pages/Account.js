import React, { useState } from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
import Dashboard from "../components/AccountComponents/Dashboard";
import Orders from "../components/AccountComponents/Orders";
import AccountDetails from "../components/AccountComponents/AccountDetails";
const Account = () => {
  const [item, setItem] = useState(0);
  const ArrayOfItems = [<Dashboard />, <Orders />, <AccountDetails />];
  return (
    <StyledAccount>
      <Wrapper>
        <List>
          <li className={item === 0 ? "active" : ""} onClick={() => setItem(0)}>
            الرئيسية
          </li>
          <li className={item === 1 ? "active" : ""} onClick={() => setItem(1)}>
            الطلبات
          </li>{" "}
          <li className={item === 2 ? "active" : ""} onClick={() => setItem(2)}>
            بيانات الحساب
          </li>
          <li>تسجيل الخروج</li>
        </List>
        <ListElementWrapper>{ArrayOfItems[item]} </ListElementWrapper>
      </Wrapper>
    </StyledAccount>
  );
};

const StyledAccount = styled(motion.div)`
  height: 100%;
  margin-top: 1rem;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  height: auto;
  width: 80%;
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const ListElementWrapper = styled.div`
  width: 100%;
  height: 100%;
  h2 {
    padding: 1rem;
  }
  box-shadow: 0 0 7px rgb(0 0 0 / 20%);
`;
const List = styled.ul`
  width: 25%;
  height: auto;
  margin-left: 1rem;

  li {
    list-style-type: none;
    padding: 1rem;
    border: 1px solid #efefef;
    font-size: 1.3rem;
    transition: 0.2s all ease-in-out;
    pointer-events: all;
    cursor: pointer;
    &:hover {
    }
  }
  .active {
    background-color: #ff324d;
  }
  @media (max-width: 900px) {
    display: flex;
    width: 100%;
    padding: 1rem;
    width: auto;
    flex-wrap: wrap;
    gap: 1rem;
    li {
      flex: 1 1 40%;
      width: auto;
      margin: 0 1rem;
      font-size: 1rem;
    }
  }
`;
const Details = styled.div``;

const Title = styled.div``;
export default Account;
