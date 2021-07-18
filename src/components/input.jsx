import styled from "styled-components";

const Input = (props) => {
  return (
    <StyledInput
      {...props}
      style={{
        ...props.style,
      }}
      type={props.type || "text"}
    />
  );
};

const StyledInput = styled.input``;

export default Input;
