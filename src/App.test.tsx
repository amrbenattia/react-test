import React, { AnchorHTMLAttributes } from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByLabelText("learn-link");
  expect(linkElement).toHaveClass("App-link");
  expect(linkElement).toHaveTextContent("Learn React with me");
  expect(linkElement).toBeInTheDocument();
});

test("url is correct", () => {
  render(<App />);
  const linkElement = screen.getByLabelText("learn-link");
  expect((linkElement as HTMLAnchorElement).href).toEqual(
    "https://reactjs.org/"
  );
});
