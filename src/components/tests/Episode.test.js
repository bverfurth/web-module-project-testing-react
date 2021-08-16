import React from "react";
import Episode from "./../Episode";
import { render, screen } from "@testing-library/react";

const testEpisode = {
  id: 1,
  name: "",
  image:
    "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
  season: 1,
  number: 1,
  summary: "testingsummary",
  runtime: 1,
};

//Added Approprate Test Data Structure.
const testEpisodeWithoutImage = {
  id: 1,
  name: "",
  image: "",
  season: 1,
  number: 1,
  summary: "",
  runtime: 1,
};

// Complete A Test That Shows The Episode Component Renders
test("renders without error", () => {
  render(<Episode episode={testEpisode} />);
});

// Modify The Test Data To Display A Specific Summary Statement
test("renders the summury test passed as prop", () => {
  render(<Episode episode={testEpisode} />);

  const summary = screen.getByText(`${testEpisode.summary}`);

  expect(summary).toBeInTheDocument();
  expect(summary).toHaveTextContent(testEpisode.summary);
  expect(summary).toBeTruthy();
});

//The Episode Component Displays A Default Value Episode Component
test("renders default image when image is not defined", () => {
  render(<Episode episode={testEpisodeWithoutImage} />);

  const image = screen.getByAltText("./stranger_things.png");

  expect(image).toHaveAttribute("alt", "./stranger_things.png");
});

//Tasks
//1. Complete a test that shows the Episode component renders. Pass in the provided example episode data as a test prop.
//2. Modify the test data to display a specific summary statement. Complete a test that shows that the summary value passed in to the Episode component displays as expected. Use no more then 3 different expect statements to test the the existance of the summary value.
//3. The episode component displays a default value ('./stranger_things.png') when a image url is not provided. Create a new piece of test data with the image property set to null. Test that the alt tag of the image displayed is set to './stranger_things.png'.
