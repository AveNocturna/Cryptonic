import React from 'react'
import './style.css';
import logo from '../../assets/logo.png';

const Heading = () => {
    return (
        <div className="homeHeadingContainer">
                <img src={logo} alt="logo"/>
                <p>Cryptonic</p>
                <h1 className='homeHeading'>Search a Currency</h1>
        </div>
    )
}

export default Heading