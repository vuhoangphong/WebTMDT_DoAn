import React from "react";
import "./Price_range.css";
import "./Left_sidebar.css";

function Left_sidebar() {
  return (
    <div className="left-sidebar">
      <h2>Category</h2>
      <div className="panel-group category-products" id="accordian">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a
                data-toggle="collapse"
                data-parent="#accordian"
                href="#sportswear"
              >
                <span className="badge pull-right">
                  <i className="fa fa-plus"></i>
                </span>
                Sportswear
              </a>
            </h4>
          </div>
          <div id="sportswear" className="panel-collapse collapse">
            <div className="panel-body">
              <ul>
                <li>
                  <a href="">Nike </a>
                </li>
                <li>
                  <a href="">Under Armour </a>
                </li>
                <li>
                  <a href="">Adidas </a>
                </li>
                <li>
                  <a href="">Puma</a>
                </li>
                <li>
                  <a href="">ASICS </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                <span className="badge pull-right">
                  <i className="fa fa-plus"></i>
                </span>
                Mens
              </a>
            </h4>
          </div>
          <div id="mens" className="panel-collapse collapse">
            <div className="panel-body">
              <ul>
                <li>
                  <a href="">Fendi</a>
                </li>
                <li>
                  <a href="">Guess</a>
                </li>
                <li>
                  <a href="">Valentino</a>
                </li>
                <li>
                  <a href="">Dior</a>
                </li>
                <li>
                  <a href="">Versace</a>
                </li>
                <li>
                  <a href="">Armani</a>
                </li>
                <li>
                  <a href="">Prada</a>
                </li>
                <li>
                  <a href="">Dolce and Gabbana</a>
                </li>
                <li>
                  <a href="">Chanel</a>
                </li>
                <li>
                  <a href="">Gucci</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a data-toggle="collapse" data-parent="#accordian" href="#womens">
                <span className="badge pull-right">
                  <i className="fa fa-plus"></i>
                </span>
                Womens
              </a>
            </h4>
          </div>
          <div id="womens" class="panel-collapse collapse">
            <div className="panel-body">
              <ul>
                <li>
                  <a href="">Fendi</a>
                </li>
                <li>
                  <a href="">Guess</a>
                </li>
                <li>
                  <a href="">Valentino</a>
                </li>
                <li>
                  <a href="">Dior</a>
                </li>
                <li>
                  <a href="">Versace</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a href="#">Kids</a>
            </h4>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a href="#">Fashion</a>
            </h4>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a href="#">Households</a>
            </h4>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a href="#">Interiors</a>
            </h4>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a href="#">Clothing</a>
            </h4>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a href="#">Bags</a>
            </h4>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a href="#">Shoes</a>
            </h4>
          </div>
        </div>
      </div>

      <div className="brands_products">
        <h2>Brands</h2>
        <div className="brands-name">
          <ul className="nav nav-pills nav-stacked">
            <li>
              <a href="">
                {" "}
                <span className="pull-right">(50)</span>Acne
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <span className="pull-right">(56)</span>Gr??ne Erde
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <span className="pull-right">(27)</span>Albiro
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <span className="pull-right">(32)</span>Ronhill
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <span className="pull-right">(5)</span>Oddmolly
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <span className="pull-right">(9)</span>Boudestijn
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <span className="pull-right">(4)</span>R??sch creative culture
              </a>
            </li>
          </ul>
        </div>
      </div>

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

      <div class="shipping text-center">
        <img src="image/home/shipping.jpg" alt="" />
      </div>
    </div>
  );
}
export default Left_sidebar;
