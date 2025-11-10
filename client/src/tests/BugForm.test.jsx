import { render, screen, fireEvent } from "@testing-library/react";
import BugForm from "../components/BugForm";

test("renders form and handles input", () => {
  render(<BugForm refresh={() => {}} />);
  const input = screen.getByPlaceholderText(/Bug title/i);
  fireEvent.change(input, { target: { value: "UI Bug" } });
  expect(input.value).toBe("UI Bug");
});
