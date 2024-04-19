import React, { useState } from 'react';
import image from '../../images/tesla.png';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../../features/car/carslice';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  const toggleMenu = () => {
    setBurgerStatus(!burgerStatus);
  };

  return (
    <div className="container1">
      <a href="/"><img src={image} alt="" /></a>
      <div className="menu">
        {cars && cars.map((car, index) => (
          <a key={index} href={`https://www.tesla.com/${car}`}>{car}</a>
        ))}
      </div>

      <div className="right">
        <a href="/">Shop</a>
        <a href="/">My Account</a>
        <MenuIcon onClick={toggleMenu} style={{ fill: 'white' }} /> 
      </div>
      <div className="hamburger" style={{ transform: burgerStatus ? 'translateX(0)' : 'translateX(100%)' }}>
        <div className="close">
          <CloseIcon className="c1" onClick={toggleMenu} />
        </div>
        <ul>
          <li><a href="/">Existing Inventory</a></li>
          <li><a href="/">Used Inventory</a></li>
          {cars && cars.map((car, index) => (
            <li key={index}><a href={`https://www.tesla.com/${car}`}>{car}</a></li>
          ))}
          <li><a href="/">Cybertruck</a></li>
          <li><a href="/">Roadster</a></li>
          <li><a href="/">Charging</a></li>
          <li><a href="/">Powerwall</a></li>
          <li><a href="/">Commercial energy</a></li>
          <li><a href="/">Utilities</a></li>
          <li><a href="/">Test Drive</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
