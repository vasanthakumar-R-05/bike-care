import logo from './logo.svg';
import './About.css';
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
        <div className='mil'>
          <h1>"Two wheels, endless possibilities. Rent a bike, explore the world."</h1>
        </div>

        <div className='mlr'>

          <div >
            <h1>ABOUT US:</h1>
            <h3>Why Choose Bike Rental Care?</h3>
            <h4>Diverse Bike Selection:</h4>
            <h5>From stylish scooters to powerful cruisers, Bike Rental Care offers a diverse fleet of well-maintained bikes to cater to every rider's preferences.</h5>
            <h4>Effortless Booking:</h4>
            <h5>Our user-friendly online platform makes booking a bike quick and hassle-free. With just a few clicks, you'll be ready to embark on your biking adventure.</h5>
            <h4>Safety First:</h4>
            <h5> Your safety is our priority. We provide a complimentary helmet with every rental, ensuring that you ride with the utmost safety and peace of mind</h5>
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
