/* eslint-disable react/jsx-no-duplicate-props */
import styled from 'styled-components';

const InputImage = ({ title, error, onChange, value, ...props }) => {
  return (
    <InputWrapper>
      {title ? <label>{title}</label> : null}
      <div>
        <label>
          {value ? (
            <img src={URL.createObjectURL(value)} alt="" width="138" />
          ) : (
            'No file chosen'
          )}
          <input
            {...props}
            style={{
              ...props.style,
            }}
            type="file"
            onChange={e => {
              onChange(e.target.files);
              e.target.value = null;
            }}
            accept="image/*"
            style={{ display: 'none' }}
          />
        </label>
        {error ? <Error>{error}</Error> : null}
      </div>
    </InputWrapper>
  );
};

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

export default InputImage;
