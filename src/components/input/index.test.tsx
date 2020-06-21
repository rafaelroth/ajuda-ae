import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Input from "./";

describe("Component: Input", () => {
  it("should be render a functional input", () => {
    let ref;
    render(
      <Input
        onChange={() => {}}
        ref={ref}
        placeholder="Quem você quer ajuda hoje?"
      />
    );

    fireEvent.change(screen.getByLabelText("Input de Busca"), {
      target: { value: "Ronaldinho preso" },
    });

    expect(screen.getByDisplayValue("Ronaldinho preso"));

    fireEvent.change(screen.getByLabelText("Input de Busca"), {
      target: { value: "Moinho de vento" },
    });

    expect(screen.getByDisplayValue("Moinho de vento"));
  });
});
