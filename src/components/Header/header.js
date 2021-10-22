import React from 'react';
import './Header.css'
import {Navbar, Nav, NavDropdown,Form, FormControl,Button, Container} from "react-bootstrap";

const Header = () => {
  return (
    <container>
    
    <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Logo docplanner" width="250"/> 
    <div>
        <ul class="menu">
            <li class="active">About us</li>
            <li>Career</li>
            <li class="dropdown-btn">Departement
               <ul class="dropdown">
                 <li>Marketing & PR</li>
                 <li>Customer Success & sales</li>
                 <li>IT, Product, Data</li>
                 <li>Finance, Administration</li>
                 <li>HR & More</li>
             </ul>
            </li> 
        </ul>
    </div>
    </container>
  );
}

export default Header;
