import React from 'react';
import Header from '../components/header/Header';
import './home.css'
import { useState } from 'react';
import { Link } from "react-router-dom"

function Homepage() {
    const [userType, setUserType] = useState('')
    
    const userChange = (e) => {
        setUserType(e.target.value)
      }
      return (
        <div>
          <Header />
       <div className='home'>
        <div className='main'>
            <div className='title'>
                <h1>Welcome to HomePad!</h1>
            </div>
           
          <form>
            <div style={{textAlign: 'center'}}>
            <label>
              <p>Are you a landlord or a renter?</p>
              <select value={userType} onChange={userChange}>
                <option value="Landlord">Landlord</option>
                <option value="Renter">Renter</option>
              </select>
            </label>
            </div>
          </form>
          <div style={{display:'flex', justifyContent:'center'}}>
          <Link to="/Renter" className="li">
      <button className="button">Start Now</button>
      </Link>

          </div>
        </div>
          
    
     </div>
           
        </div>
      );
    }
    
    export default Homepage;    