import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { validateUserName, validatePassword } from "../../common/utils";
import Button from "../../components/button";
import Input from "../../components/input";
import { useAuthContext } from "../../hooks/auth";

const Login = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { loginUser } = useAuthContext();
  const history = useHistory();

  return (
    <Wrapper>
      <Container>
        <Content>
          <h1>Login</h1>
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
            title="Password"
            type="password"
            error={passwordError}
            value={password}
            onChange={(value) => {
              setPassword(value);
              const error = validatePassword(value);
              setPasswordError(error);
            }}
          />
          <Button
            disabled={!name || !password || !!nameError || !!passwordError}
            title="Login"
            variant="p"
            onClick={() => {
              loginUser({ name, password });
            }}
          />
          <Button
            title="Go to Signup"
            variant="s"
            onClick={() => {
              history.push("register");
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

export default Login;
