import logo from '../logo.png';
import './Header.css'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='header'>
        <img className='logo' src={logo} alt='logo' />
        <h1><Link style={{textDecoration:'none', color:'white'}} to="/">HomePad</Link></h1>
      <div className='navlinks'>
        <dir className='dir'>
        <Link to="/Calendar">Calendar&nbsp; &nbsp; &nbsp;</Link>
         <Link to="/Maintenance">Maintenance</Link>
         </dir>
                
        {/* <img className='' src={} alt='menu' /> */}
      </div>
      
      </div>
      
  )
}

export default Header