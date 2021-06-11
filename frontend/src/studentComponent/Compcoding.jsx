
import React from "react";
import {Nav,FormControl,Button,Navbar,Link,Form} from "react-bootstrap";



function Compcoding(){
    
    return(

        <>
  <Navbar bg="dark" variant="dark">
    
    <Navbar.Text>
    Name : pradeep Kumar<br/>
    Email : pradeepkr00171999@gmail.com<br/>
    Github : pradeepkr00171999@gmail.com<br/>
    Contact : 7388083531
      </Navbar.Text>

      <Navbar.Brand href="#home">
      <img
        alt=""
        src="/https://www.google.com/search?q=man+image&safe=strict&sxsrf=ALeKk03d_PV1ac340z6coKbjYTv0LhJv_Q:1622579508535&tbm=isch&source=iu&ictx=1&fir=Q-voRYapLuMC5M%252CGR6mzBQIbdDHCM%252C_&vet=1&usg=AI4_-kTxtJC94QNkK4hfH_OPZZLYeu_Ekg&sa=X&ved=2ahUKEwjagufZo_fwAhU2H7cAHVcpCv8Q9QF6BAgQEAE#imgrc=Q-voRYapLuMC5M"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      
    </Navbar.Brand>

  </Navbar>
</>

    );
}

function Coding(){
    
    return(

     <>
         <div class="container col-6">

  <div class="card bg-primary text-white">
    <div class="card-body">
        <h1>Codeforces</h1>
        <h3>1800</h3>
    </div>
  </div>
  <br/>
  <div class="card bg-success text-white">
    <div class="card-body"> <h1>Codeforces</h1>
        <h3>1800</h3></div>
  </div>
  <br/>
  <div class="card bg-info text-white">
    <div class="card-body">
        <h1>Codeforces</h1>
            <h3>1800</h3>
        </div>
  </div>

  <br/>
  <div class="card bg-warning text-white">
    <div class="card-body"><h1>Codeforces</h1>
        <h3>1800</h3></div>
  </div>
  <br/>
  <div class="card bg-danger text-white">
    <div class="card-body"><h1>Codeforces</h1>
        <h3>1800</h3></div>
  </div>
 
</div>
     </>

    );
}
export  {Compcoding,Coding};
