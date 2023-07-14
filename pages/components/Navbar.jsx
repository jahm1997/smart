import { AppBar, Button, IconButton, Toolbar, Typography, styled, useMediaQuery } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react';

export default function Navbar({ AppNavbar, MenuBoton, CustomToolbar, Title, accionCaja, setObjeto }) {
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <AppBar
      sx={{
        width: isMediumScreen ? '100%' : 'calc(100% - 240px)',
        marginLeft: isMediumScreen ? 0 : 240,
      }}
    >
      <CustomToolbar>
        <MenuBoton onClick={() => accionCaja()} color="inherit" aria-label="menu">
          <MenuOpenIcon />
        </MenuBoton>
        <Title variant="h6">
          <FilterDramaIcon sx={{ marginRight: 2 }} />
          Smart Info
        </Title>
        <Button sx={{ borderLeft: 1 }} onClick={() => setObjeto({})} variant="text" color="inherit">
          <LogoutIcon sx={{ marginRight: 1 }} />
          Cerrar Sesion
        </Button>
      </CustomToolbar>
    </AppBar>
  );
}
