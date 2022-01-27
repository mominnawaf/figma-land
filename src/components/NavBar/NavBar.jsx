import React, { Component } from 'react';
import './NavBar.css'
import { AppBar, Button, Link } from '@material-ui/core';
import Logo from '../../assets/logo.png';
import { Menu } from '@material-ui/icons';

export default class NavBar extends Component {
  render() {
    return <div>
      <AppBar position="static" className="app-bar" elevation={0}>
        <img src={Logo} alt="logo" className="logo" />
        <div className='nav-menu'>
          <Link href="/">
            Home
            </Link>
          <Link href="/">
            Products
            </Link>
          <Link href="/">
            About
            </Link>
          <Link href="/">
            Contact
            </Link>
        </div>
        <Button variant="outlined" className='login-btn' >Login </Button>
        <Menu className='menu-btn' />
      </AppBar>
    </div>;
  }
}
