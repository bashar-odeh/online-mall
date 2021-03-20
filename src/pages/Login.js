import React from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <StyledLogin>
      <FormWrapper>
        <img src={logo} alt="" />
        <LoginForm>
          <h2>تسجيل الدخول</h2>
          <input type="email" placeholder="البريد الالكتروني " />
          <input type="password" placeholder="كلمة السر " />
          <button>تسجيل الدخول</button>{" "}
          <div>
            <span>
              ليس لديك حساب؟ <Link>سجل الان</Link>
            </span>
            <span>
              <Link to="/">الصفحة الرئيسية </Link>
            </span>
          </div>
        </LoginForm>
      </FormWrapper>
    </StyledLogin>
  );
};
const StyledLogin = styled(motion.div)`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormWrapper = styled(motion.div)`
  height: 70%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  padding: 4rem;
  input {
    width: 100%;
    padding: 1rem;
    margin: 1rem 0;
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
  div {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      padding: 1rem;
    }
  }
`;
export default Login;
