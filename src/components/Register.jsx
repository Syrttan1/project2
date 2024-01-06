import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loginHandler } from "../store/RegisterSlice";
import { SIGN_IN, SIGN_UP } from "../utils/url";

const Register = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.register);

  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const validEmailRegex = RegExp(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);

  const changeEmailHandler = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const validEmail = validEmailRegex.test(emailValue);
    setEmailIsValid(validEmail);
  };

  const changePasswordHandler = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    const validPassword = passwordValue.length > 5;
    setPasswordIsValid(validPassword);
  };

  const isLoginClickHandler = (e) => {
    e.preventDefault();
    dispatch(loginHandler());
  };

  const isValid = emailIsValid && passwordIsValid;

  const submitHandlerClick = async (e) => {
    e.preventDefault();
    const dataValueRegister = {
      email: email,
      password: password,
    };
    if (isLogin) {
      try {
        const response = await fetch(`${SIGN_IN}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataValueRegister),
        });
        if (!response.ok) {
          const errorData = await response.json();
          if (errorData && errorData.error && errorData.error.message) {
            if (errorData.error.message === "EMAIL_EXISTS") {
              console.error(
                "Email already exists. Please use a different email address."
              );
            } else {
              console.error(errorData.error.message);
            }
          } else {
            console.error("Authorization failed:", errorData);
          }
          return;
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Unexpected error:", error.message);
      }
    } else {
      try {
        const response = await fetch(`${SIGN_UP}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataValueRegister),
        });

        if (!response.ok) {
          const errorData = await response.json();
          if (errorData && errorData.error && errorData.error.message) {
            if (errorData.error.message === "EMAIL_EXISTS") {
              console.error(
                "Email already exists. Please use a different email address."
              );
            } else {
              console.error(errorData.error.message);
            }
          } else {
            console.error("Authorization failed:", errorData);
          }
          return;
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Unexpected error:", error.message);
      }
    }
  };

  return (
    <FormRegisterStyle>
      <Container>
        <h1> {isLogin ? "login" : "Sign up"}</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={changeEmailHandler} />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            onChange={changePasswordHandler}
          />
        </div>

        <button onClick={submitHandlerClick} disabled={!isValid}>
          {isLogin ? "sign in" : "sign up"}
        </button>
        <p onClick={isLoginClickHandler}>
          {isLogin ? "create new account" : "you already have an account ?"}
        </p>
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
  & button:disabled,
  & button[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }

  & p {
    cursor: pointer;
    text-decoration: underline;
    color: black;
  }
`;

export default Register;
