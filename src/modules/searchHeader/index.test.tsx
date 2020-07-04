import React from "react";
import { render, screen } from "@testing-library/react";

import SearchHeader from "./";

// @TODO: Testar direito
describe("Component: SearchHeader", () => {
  it("should be render a functional SearchHeader", () => {
    render(<SearchHeader title="Já sabe quem ajudar?" />);

    screen.getByText("Já sabe quem ajudar?");
  });
});
