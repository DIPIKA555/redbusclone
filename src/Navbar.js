
import React from 'react'
import "./Navbar.css"
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate=useNavigate()
  return (
    <div>  
      <div class="navbar">
        <div class="leftnav">
            <AirportShuttleOutlinedIcon  fontSize='large' style={{color:"white",fontSize:"50px", paddingBottom: "10px"}}
              onClick={()=>{navigate("/")}}
            />
            <a href="./">BUS TICKET</a>
            <a href="./">rYde</a>
            <a href="./">redRail</a>
        </div>
        <div class="rightnav">
            <a href="./">help</a>
            <a href="./">Print/SMS Ticket</a>
            <AccountCircleIcon fontSize='large'/>
            <KeyboardArrowDownIcon fontSize='large'/>
        </div>
    </div>
    </div>
  )
}

export default Navbar
