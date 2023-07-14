import { AppBar, Button, Toolbar, Typography, styled, Box } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react';

export default function Navbar({MenuBoton,  Title, accionCaja, setObjeto }) {
  return (
    <Box
      component={AppBar}
      sx={{
        width: '100%',
        marginLeft: '0',
        [`@media (min-width:960px)`]: {
          width: 'calc(100% - 240px)',
          marginLeft: '240px'
        }
      }}
      // sx={{
      //   width: isMediumScreen ? '100%' : 'calc(100% - 240px)',
      //   marginLeft: isMediumScreen ? 0 : 240,
      // }}
    >
      <Toolbar>
        <MenuBoton onClick={() => accionCaja()} color="inherit" aria-label="menu">
          <MenuOpenIcon />
        </MenuBoton>
        <Typography variant="h5" flexGrow="1" >
          <FilterDramaIcon sx={{ marginRight: 2 }} />
          SMART INFO
        </Typography>
        <Button sx={{ borderLeft: 1 }} onClick={() => setObjeto({})} variant="text" color="inherit">
          <LogoutIcon sx={{ marginRight: 1 }} />
          Cerrar Sesion
        </Button>
      </Toolbar>
    </Box>
  );
}
