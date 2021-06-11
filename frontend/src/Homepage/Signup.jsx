import React from "react";
import "./Homepage.css";
const Signup = () => {
return (
  <>

<div class="container-fluid signup">
  <div >
      <span id="s4">Signup</span><br/>
      <div class="content">
      <span >First Name</span><input type="text" id="s1"
placeholder="Enter First Name...... " /><br />
      <span >Last Name</span><input type="text" id="s1"  placeholder=" Enter Last Name...... "  /><br/>
      <span>Email</span><input type="email" id="s2"  placeholder="EnterEmail...... "  /><br/>
      <span >Password</span><input type="password" id="s1"  placeholder=" Enter Last Name...... "  /><br />
      <span >Cofirm password</span><input type="password" id="s1"  placeholder=" Enter Last Name...... "  /><br />
      
      <input type="button" id="s3" value="Signup" /><br />
      </div>
    </div>
</div>
</>
);
};

const Signin = () => {
  return (
    <>
  
  <div class="container-fluid signup">
    <div >
        <span id="s4">Login</span><br/>
        <div class="content">
        <span>Email</span><input type="email" id="s2"  placeholder="EnterEmail...... "  /><br/>
        <span >Password</span><input type="password" id="s1"  placeholder=" Enter Last Name...... "  /><br />
        <input type="button" id="s3" value="Login" /><br />
        </div>
      </div>
  </div>
  </>
  );
  };

export  {Signup,Signin};
