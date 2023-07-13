import { AppBar, Button, IconButton, Toolbar, Typography, styled } from '@mui/material'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import React from 'react'

const Navbar = ({AppNavbar, MenuBoton, CustomToolbar, Title, accionCaja}) => {
  return (
        <AppNavbar >
            <CustomToolbar>
                <MenuBoton onClick={()=> accionCaja()} color="inherit" aria-label="menu"  >
                    <MenuOpenIcon></MenuOpenIcon>
                </MenuBoton>
                <Title variant='h6'  >
                    Joseph App
                </Title>
                <Button variant="text" color='inherit' >
                    Login
                </Button>
            </CustomToolbar>
        </AppNavbar>
  )
}

export default Navbar