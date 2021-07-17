import styled from "styled-components";

const Input = (props) => {
  return (
    <StyledInput
      {...props}
      style={{
        color: "red",
        ...props.style,
      }}
      type={props.type || "text"}
    />
  );
};

const StyledInput = styled.input`
    background-color: red;
`;

export default Input;
