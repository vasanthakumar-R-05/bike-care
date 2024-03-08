import logo from './logo.svg';
import './Sign.css';
import logos from './logo for my pro-fotor-bg-remover-20240108102441.png';
import { Link } from 'react-router-dom';

function Sign() {
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
     
     <div className="mid-container">
           <div className='ml-container'>
             <h1>"Two wheels, endless possibilities. Rent a bike, explore the world."</h1>
          </div>

          <div className='mr-container'>
            
            <form >
            <h2>Bike Rental Care</h2>
            <label>
            Name:<br></br>
            <input type="text" required/>
            </label> <br />
            <label>phone No:<br></br>
            <input type="text" required />
            <button  className="btn2" type="submit">generate otp</button>
            </label><br></br>
            <label>
            OTP:<br></br>
            <input type="text" required/>
            </label> <br />
            <label>Email Address:<br></br>
            <input type="email" required />
            </label><br></br>
            <label>district:<br></br>
            <select  required >
            <option value={"cbe"}>--select--</option>
              <option value={"cbe"}>coimbatore</option>
              </select>
            </label><br></br>
            <label>Password:<br></br>
            <input type="password" required />
            </label><br></br>
            <label>Confirm Password:<br></br>
            <input type="password" required />
            </label><br></br>
            <br></br>
          <Link to={'/Login'}><button  className="btn1" type="submit">Signup</button></Link>
          <h5>Already have an account? <Link to={'/Login'}> <a href='/Login'>Login</a></Link></h5> <br></br>

            </form>
           </div>
     </div>
     <br/>
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
          
          </div>
     </div>
</>
  );
  <hr></hr>
}

export default Sign;
