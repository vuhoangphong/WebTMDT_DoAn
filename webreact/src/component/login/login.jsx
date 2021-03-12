import React from 'react';
import '../login/Login.css';

function login() {
    return (
        <div className="container">
            <div className="forms-container">
                <div className="sign-in-sing-up">
                    <form action="" className="sing-in-form">
                        <h2 className="title"> Sig in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>  
                            <input type="text" placeholder="Username"></input>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="text" placeholder="password"></input>
                        </div>
                        <input type="submit" value="login" className="btn solid"></input>
                        <p className="social-text"> Đăng nhập với:</p>
                        <div className="social-media">
                            <a href className="social-icon">
                               <i class="fab fa-google"></i>
                            </a>             
                            <a href className="social-icon">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href className="social-icon">
                                <i class="fab fa-twitter"></i>   
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default login;