import React from "react";
import Header_slide from "./components_home/header_home/header_slide";
import Main from "./components_home/main_home/main";
import Footer from "./components_home/footer_home/footer";

function home() {
  return (
    <div>
      <Header_slide />
      <Main />
      <Footer />
    </div>
  );
}

export default home;
