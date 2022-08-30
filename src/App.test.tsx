import React from "react";
import { render, screen } from "@testing-library/react";


import App from "./App";

let mockStatus = "";
let mockData: Array<string> = [];

//mocks the react-query library
jest.mock("react-query", () => {
  return {
    __esModule: true,
    useQuery: () => ({
      data: mockData,
      status: mockStatus,
    }),
  };
});

jest.mock("./chart", () => {
  return {
    __esModule: true,
    Chart: () => <div>Chart Rendered</div>,
  };
});

beforeEach(() => {
  jest.resetModules();
});

describe("Chart-UI", () => {
  test("renders Loading screen", () => {
    mockStatus = "loading";
    render(<App />);
    const loaderElement = screen.getByText(/Loading/i);
    expect(loaderElement).toBeInTheDocument();
  });

  test("renders error screen", () => {
    mockStatus = "error";
    render(<App />);
    const errorElement = screen.getByText(/Error/i);
    expect(errorElement).toBeInTheDocument();
  });

  test("renders chart", () => {
    mockStatus = "";
    mockData = ["chart Data"];
    render(<App />);
    const chartElement = screen.getByText(/Chart Rendered/i);
    expect(chartElement).toBeInTheDocument();
  });
});
