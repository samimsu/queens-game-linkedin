import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders queens link", () => {
  render(<App />);
  const linkElement = screen.getByText(/queens/i);
  expect(linkElement).toBeDefined();
});
