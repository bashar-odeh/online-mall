import React from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import CheckBox from "../components/CheckBox";
import GoogleButton from "react-google-button";
import FacebookLogin from "react-facebook-login";

const Register = () => {
  return (
    <StyledLogin>
      <FormWrapper>
        <img src={logo} alt="" />
        <LoginForm>
          <h2>التسجيل</h2>
          <input type="email" placeholder="البريد الالكتروني " />
          <input type="password" placeholder="الاسم" />{" "}
          <input type="email" placeholder="كلمة السر" />
          <input type="password" placeholder="تاكيد كلمة السر" />
          <button>التسجيل </button> <div></div>{" "}
          <CheckBox title="اوافق على جميع الشروط" />
        </LoginForm>{" "}
        <Wrapper>
          <span>OR</span>
          <SocialMedia>
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook-square"></i>
          </SocialMedia>
        </Wrapper>
      </FormWrapper>{" "}
    </StyledLogin>
  );
};
const StyledLogin = styled(motion.div)`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  img {
    padding-top: 1rem;
  }
  padding: 1rem;
`;
const FormWrapper = styled(motion.div)`
  height: 100%;
  width: auto;
  min-width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 0 7px rgb(0 0 0 / 10%);
`;
const LoginForm = styled(motion.form)`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 4rem;
  input[type="email"],
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 0.7rem;
    margin: 0.5rem 0;
    font-size: 1.2rem;
  }
  input[type="checkbox"] {
    margin: 1rem 0 1rem 1rem;
    font-size: 1.3rem;
  }
  button {
    width: 100%;
    background-color: #ff324d;
    padding: 1rem;
    border: none;
    font-size: 1.5rem;
    color: white;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-size: 1.3rem;
    font-weight: 900;
  }
`;
const SocialMedia = styled(motion.div)`
  display: flex;
  i:nth-of-type(2) {
    color: #0e8cf1;
  }
  i:nth-of-type(1) {
    color: #ea4335;
  }
  i {
    font-size: 4rem;
    margin: 1rem;
  }
`;
export default Register;
