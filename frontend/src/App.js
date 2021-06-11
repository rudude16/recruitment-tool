import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Sidbar} from './Nav'
import Acadmic from './studentComponent/Acadmic';
import {Compcoding,Coding} from './studentComponent/Compcoding';
import {BrowserRouter,Route} from 'react-router-dom';
import {Signup,Signin} from './Homepage/Signup';
import Home from './Homepage/Home';


function App(){
  return (
  <BrowserRouter>
    <div >

    <Home />
    

    {/* <Home/>
    <Form/> */}
    {/* <Nav /> */}
    {/* <Signup />
    <Signin /> */}
    {/* <Sidbar /> */}
    {/* <Compcoding /> */}
    
    {/* <Coding /> */}

    {/* <Route path="/ccoading" component = {Compcoding} /> */}
    
    <Route path="/signup" component = {Signup} />
    <Route path="/signin" component = {Signin} />
    <Route path="/Acadmic" component = {Acadmic} />
    <Route path="/Coding" component = {Coding} />
    </div>

  </BrowserRouter>
  );
}
export default App;
