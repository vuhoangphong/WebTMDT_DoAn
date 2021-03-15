import "./sidebar_shop.css";
import logo from "../../../../assets/logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>ThangBe Sport</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>


      <div className="sidebar__link">
          <a href="./profileShop/sanpham">Sản Phẩm: <span className="font-bold text-title">116</span></a>
        </div>

        <div className="sidebar__link">
          <a href="#">Đang Theo Dõi: <span className="font-bold text-title">40</span></a>
        </div>

        <div className="sidebar__link">
          <a href="#">Người Theo Dõi: <span className="font-bold text-title">5k</span>  </a>
        </div>

        <div className="sidebar__link">
          <a href="#">Tham Gia: <span className="font-bold text-title">2 Tháng Trước</span></a>
        </div>
        
        <div className="sidebar__link">
          <a href="#">Đánh Giá: <span className="font-bold text-title">4.8 (1,2k đánh giá)</span></a>
        </div>
      </div>
  );
};

export default Sidebar;
