import {
   Grid,
   Box,
   Button,
   AppBar,
   Drawer,
   IconButton,
   Typography,
   Container,
   styled,
   Toolbar, 
   Hidden,
   Paper} 
   from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Modal from "./components/Ventana"
import Navbar from "./components/Navbar";
import Cajon from "./components/Cajon";

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  ...theme.mixins.toolbar
}));
const Content = styled(Container)(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(3)
}));
const MenuBoton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up("md")]:{
    display: "none"
  },
}));
const Title = styled(Typography)(({ theme }) => ({
  flexGrow:1
}));
const AppNavbar = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.up("md")]:{
    width: "calc(100% - 240px)",
    marginLeft:240
  },
}));
const Drawere = styled(Drawer)(({ theme }) => ({

  width: 240,
  flexShrink: 0
}));



export default function Home() {

  const theme = createTheme();

  const [open, setOpen] = useState(false);
  const [caja, setCaja] = useState(false);

  const handleClose = () => {
    setOpen(!open)
  }
  const handleOpen = () => {
    console.log(open)
    setOpen(!open)
  }

  const accionCaja = () => {
    setCaja(!caja)
  }


  return (
    <ThemeProvider theme={theme}>
      <Content  theme={theme} sx={{display: "flex"}}>
        <Navbar accionCaja={accionCaja} AppNavbar={AppNavbar} MenuBoton={MenuBoton} CustomToolbar={CustomToolbar} Title={Title}/>
        <Paper sx={{ display: { md: 'block', xs: 'none' } }} >
          <Cajon open={true} variant="permanent" Drawere={Drawere} CustomToolbar={CustomToolbar} theme={theme} ></Cajon>
        </Paper>
        <Paper sx={{ display: { md: 'block', xs: 'none' } }} >
          <Cajon open={caja} variant="temporary" Drawere={Drawere} CustomToolbar={CustomToolbar} theme={theme} onClose={accionCaja}></Cajon>
        </Paper>
        <Content >
          <CustomToolbar/>
            <br />
          <Modal apertura={open} handleClose={handleClose} ></Modal> 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi mollitia culpa libero nihil ducimus laboriosam placeat ipsam odio molestias vero, exercitationem officia blanditiis modi facilis. Nesciunt necessitatibus nobis rerum amet.
          <Button variant="contained" onClick={handleOpen}>Editar perfil</Button>
        </Content>
      </Content>        
    </ThemeProvider>
  );
}
