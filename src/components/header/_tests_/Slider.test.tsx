import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SliderSwiper from "../Slider";

describe("SliderSwiper component", () => {
  it("renders the Swiper component", () => {
    render(<SliderSwiper />);
    const swiperElement = screen.getByRole("region");
    expect(swiperElement).toBeInTheDocument();
  });

  it("renders all slides", () => {
    render(<SliderSwiper />);
    const slides = screen.getAllByRole("img");
    expect(slides).toHaveLength(7);
  });

  it("renders the correct alt text for each slide", () => {
    render(<SliderSwiper />);
    const altTexts = [
      "Stratégie marketing",
      "Relations Media",
      "Design visuel",
      "Tech & Web",
      "Edition & contenus",
      "Social Media / Référencement",
      "Outsourcing",
    ];

    altTexts.forEach((altText) => {
      const slide = screen.getByAltText(altText);
      expect(slide).toBeInTheDocument();
    });
  });
});