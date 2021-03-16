import React from "react";
import Header_top from "./header_top/Header_top";
import Header_middle from "./header_middle/Header_middle";
import Header_bottom from "./header_bottom/Header_bottom";
import Header_slide from "./header_slide/Header_slide";

function header() {
  return (
    <header id="header">
      <Header_top />
      <Header_middle />
      <Header_bottom />
    </header>
  );
}

export default header;
