import React from 'react'
import { Link } from "react-router-dom";

const TopMenu = () => (
  <div>
    <Link to='/'>Home</Link>
    <Link to='/top-stories'>Top Stories</Link>
  </div>
)

export default TopMenu;
