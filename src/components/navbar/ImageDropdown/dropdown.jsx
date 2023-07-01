import React from 'react';
import './style.css';
import message from "../../../assets/Vector (1).png"

const ImageWithDropdown = () => {
  return (
    <div className="container"> 
      <div className="dropdown">
        <img src={message} className='dropbtn' alt="" />
        <div className="dropdown-content">
          <a href="#">My orders</a>
          <a href="#">Settings</a>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default ImageWithDropdown;