import React, {useState, useEffect} from 'react';
import HeaderMenu from './HeaderMenu'
import './Header.css';

const Header = (props) => {
  const abcLogo = "https://f.v1.n0.cdn.getcloudapp.com/items/0C3l1E2v1k3b1a2C0C26/abc_logo.svg"

  return (
    <div className="row">
      <div className="col">
       <img src={abcLogo} alt="abc logo" />
       <HeaderMenu changePage={props.changePage}/>
      </div>

      <div className="col contact">
        <button type="button" className="btn contact-button">Contact Us</button>
      </div>
    </div>

  )

}

export default Header;
