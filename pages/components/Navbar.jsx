import { AppBar, Button, Toolbar, Typography, styled, Box, IconButton } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react';

export default function Navbar({accionCaja, setObjeto }) {
  return (
    <Box
      component={AppBar}
      sx={{
        width: '100%',
        marginLeft: '0',
        [`@media (min-width:900px)`]: {
          width: 'calc(100% - 240px)',
          marginLeft: '240px'
        }
      }}
    >
      <Toolbar>
        <IconButton 
        sx={{
          width: '2',
          marginRight: '5',
          [`@media (min-width:900px)`]: {
            // width: 'calc(100% - 240px)',
            // marginLeft: '240px'
            display:"none"
          }
        }}
        onClick={() => accionCaja()} color="inherit" aria-label="menu">
          <MenuOpenIcon />
        </IconButton>
          <FilterDramaIcon sx={{
            marginRight:"100",
            display:"block",
            [`@media (max-width:900px)`]: {
              // width: 'calc(100% - 240px)',
              // marginLeft: '240px'
              display:'none'
          }
        }} />
        <Typography variant="h5" flexGrow="1" marginLeft="2%" >
          SMART DELTA
        </Typography>
        <Button sx={{ borderLeft: 1 }} onClick={() => setObjeto({})} variant="text" color="inherit">
          <LogoutIcon />
          <Typography
          sx={{
            display:"block",
            [`@media (max-width:600px)`]: {
              // width: 'calc(100% - 240px)',
              // marginLeft: '240px'
              display:'none'
          }
        }}>
          Cerrar Sesion
          </Typography>
        </Button>
      </Toolbar>
    </Box>
  );
}
