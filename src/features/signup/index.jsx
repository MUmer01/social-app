import styled from "styled-components";
import Input from "../../components/input";
import { useAuthContext } from "../../hooks/auth";

const Register = () => {
  const { name, setName, registerUser } = useAuthContext();

  return (
    <Wrapper>
      <Container>
        <Content>
          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <Input />
          <br />
          <Input />
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Register;
