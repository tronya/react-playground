import React from 'react'
import {Link} from "react-router-dom";
import './TopMenu.css'

const TopMenu = () => (
    <div className="top-menu">
        <Link to='/' className="top-menu__item">Home</Link>
    </div>
)

export default TopMenu;
