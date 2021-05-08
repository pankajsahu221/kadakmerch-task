import React from "react";
import "../Styles/MainRow.css";
import Header from "./Header";
import ProfileFeatures from "./ProfileFeatures";
import Socials from "./Socials";
import Footer from "./Footer";

function MainRow() {
  return (
    <div className="mainrow">
      <Header />

      <ProfileFeatures />

      <Socials />

      <Footer />
    </div>
  );
}

export default MainRow;
