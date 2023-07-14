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
   Paper,
   List,
   ListItemButton,
   ListItemIcon,
   ListItemText} 
   from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Modal from "./components/Ventana"
import Navbar from "./components/Navbar";
import Cajon from "./components/Cajon";
import Index from "./components/Index";
import Login from "./components/Login";
import axios from "axios"
import { useRouter } from "next/router";

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  ...theme.mixins.toolbar
}));
const Content = styled("div")(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(3)
}));
const Root = styled("div")(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.background.default,
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
  const router = useRouter();
  
  const [open, setOpen] = useState(false);
  const [caja, setCaja] = useState(false);
  const [objeto, setObjeto] = useState({});


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

  const inicio = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/user", data);
      if (res.status === 200) {
        const resp = res.data;
        setObjeto(resp);
        console.log("Respuesta correcta:", resp);
      } else {
        // si algo sale mal
      }
    } catch (error) {
      console.log("Error en la petición:", error);
      // si algo sale mal
    }
  }

  const ver = () => {
    console.log(objeto)
  }

  if(Object.keys(objeto).length === 0){
    return(<Login inicio={inicio} ></Login>)
  }else{
    return (
      <ThemeProvider theme={theme}>
        <Root theme={theme} >
          <Navbar setObjeto={setObjeto} accionCaja={accionCaja} AppNavbar={AppNavbar} MenuBoton={MenuBoton} CustomToolbar={CustomToolbar} Title={Title}/>
          <Paper sx={{ display: { md: 'block', xs: 'none' } }} >
            <Cajon open={true} variant="permanent" Drawere={Drawere} CustomToolbar={CustomToolbar} theme={theme} ></Cajon>
          </Paper>
          <Paper sx={{ display: { md: 'block', xs: 'none' } }} >
            <Cajon open={caja} variant="temporary" Drawere={Drawere} CustomToolbar={CustomToolbar} theme={theme} onClose={accionCaja}></Cajon>
          </Paper>
          < Content   >
            <CustomToolbar variant="dense" ></CustomToolbar>
            <Modal apertura={open} handleClose={handleClose} ></Modal>
            <Index ></Index>
          </Content >
        </Root>
      </ThemeProvider>
    );
  }
}
