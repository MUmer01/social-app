import styled from "styled-components";
import Input from "../../components/input";
import { useAuthContext } from "../../hooks/auth";

const Register = () => {
  const { name, setName, registerUser } = useAuthContext();

  return (
    <Wrapper>
      <Container>
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          style={{
            color: "green",
          }}
        />
        <br />
        <Input
          style={{
            color: "green",
          }}
        />
        <br />
        <Input
          style={{
            color: "green",
          }}
        />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
const Container = styled.div`
  width: 400px;
  height: 200px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export default Register;
