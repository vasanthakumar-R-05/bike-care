import './Shopremove.css';
import logos from './logo for my pro-fotor-bg-remover-20240108102441.png';
import logose from './2023-04-13.jpg';
import logosee from './2023-08-10.jpg';
import logoseee from './2018-09-22.jpg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VscArrowRight } from "react-icons/vsc";
function Shopremove() {
  return (
    <>
    <navigator className="App" >
      <div>
      <img
          img src={logos} alt="cur"
          height={100}
          width={100}
        />
      </div>
    <div>
      <h1>bike rental care</h1>
    </div>
    <div>
     <Link to={'/'}><button className= "btn" >home</button></Link> 
     <Link to={'/Contact'}><button className= "btn" >Contact Us</button></Link>
     <Link to={'/About'}><button className= "btn" >About Us</button></Link>
     <Link to={'/Login'}><button className= "btn" >sign/login</button></Link>

    </div>
    </navigator> 
    <hr></hr>
       <div className='mida'>
                <div className='midal'>
                  <form >
                    <h2>Administrator</h2>
                    <br></br>
                    <label><h4>Service option:
              <select required >
                <option value={"cbe"}>--select--</option>
                <option value={"cbe"}>New bike shops</option>
                <option value={"cbe"}>Old bike shops</option>
                <option value={"cbe"}>Bike service center</option>
                <option value={"cbe"}>Bike Rental</option>
                <option value={"cbe"}>Water service and cleaning</option>
                <option value={"cbe"}>Bike Accessories</option>
                <option value={"cbe"}>Old bike selling Shop</option>
                <option value={"cbe"}>Bike design Shop</option>
                <option value={"cbe"}>Bike spot service</option>
             
              </select></h4> <br></br>
            
            </label>
            <br></br>
                    <h4>Add Shop Details---<Link to={'/Shopadd'}><button className='as'>Add</button></Link></h4>
                    <br></br>
                    <h4>Edit Shop Details---<Link to={'/Shopedit'}><button className='as'>Edit</button></Link></h4>
                    <br></br>
                    <h4>Remove Shop Details---<Link to={'/Shopremove'}><button className='as'>Remove</button></Link></h4>
           
                   </form>
                </div>
                <div>
                <div className='dc'>
                <form >
            <h2>Bike Rental Care</h2>
            <label>
            Shop Name:<br></br>
            <input type="text" required/>
            </label> <br /><br></br>
            <label>phone No:<br></br>
            <input type="text" required />
            </label><br></br>
            <br></br>
            <label>service option:
            <select required >
                <option value={"cbe"}>--select--</option>
                <option value={"cbe"}>New bike shops</option>
                <option value={"cbe"}>Old bike shops</option>
                <option value={"cbe"}>Bike service center</option>
                <option value={"cbe"}>Bike Rental</option>
                <option value={"cbe"}>Water service and cleaning</option>
                <option value={"cbe"}>Bike Accessories</option>
                <option value={"cbe"}>Old bike selling Shop</option>
                <option value={"cbe"}>Bike design Shop</option>
                <option value={"cbe"}>Bike spot service</option>
             
              </select> <br></br></label>
              <br></br>
            <label>Shop Address:<br></br>
            
            <textarea id="w3review" name="w3review" rows="4" cols="30">
              </textarea>
            </label><br></br><br></br>
            <label>Shop photo:<br></br>
            <br></br>
            <input type="file" required></input>
            </label><br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <center>
            <button  type="submit">Shop Remove </button>
            </center>

            </form>
                 </div>
                </div>
           
        </div>

     <br/>
</>
  );

  }
export default Shopremove;
