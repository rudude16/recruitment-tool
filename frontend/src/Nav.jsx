import React from "react"
import "./Nav.css";
import { Image } from "react-bootstrap";

function Nav(){
  return(
    <div >
    <ul>
    
  <li><a class="active" href="Coding"  ><span>Name: </span>  pradeep Kumar</a></li>
  <li><a href="news"><span>Email: </span> pradeepkr00171999@gmail.com</a></li>
  <li><a href="contact">Contact</a></li>
</ul>



    </div>

  );
}

function Sidbar(){
  return(
    <>
    
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

<div class="navbar">
  <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Coading</a>
  <a href="#"><i class="fa fa-fw fa-search"></i> Search</a>
  <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a>
  <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>
</div>


    </>
  );
}

  export {Nav,Sidbar};