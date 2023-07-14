import { Divider, Drawer, Toolbar } from '@mui/material'
import React from 'react'
import Lista from './Lista'


export default function Cajon({variant, Drawere, CustomToolbar, theme, open, onClose=null, handleAbrir }) {

  return (
    <Drawere variant={variant} classes={{paper:240 }} anchor="left" open={open} onClose={onClose? onClose: null} >
        <CustomToolbar />
        <Divider></Divider>
        <Lista handleAbrir={handleAbrir} ></Lista>
    </Drawere>
  )
}
