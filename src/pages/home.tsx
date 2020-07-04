import React, { useRef } from "react";

import SearchHeader from "../modules/searchHeader";

const Home = () => {
  const inputRef = useRef();
  return (
    <div>
      <div
        style={{ width: "100%", height: "70px", backgroundColor: "white" }}
      />
      <SearchHeader title="Já sabe quem ajudar?" />
      <div
        style={{
          width: "1170px",
          margin: "64px auto 120px",
          backgroundColor: "rgba(165,164,178,0.26)",
          display: "flex",
        }}
      >
        <div
          style={{
            minWidth: "245px",
            height: "900px",
            backgroundColor: "#57BC90",
          }}
        />
        <ul style={{ margin: "0 40px 40px", width: "100%" }}>
          {Array(10)
            .fill(null)
            .map(() => (
              <li
                style={{
                  backgroundColor: "rgb(165,164,178)",
                  height: "155px",
                  width: "100%",
                  marginTop: "40px",
                  listStyle: "none",
                }}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
