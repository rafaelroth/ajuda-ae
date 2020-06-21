import React, { useRef } from "react";

import Input from "../components/input";

const Home = () => {
  const inputRef = useRef();
  return (
    <div>
      <Input
        onChange={() =>
          console.log(
            inputRef && inputRef.current && (inputRef as any).current.value
          )
        }
        ref={inputRef}
        placeholder="Quem você quer ajuda hoje?"
      />
    </div>
  );
};

export default Home;
