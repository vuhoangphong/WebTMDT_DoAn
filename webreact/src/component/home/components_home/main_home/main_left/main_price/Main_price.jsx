import React from 'react';
import './Main_price.css';
import './Price_range.css';

function Main_price() {
  return (
    <div class="price-range">
      <h2>Price Range</h2>
      <div class="well text-center">
        <div class="slider slider-horizontal" style={{ width: '182px' }}>
          <div class="slider-track">
            <div
              class="slider-selection"
              style={{ left: '51.6667 %', width: '23.3333 %' }}
            />
            <div
              class="slider-handle round left-round"
              style={{ left: '51.6667 %' }}
            />
            <div class="slider-handle round" style={{ left: '75%' }} />
          </div>
          <div class="tooltip top" style={{ top: '-30px', left: '82.2667px' }}>
            <div class="tooltip-arrow" />
            <div class="tooltip-inner">250 : 450</div>
          </div>
          <input
            type="text"
            class="span2"
            value=""
            data-slider-min="0"
            data-slider-max="600"
            data-slider-step="5"
            data-slider-value="[250,450]"
            id="sl2"
          />
        </div>
        <br />
        <b class="pull-left">$ 0</b>
        <b class="pull-right">$ 600</b>
      </div>
    </div>
  );
}
export default Main_price;
