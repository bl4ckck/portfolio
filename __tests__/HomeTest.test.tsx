import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "../components/Navbar";

test("Check navbar menu", () => {
  const { getByText } = render(<Navbar />);
  
  expect(getByText("Experience")).toBeInTheDocument();
});