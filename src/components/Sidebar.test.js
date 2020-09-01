import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders name in sidebar", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Simon K. Bjørnøy/i);
  expect(linkElement).toBeInTheDocument();
});
