
import React ,{Component}from 'react';
import './Login.css';




class login extends Component {
    constructor(props) {
        super(props);    
        this.state = {
          context: props.context
        };
        this.signUp = this.signUp.bind(this);
        this.signIn = this.signIn.bind(this);
      }
      
    signUp(){
        const container = document.querySelector(".login-container");
        container.classList.add("sign-up-mode");         
    }

    signIn(){
        const container = document.querySelector(".login-container");
        container.classList.remove("sign-up-mode");              
    }

   render(){
    return (
        <div className="login-container">
            <div className="forms-container">
                <div className="sign-in-sing-up">
                    <form action="" className="form-login sign-in-form">
                        <h2 className="title"> Sig in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>  
                            <input type="text" placeholder="Username" name="userName"></input>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="text" placeholder="password" name="password"></input>
                        </div>
                        <input type="submit" value="login" className="btn-login solid" ></input>
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
                    
                    <form action="" className="form-login sign-up-form">
                        <h2 className="title"> Sig up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>  
                            <input type="text" placeholder="Username"  name="userName"></input>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="text" placeholder="Email" name="email"></input>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="text" placeholder="password" name="password"></input>
                        </div>
                        <input type="submit" value="sign up" className="btn-login solid"></input>
                        <p className="social-text"> Đăng ký với:</p>
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
            <div className="panels-container">
               <div className="panel left-panel">
                   <div className="content">
                       <h3>test</h3>
                       <p>test</p>
                       <button className="btn transparent" id="sign-up-btn" onClick={this.signUp}>Sign up</button>
                   </div>
                   <img src="image/loginAndRegister/shopping.svg" className="image" alt=""/>
               </div>
               <div className="panel right-panel">
                   <div className="content">
                       <h3>test</h3>
                       <p>test</p>
                       <button className="btn transparent" id="sign-in-btn" onClick={this.signIn}>Sign in</button>
                   </div>
                   <img src="image/loginAndRegister/desk.svg" className="image" alt=""/>
               </div>
            </div>
        </div>
    );
    }
 }
    

export default login;