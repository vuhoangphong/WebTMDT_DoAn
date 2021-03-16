import React from "react";
import "./Main_price.css";
import "./Price_range.css";

function Main_price() {
  return (
    <div className="price-range">
      <h2>Price Range</h2>
      <div className="well text-center">
        <div className="slider slider-horizontal" style={{ width: "182px" }}>
          <div className="slider-track">
            <div
              className="slider-selection"
              style={{ left: "51.6667 %", width: "23.3333 %" }}
            />
            <div
              className="slider-handle round left-round"
              style={{ left: "51.6667 %" }}
            />
            <div className="slider-handle round" style={{ left: "75%" }} />
          </div>
          <div
            className="tooltip top"
            style={{ top: "-30px", left: "82.2667px" }}
          >
            <div className="tooltip-arrow" />
            <div className="tooltip-inner">250 : 450</div>
          </div>
          <input
            type="text"
            className="span2"
            value=""
            data-slider-min="0"
            data-slider-max="600"
            data-slider-step="5"
            data-slider-value="[250,450]"
            id="sl2"
          />
        </div>
        <br />
        <b className="pull-left">$ 0</b>
        <b className="pull-right">$ 600</b>
      </div>
    </div>
  );
}
export default Main_price;
