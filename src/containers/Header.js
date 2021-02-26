import {Link} from 'react-router-dom';
import './Header.css'
import brandIcon from '../images/RustrIcon.png';

function Header() {

  return (
    <div className="header">
        <div>
        <img className="brand-icon" src={brandIcon} alt="" />
        <span className="company-title">ustr</span>
        </div>
      
        <div className="home-nav">
        <Link to="/" className="home-link" >Home</Link> 
        <Link className="home-link" >Features</Link> 
        <Link className="home-link" >Enterprise</Link> 
        <Link className="home-link" >Support</Link> 
        <Link className="home-link" >Pricing</Link> 
        <Link className="home-link">Sign up</Link>
        </div>
    </div>
  );
}

export default Header;
