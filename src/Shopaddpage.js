import logo from './logo.svg';
import './Shopaddpage.css';
import logos from './logo for my pro-fotor-bg-remover-20240108102441.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Shopaddpage() {
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

      <div className="mid-container">
        <div className='ml-container'>
          <h1>"Two wheels, endless possibilities. Rent a bike, explore the world."</h1>
        </div>

        <div className='mr-container'>

          <form >
            <h2>Bike Rental Care</h2>
            <label>
              Shop Name:<br></br>
              <input type="text" required />
            </label> <br />
            <label>Shop owner Name:<br></br>
              <input type="text" required />
            </label><br></br>
            <label>Shop Address:<br></br>
              <textarea />
            </label><br></br>
            <label>Shop certificate:<br></br>
              <input type="file" required />
            </label><br></br>
            <label>Description:<br></br>
              <textarea/>
            </label><br></br>
            <label>Shop Photo:<br></br>
              <input type="file" required />
            </label><br></br>
            <label>service option:<br></br>
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
              </select>
            </label><br></br>
            {/* <label>No Of Bikes:<br></br>
              <input type="number" required />
            </label><br></br> */}
            {/* <label>date out:<br></br>
              <input type="date" required />
            </label><br></br>
            <label>date In:<br></br>
              <input type="date" required />
            </label><br></br>
            <label>out time:<br></br>
              <input type="time" required />
            </label><br></br>
            <label>In time:<br></br>
              <input type="time" required />
            </label> */}
            <br />
        <br/><br/><Link ><button className="btn1" type="submit">Send</button></Link>
          </form>
        </div>
      </div>
      <br />
      <hr></hr>
      <div className='last-mid'>
        <div className='lf-contact'>
          <h1>CONTACT US:</h1>
          <br></br>

          <h5>General  :bikerentalcare1@gmail.com</h5>
          <h5> Complaint:abikerentalcare2@gmail.com</h5>

          <h5>PHONE NO:91-985236165</h5>

          <h5>PHONE NO:91-785216165</h5>


        </div>
        <div className='lr-aboutas'>

          <i class="bi bi-instagram"></i>

        </div>
      </div>
    </>
  );
  <hr></hr>
}

export default Shopaddpage;
