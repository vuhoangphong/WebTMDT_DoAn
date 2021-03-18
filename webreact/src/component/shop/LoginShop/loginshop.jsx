import React from 'react';


function loginshop() {
    return (
        <div>
            <div class="container">
                <form action="">
                    <div class="imgcontainer">
                        <img src="logo512.png" alt="Avatar" class="avatar"></img>
                    </div>

                    <div class="container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required/>
                        <br/>
                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required/>
                        <br/>
                        <button type="submit">Login</button>
                        <label>
                        <input type="checkbox" checked="checked" name="remember" required/> Remember me
                        </label>
                    </div>  
                    
                    <div class="container" >
                        <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
                        <span class="psw">Forgot <a href="#">password?</a></span>
                    </div>
                </form>
            </div>
        </div>
    )
  }
  
  export default loginshop;