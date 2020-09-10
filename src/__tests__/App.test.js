import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders app", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/ /i);
  expect(linkElement).toBeInTheDocument();
});
