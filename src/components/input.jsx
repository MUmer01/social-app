import styled from "styled-components";

const Input = ({ title, onChange, ...props }) => {
  return (
    <InputWrapper>
      {title ? <label>{title}</label> : null}
      <StyledInput
        {...props}
        style={{
          ...props.style,
        }}
        type={props.type || "text"}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </InputWrapper>
  );
};

const StyledInput = styled.input`
  width: 130px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

export default Input;
