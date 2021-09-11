import styled from 'styled-components';

const Input = ({ title, error, onChange, ...props }) => {
  return (
    <InputWrapper>
      {title ? <label>{title}</label> : null}
      <div>
        <StyledInput
          {...props}
          style={{
            ...props.style,
          }}
          type={props.type || 'text'}
          onChange={e => {
            onChange(e.target.value);
          }}
        />
        {error ? <Error>{error}</Error> : null}
      </div>
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
  margin-bottom: 10px;
`;

const Error = styled.p`
  margin: 0;
  padding: 0;
  font-size: 10px;
  color: red;
  width: 130px;
  font-weight: bold;
`;

export default Input;
