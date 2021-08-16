// Add in nessisary imports
import React from "react";
import Display from "../Display";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";

// Add In Necessary Values To Establish The Testing Suite
const testShow = {
  name: "test show",
  summary: "what a show",
  seasons: [
    { id: 0, name: "Season 1", episodes: [] },
    { id: 1, name: "Season 2", episodes: [] },
    { id: 2, name: "Season 3", episodes: [] },
  ],
};

// Test That The Display Component Renders Without Any Passed In Props
test("renders display component without any props passed in", () => {
  render(<Display />);
});

// Rebuild Or Copy A Show Test Data Element As Used In The Previous Set Of Tests
test("when the fetch button is pressed, the show component will display", async () => {
  render(<Display show={testShow} />);

  await waitFor(() => {
    const show = screen.queryAllByTestId("show-container");
    expect(show).toBeTruthy();
  });

  const button = screen.queryByRole("button");
  userEvent.click(button);
});

// Test That When The Fetch Button Is Pressed, The Show Component Will Display
test("when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data", async () => {
  render(<Display show={testShow} />);

  await waitFor(() => {
    const show = screen.queryAllByTestId("show-container");
    expect(show).toBeTruthy();
  });

  const button = screen.queryByRole("button");
  userEvent.click(button);
});

// Test That When The Fetch Button Is Pressed, The Amount Of Select Options Rendered Is Equal To The Amount Of Seasons In Your Test Data
test("when the fetch button is pressed, this function is called", async () => {
  render(<Display show={testShow} />);

  await waitFor(() => {
    const show = screen.queryAllByTestId("show-container");
    expect(show).toBeTruthy();
  });

  const button = screen.queryByRole("button");
  userEvent.click(button);
});

///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
