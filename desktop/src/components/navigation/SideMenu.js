import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


// Components

function Menu() {

  return (
    <div> 
        <ul>
            <Link to="/"><li>Map</li></Link>
            <Link to="/workers"><li>Users</li></Link>
        </ul>
    </div>
  )
}

export default Menu