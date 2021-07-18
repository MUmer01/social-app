import { useState } from "react";
import styled from "styled-components";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../../common/utils";
import Button from "../../components/button";
import Input from "../../components/input";
import { useAuthContext } from "../../hooks/auth";

const Register = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    registerUser,
  } = useAuthContext();
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  return (
    <Wrapper>
      <Container>
        <Content>
          <Input
            title="Name"
            value={name}
            onChange={(value) => {
              setName(value);
            }}
            onBlur={() => {
              const error = validateName(name);
              setNameError(error);
            }}
          />
          <Input
            title="Email"
            value={email}
            onChange={(value) => {
              setEmail(value);
            }}
            onBlur={() => {
              const error = validateEmail(email);
              setEmailError(error);
            }}
          />
          <Input
            title="Password"
            value={password}
            onChange={(value) => {
              setPassword(value);
            }}
            type="password"
            onBlur={() => {
              const error = validatePassword(password);
              setPasswordError(error);
            }}
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
              registerUser();
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
  height: 200px;
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
