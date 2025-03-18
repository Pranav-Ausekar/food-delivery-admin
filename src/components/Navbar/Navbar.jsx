import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img className='logo' src={assets.logo5} alt="" />
            <h2>Admin Panel</h2>
            <img className='profile' src={assets.profile_image2} alt="" />
        </div>
    )
}

export default Navbar