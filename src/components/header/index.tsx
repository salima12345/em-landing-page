import React from "react";
import Nav from "./Nav";
import LanguageSelector from "./LanguagesSelectorDesktop";
import ImageSlider from "./Slider";

function Header() {
  return (
    <div className="relative  sticky  z-50">
      {/* Navigation et sélecteur de langue */}
      <div className="container">
        <Nav />
        <div className="flex justify-end pt-2 ">
          <LanguageSelector />
        </div>
      </div>

      {/* Slider positionné à droite de la page */}
      <ImageSlider />
    </div>
  );
}

export default Header;
