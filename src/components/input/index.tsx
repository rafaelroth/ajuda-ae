import React from "react";
import styled from "styled-components";

type PropsType = {
  placeholder: string;
  onChange: () => void;
};

const InputStyle = styled.div`
  display: flex;
  background-color: #dee5e5;
  border-radius: 31px;
  width: 100%;
  padding: 14px 20px;
  box-sizing: border-box;

  .input {
    background: none;
    border: 0;
    outline: none;
    width: 100%;
    font-size: 18px;

    ::placeholder {
      color: #082d0f;
    }
  }
`;

const Input = React.forwardRef(
  ({ placeholder, onChange }: PropsType, ref: any) => (
    <InputStyle>
      <input
        ref={ref}
        onChange={onChange}
        className="input"
        placeholder={placeholder}
        type="text"
        aria-label="Input de Busca"
        name="Input de Busca"
      />
      <img
        style={{
          backgroundColor: "red",
          width: "28px",
          height: "28px",
          borderRadius: "12px",
        }}
      />
    </InputStyle>
  )
);

export default Input;
