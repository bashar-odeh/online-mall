import React from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
const AccountDetails = () => {
  return (
    <StyledAccount>
      <Title>
        <h2>بيانات الحساب</h2>
      </Title>
      <Form>
        <FLName>
          <InputWrapper>
            <label htmlFor="firstname">الاسم </label>
            <input type="text" name="firstname" />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="lastname">اسم العائلة</label>
            <input type="text" name="lastname" />
          </InputWrapper>{" "}
        </FLName>
        <InputWrapper>
          <label htmlFor="displayname">اسم العرض</label>
          <input type="text" name="displayname" />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="">البريد الالكتروني </label>
          <input type="email" name="email" />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="">كلمة السر الحالية *</label>
          <input type="text" name="lastname" />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="">كلمة السر الجديدة *</label>
          <input type="text" name="lastname" />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="">تاكيد كلمة السر *</label>
          <input type="text" name="lastname" />
        </InputWrapper>
        <Buttons>
          <button>Save</button>
        </Buttons>
      </Form>
    </StyledAccount>
  );
};
const StyledAccount = styled(motion.div)`
  width: 100%;
  height: auto;
  h2 {
    padding: 1rem;
  }
  box-shadow: 0 0 7px rgb(0 0 0 / 10%);
`;
const Title = styled.div`
  h2 {
    font-size: 1.7rem;
  }
`;
const InputWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;

  input {
    width: 100%;
    padding: 1rem 0;
    border: 1px solid rgb(80 80 80 /20%);
  }
  label {
    padding: 0.5rem 0;
  }
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FLName = styled.form`
  width: 100%;
  display: flex;
`;
const Buttons = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  button {
    width: 15%;
    padding: 0.8rem 1.5rem;
    background-color: #ff324d;
    border: none;
    font-size: 1.3rem;
    font-weight: bolder;
    text-align: center;
    color: white;
    cursor: pointer;
    transition: 0.5s all ease;
    border-radius: 0.4rem;
  }
`;
export default AccountDetails;
