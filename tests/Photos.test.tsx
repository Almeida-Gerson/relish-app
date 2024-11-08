import React from "react";
import { render, screen } from "@testing-library/react";
import PhotosScreen from "../src/Pages/PhotosScreen";

describe("PhotosScreen component", () => {
  it("renders PhotosScreen component", () => {
    render(<PhotosScreen />);
    const title = screen.getByText(/Photos/i);
    expect(title).toBeInTheDocument();
  });

  it("do not show Photo component", () => {
    render(<PhotosScreen />);
    const title = screen.queryByText(/Information:/i);
    expect(title).not.toBeInTheDocument();
  });
});
