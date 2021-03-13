import "./Main.css";
import hello from "../../../../assets/hello.svg";
import Chart from "../charts/Chart";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Chào Bạn</h1>
            <p>Trang Quản Lý A3 Shop</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
          <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Shop Đăng Ký Mới/Tháng</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Khách Hàng Đăng Ký Mới</p>
              <span className="font-bold text-title">2467</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Sản Phẩm Đăng Bán</p>
              <span className="font-bold text-title">340</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Sản Phẩm Bán Ra</p>
              <span className="font-bold text-title">645</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Tổng Đơn Hàng Hệ Thống</h1>
                
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Thống Kê Chi Phí</h1>
                
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Đã Bán</h1>
                <p>$75,300</p>
              </div>

              <div className="card2">
                <h1>Tổng Giá Trị Voucher</h1>
                <p>$124,200</p>
              </div>

              <div className="card3">
                <h1>Người Dùng</h1>
                <p>3900</p>
              </div>

              <div className="card4">
                <h1>Đơn Hàng</h1>
                <p>1881</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;
