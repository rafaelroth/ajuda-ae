import React, { useRef } from "react";
import styled from "styled-components";

import Input from "../../components/input";

type PropsType = {
  title: string;
};

const SearchHeaderStyle = styled.div`
  width: 100%;
  height: 260px;
  background-color: #57bc90;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .searchHeader-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 526px;
  }

  .searchHeader-title {
    color: #fff;
    margin-bottom: 18px;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 28px;
  }
`;

const SearchHeader = ({ title }: PropsType) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <SearchHeaderStyle>
      <div className="searchHeader-container">
        <h1 className="searchHeader-title">{title}</h1>
        <Input
          onChange={() =>
            console.log(inputRef && inputRef.current && inputRef.current.value)
          }
          ref={inputRef}
          placeholder="Quem você quer ajuda hoje?"
        />
      </div>
    </SearchHeaderStyle>
  );
};

export default SearchHeader;
