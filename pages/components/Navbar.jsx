import { AppBar, Button, IconButton, Toolbar, Typography, styled } from '@mui/material'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react'

const Navbar = ({AppNavbar, MenuBoton, CustomToolbar, Title, accionCaja, setObjeto}) => {
  return (
        <AppNavbar >
            <CustomToolbar>
                <MenuBoton onClick={()=> accionCaja()} color="inherit" aria-label="menu"  >
                    <MenuOpenIcon></MenuOpenIcon>
                </MenuBoton>
                <Title variant='h6'  >
                    <FilterDramaIcon sx={{marginRight: 2}} ></FilterDramaIcon>
                    Smart Info
                </Title>
                <Button sx={{borderLeft:1}} onClick={() => {
                    setObjeto({})
                    return window.location.reload();
                }} variant="text" color='inherit' >
                    <LogoutIcon sx={{ marginRight:1 }} />Cerrar Sesion 
                </Button>
            </CustomToolbar>
        </AppNavbar>
  )
}

export default Navbar