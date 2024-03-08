import logo from './logo.svg';
import './Admin.css';
import logos from './logo for my pro-fotor-bg-remover-20240108102441.png';
import logose from './2023-04-13.jpg';
import logosee from './2023-08-10.jpg';
import logoseee from './2018-09-22.jpg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VscArrowRight } from "react-icons/vsc";
function Admin() {
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
          <Link to={'/'}><button className="btn" >home</button></Link>
          <Link to={'/Contact'}><button className="btn" >Contact Us</button></Link>
          <Link to={'/About'}><button className="btn" >About Us</button></Link>
          <Link to={'/Login'}><button className="btn" >sign/login</button></Link>

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
             
              </select></h4>
            
            </label>
            <br></br>
            <h4>Add Shop Details---<Link to={'/Shopadd'}><button className='as'>Add</button></Link></h4>
            <br></br>
            <h4>Edit Shop Details---<Link to={'/Shopedit'}><button className='as'>Edit</button></Link></h4>
            <br></br>
            <h4>Remove Shop Details---<Link to={'/Shopremove'}><button className='as'>Remove</button></Link></h4>

          </form>
        </div>

        <div className='cdg'>
          <div className='cd'>
            <div className='cn'>
              <h4>Name:</h4>
              <h5>Relax Bike rental</h5>

            </div>

            <div className='ci'>
              <hr></hr>
              <img
                img src={logose} alt="cur"
                height={300}
                width={300}
              /><hr></hr>
            </div>
            <div className='ca'>
              <h4>Address:</h4>
              <a> Annamalai Tower 233, 2nd street Gandhipuram, opposite cheap and best hotel, Coimbatore, Tamil Nadu 641012</a>
            </div>
          </div>
          <div className='cd'>
            <div className='cn'>
              <h4>Name:</h4>
              <h5>coimbatore bike rentals</h5>

            </div>

            <div className='ci'>
              <hr></hr>
              <img
                img src={logoseee} alt="cur"
                height={300}
                width={300}
              /><hr></hr>
            </div>
            <div className='ca'>
              <h4>Address:</h4>
              <a> n v n layout, 562 -564, ponney street, 3rd cross, Cross Cut Rd, Gandhipuram, Tamil Nadu 641012</a>
            </div>
          </div>
          <div className='cd'>
            <div className='cn'>
              <h4>Name:</h4>
              <h5>Indian Rental Bikes</h5>

            </div>

            <div className='ci'>
              <hr></hr>
              <img
                img src={logosee} alt="cur"
                height={300}
                width={300}
              /><hr></hr>
            </div>
            <div className='ca'>
              <h4>Address:</h4>
              <a>  78, cheron towers, Government Arts College Rd, Gopalapuram, Coimbatore, Tamil Nadu 641018</a>
            </div>
          </div>
        </div>
      </div>

      <br />
    </>
  );

}
export default Admin;
