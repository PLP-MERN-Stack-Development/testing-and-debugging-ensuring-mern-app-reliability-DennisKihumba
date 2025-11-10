import { render, screen } from "@testing-library/react";
import BugList from "../components/BugList";

test("renders empty bug list message", () => {
  render(<BugList bugs={[]} refresh={() => {}} />);
  expect(screen.getByText(/No bugs reported/i)).toBeInTheDocument();
});
