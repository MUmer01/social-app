import styled from "styled-components";

const Button = ({ title, variant, ...props }) => {
  return (
    <ButtonWrapper>
      <StyledButton
        {...props}
        variant={variant}
        style={{
          ...props.style,
        }}
      >
        {title}
      </StyledButton>
    </ButtonWrapper>
  );
};

const StyledButton = styled.button`
  border: 2px solid;
  outline: none;
  ${({ variant, disabled }) => {
    const txtColor = disabled ? "#aaa" : variant === "s" ? "green" : "white";
    const bgColor = disabled ? "#eee" : variant === "s" ? "white" : "green";
    return `
        border-color: ${txtColor};
        background-color: ${bgColor};
        color: ${txtColor};
    `;
  }}
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 250px;
  margin-top: 20px;
  justify-content: flex-end;
`;

export default Button;
