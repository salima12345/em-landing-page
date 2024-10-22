import React from "react";
import Nav from "./Nav";
import LanguageSelector from "./LanguagesSelectorDesktop";
import ImageSlider from "./Slider";

function Header() {
  return (
    <div className="relative  sticky  z-50">
      <div className="container">
        <Nav />
        <div className="flex justify-end pt-2 ">
          <LanguageSelector />
        </div>
      </div>

      <ImageSlider />
    </div>
  );
}

export default Header;
