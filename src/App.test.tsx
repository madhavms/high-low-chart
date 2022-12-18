import { render, screen } from "@testing-library/react";
import App from "./App";

let mockStatus = "";
let mockData: Array<string> = [];

jest.mock("react-query", () => {
  return {
    __esModule: true,
    useQuery: () => ({
      data: mockData,
      status: mockStatus,
    }),
  };
});

// Create a mock implementation of the chart library
jest.mock('./chart/Chart', () => {
  return {
    __esModule: true,
    default: () => <div>Chart Rendered</div>,
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

  test("renders chart", async () => {
    mockStatus = "";
    mockData = ["chart Data"];
    const { findByText } = render(<App />);
    const element = await findByText(/Chart Rendered/i);
    expect(element).toBeInTheDocument();
  });
});
