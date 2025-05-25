import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading", { name: /contact us/i });
  expect(heading).toBeInTheDocument();
});

test("should load button inside contact us component", () => {
  render(<Contact />);

  const button = screen.getByRole("button", { name: /submit/i });
  expect(button).toBeInTheDocument();
});
