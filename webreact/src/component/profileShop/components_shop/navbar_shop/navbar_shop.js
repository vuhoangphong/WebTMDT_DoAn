import "./navbar_shop.css";
import avatar from "../../../../assets/avatar.svg";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>

      <div className="navbar__left">
        <a href="/">
          <img src="/image/home/logo.png" alt="" />
        </a>
        <div class="search_box pull-right">
          <input type="text" placeholder="Search" />

            <i className="fa fa-search" aria-hidden="true"></i>

        </div>
      </div>

      <div className="navbar__right">
        
        <div id="userinfo">
          <div id="avatar_box">
            <img width="30" src={avatar} alt="avatar" />
          </div>
          <div class="dropdown">
            <div id="dLabel" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cao Đắc Luận<span class="caret"></span>
            </div>
            <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
              <a>Tài Khoản Của Tôi</a>
              <br/>
              <a>Đơn Mua</a>
              <br/>
              <a>Đăng Xuất</a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
