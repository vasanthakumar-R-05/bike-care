import logo from './logo.svg';
import './Contact.css';
import logos from './logo for my pro-fotor-bg-remover-20240108102441.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function About() {
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
      <div className="mid">
        <div className='ml'>
          <h1>"Two wheels, endless possibilities. Rent a bike, explore the world."</h1>
        </div>

        <div className='mr'>

          <div >
            <h1>CONTACT US:</h1>
            <br></br>
            <h3>EMAIL ADDRESS:</h3>
            <h5>General  :bikerentalcare1@gmail.com</h5>
            <h5> Complaint:abikerentalcare2@gmail.com</h5>
            <h3>CUSTOMER CARE:</h3>
            <h5>PHONE NO:91-985236165</h5>
            <h3>BUSINESS:</h3>
            <h5>PHONE NO:91-785216165</h5>
            <br></br>
          </div>
        </div>
      </div>
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
      <br />
      <hr></hr>
    </>
  );

}
export default About;
