import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loginHandler } from "../store/RegisterSlice";

const Register = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.register);

  const isLoginClickHandler = (e) => {
    e.preventDefault();
    dispatch(loginHandler());
  };

  return (
    <FormRegisterStyle>
      <Container>
        <h1> {isLogin ? "login" : "Sign up"}</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" id="password" />
        </div>
        {/* <div> */}
        <button>{isLogin ? "sign in" : "sign up"}</button>
        <p onClick={isLoginClickHandler}>
          {isLogin ? "create new account" : "you already have an account ?"}
        </p>
        {/* </div> */}
      </Container>
    </FormRegisterStyle>
  );
};

const FormRegisterStyle = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: orange;
  align-items: center;
  padding: 20px 60px;
  gap: 20px;
  border-radius: 10px;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  & input {
    font-size: 20px;
    color: white;
    width: 200px;
    padding: 5px;
    background-color: orange;
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom-color: white;
  }

  & label {
    color: white;
  }
  & h1 {
    color: white;
  }

  & button {
    padding: 5px 10px;
    font-size: 20px;
    color: white;
    background-color: black;
    border: none;
    border-radius: 10px;
  }

  & p {
    cursor: pointer;
    text-decoration: underline;
    color: black;
  }
`;

export default Register;
