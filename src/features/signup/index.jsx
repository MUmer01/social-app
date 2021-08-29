import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import {
  validateEmail,
  validateUserName,
  validatePassword,
} from "../../common/utils";
import Button from "../../components/button";
import Input from "../../components/input";
import { useAuthContext } from "../../hooks/auth";

const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { registerUser } = useAuthContext();
  const history = useHistory();
  return (
    <Wrapper>
      <Container>
        <Content>
          <Input
            title="Username"
            error={nameError}
            value={name}
            onChange={(value) => {
              setName(value);
              const error = validateUserName(value);
              setNameError(error);
            }}
          />
          <Input
            title="Email"
            error={emailError}
            value={email}
            onChange={(value) => {
              setEmail(value);
              const error = validateEmail(value);
              setEmailError(error);
            }}
          />
          <Input
            title="Password"
            error={passwordError}
            value={password}
            onChange={(value) => {
              setPassword(value);
              const error = validatePassword(value);
              setPasswordError(error);
            }}
            type="password"
          />
          <Button
            disabled={
              !name ||
              !email ||
              !password ||
              !!nameError ||
              !!emailError ||
              !!passwordError
            }
            title="Submit"
            variant="p"
            onClick={() => {
              registerUser({
                password,
                email,
                name,
              });
            }}
          />
          <Button
            title="Go to Login"
            variant="s"
            onClick={() => {
              history.push("login");
            }}
          />
        </Content>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100vh;
`;
const Container = styled.div`
  width: 400px;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;

  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Register;
