import React, { Component } from 'react'

export class post_sanpham extends Component {
    render() {
        return (
            <div>
                <div className="main__cards">
          <div className="card">
            <div className="card_inner">
              <a href="#">Phổ Biến</a>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
            <a href="#">Mới Nhất</a>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
            <a href="#">Bán Chạy</a>
            </div>
          </div>

          <div class="panel panel-default">
                    <div class="panel-heading" >
                      <h4 class="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordian"
                          href="#qldh"
                        >
                          <span class="badge pull-right"></span>
                          Giá<i class="fa fa-angle-down"></i>
                        </a>
                      </h4>
                    </div>
                    <div id="qldh" class="panel-collapse collapse">
                      <div class="panel-body">
                        <ul>
                          <li>
                            <a href="#">Dưới 100.000</a>
                          </li>
                          <li>
                            <a href="#">100.000-300.000</a>
                          </li>
                          <li>
                            <a href="#">300.000-500.000</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

        </div>
            </div>
        )
    }
}

export default post_sanpham
