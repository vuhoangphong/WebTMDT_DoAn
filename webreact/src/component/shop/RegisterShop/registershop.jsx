import React from 'react';


function registershop() {
    return (
        <div>
            <div className="container">
            <h1>Đăng Ký Shop</h1>
            <p>Vui Lòng Điền Đầy Đủ Thông Tin Cửa Hàng</p>
            <form action="">
                <hr/> 
                    <table width="50">
                        <label for="tenshop"><b>Tên Shop</b></label>
                        <input type="text" placeholder="Nhập Tên Shop" name="nameshop" id="nameshop" required/>
                        <br/>
                        <label for="tendangnhap"><b>Tên Đăng Nhập</b></label>
                        <input type="text" placeholder="Nhập Tên Đăng Nhập" name="user" id="user" required/>
                        <br/>
                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Nhập Password" name="password" id="password" required/>
                        <br/>
                        <label for="psw-repeat"><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="password-repeat" id="password-repeat" required/>
                        <br/>
                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" id="email" required/>
                        <br/>
                        <label for="diachi"><b>Địa Chỉ</b></label>
                        <input type="text" placeholder="Nhập Địa Chỉ" name="address" id="address" required/>
                        <br/>
                        <label for="quan"><b>Quận</b></label>
                        <input type="text" placeholder="Nhập Quận" name="district" id="district" required/>
                        <br/>
                        <label for="phuong"><b>Phường</b></label>
                        <input type="text" placeholder="Nhập Phường" name="ward" id="ward" required/>
                        <br/>
                        <div class="custom-select">
                            <label for="tinhthanh"><b>Tỉnh/Thành</b></label>
                            <select>
                                <option value="0"></option>
                                <option value="1">An Giang</option>
                                <option value="2">Bạc Liêu</option>
                                <option value="3">Bình Dương</option>
                                <option value="4">Cao Bằng</option>
                                <option value="5">Đắk Lắk</option>
                                <option value="6">Đồng Nai</option>
                                <option value="7">Khánh Hòa</option>
                                <option value="8">Long An</option>
                                <option value="9">Phú Thọ</option>
                                <option value="10">Sóc Trăng</option>
                                <option value="11">Thanh Hóa</option>
                                <option value="12">Trà Vinh</option>
                                <option value="13">Cần Thơ</option>
                                <option value="14">Đà Nẵng</option>
                                <option value="15">Hải Phòng</option>
                                <option value="16">Hà Nội</option>
                                <option value="17">TP HCM</option>     
                            </select>
                        </div>
                    </table>
                <hr/>
                <div class="btn-register" >
                    <a href="./loginshop">Register</a>
                </div>
                <br/>
                <br/>
                <div class="container signin">
                    <p>Already have an account? <a href="./loginshop">Sign in</a>.</p>
                    
                </div>
            </form> 
            </div> 
        </div>


    );
  }
  
  export default registershop;