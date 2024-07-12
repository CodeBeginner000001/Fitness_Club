import React from 'react'
import {Link}from 'react-router-dom'
import {Stack }from"@mui/material"

import Logo from "../assets/images/Logo.png"
export default function NavBar() {
  return (
    <div>
      <Stack direction="row" alignItems="center" sx={{gap:{sm: '122px',xs:'40px'},mt:{sm:'32px',xs:'20px'}}}px="5px">
        <Link to="/">
          <img src={Logo} alt="Logo" style={{height:"30px",margin:"0 20px"}}/>
        </Link>
        <Stack direction="row" alignItems="flex-end" gap="20px" fontSize="18px">
          <Link to="/" style={{textDecoration:"none",color:"#3A1212",borderBottom:"3px solid #FF2625"}}>Home</Link>
          <a href="#exercises" style={{textDecoration:"none",color:"#3A1212"}}>Exercises</a>
        </Stack>
      </Stack>
    </div>
  )
}
