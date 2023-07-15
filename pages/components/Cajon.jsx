import { Divider, Drawer, Toolbar } from '@mui/material';
import React from 'react';
import Lista from './Lista';

export default function Cajon({ variant, Drawere, CustomToolbar, theme, open, onClose = null, handleAbrir }) {
  const handleClose = onClose ? onClose : null;

  return (
    <Drawer sx={{
      width: 240,
      flexShrink: 0
    }} variant={variant} classes={{ paper: 240 }} anchor="left" open={open} onClose={handleClose}>
      <Toolbar />
      <Divider />
      <Lista handleAbrir={handleAbrir} />
    </Drawer>
  );
}
