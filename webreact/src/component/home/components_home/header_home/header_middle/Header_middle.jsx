import React from 'react';
import './Header_middle.css';

function Header_middle() {
  return (
    <div class="header-middle">
      <div class="container">
        <div class="row">
          <div class="col-md-4 clearfix">
            <div class="logo pull-left">
              <a href="/">
                <img src="image/home/logo.png" alt="" />
              </a>
            </div>
            <div class="btn-group pull-right clearfix">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-default dropdown-toggle usa"
                  data-toggle="dropdown"
                >
                  USA
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a href="">Canada</a>
                  </li>
                  <li>
                    <a href="">UK</a>
                  </li>
                </ul>
              </div>

              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-default dropdown-toggle usa"
                  data-toggle="dropdown"
                >
                  DOLLAR
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a href="">Canadian Dollar</a>
                  </li>
                  <li>
                    <a href="">Pound</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-8 clearfix">
            <div class="shop-menu clearfix pull-right">
              <ul class="nav navbar-nav">
                <li>
                  <a href="/account">
                    <i class="fa fa-user"></i> Account
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-star"></i> Wishlist
                  </a>
                </li>
                <li>
                  <a href="/checkout">
                    <i class="fa fa-crosshairs"></i> Checkout
                  </a>
                </li>
                <li>
                  <a href="/cart">
                    <i class="fa fa-shopping-cart"></i> Cart
                  </a>
                </li>
                <li>
                  <a href="/login">
                    <i class="fa fa-lock"></i> Login
                  </a>
                </li>
                <li>
                  <a href="/register">
                    <i class="fa fa-lock"></i> Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header_middle;
