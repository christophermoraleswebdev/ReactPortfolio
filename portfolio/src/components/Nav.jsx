import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <h4>Christopher Morales</h4>
      </div>

      {/* Main Menu */}
      <div className={`menu ${menuVisible ? 'mobile-menu-active' : ''}`}>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contactMe'>Contact Me</Link>
      </div>

      {/* Hamburger Menu */}
      <i className="fa-solid fa-bars hamburger-menu" onClick={toggleMenu}></i>
      <div className={`hamburger-menu-container ${menuVisible ? 'active' : ''}`}>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contactMe'>Contact Me</Link>
      </div>
    </div>
  );
};

export default Navbar;