import {
   AppBar,
   Drawer,
   IconButton,
   Typography,
   styled,
   Toolbar,
   Paper,
   useMediaQuery,
   Box
  } 
   from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Modal from "./components/Ventana"
import Navbar from "./components/Navbar";
import Cajon from "./components/Cajon";
import Index from "./components/Index";
import Login from "./components/Login";
import axios from "axios"
import  Aviso  from "./components/aviso"

// const CustomToolbar = styled(Toolbar)(({ theme }) => ({
//   ...theme.mixins.toolbar
// }));
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



export default function Home() {
  
  
  const theme = createTheme();
  
  const [open, setOpen] = useState(false);
  const [caja, setCaja] = useState(false);
  const [abierto, setAbierto] = useState(false);
  const [objeto, setObjeto] = useState({});
  const [failed,setFailed] = useState(false)

  const handleClose = () => {
    setOpen(!open)
  }
  const handleOpen = () => {
    setOpen(!open)
  }
  const handleAbrir = () => {
    setAbierto(!abierto)
  }
  const handleCerrar = () => {
    setAbierto(!abierto)
  }
  const handlefailopen = () => {
    setFailed(!failed)
  }
  const handlefailclose = () => {
    setFailed(!failed)
  }

  const accionCaja = () => {
    setCaja(!caja)
  }
  

  const inicio = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/user", data);
        const resp = res.data;
        console.log(resp);
        setObjeto(resp);
    } catch (error) {
      if(error){
        setFailed(!failed)
        }
    }
  }


  if(Object.keys(objeto).length === 0){
    return(
      <>
        <Login inicio={inicio} ></Login>
        <Aviso failed={failed} handlefailclose={handlefailclose} ></Aviso>
      </>
    )
  }else{
    return (
      <ThemeProvider theme={theme}>
        <Box component="div" sx={{ display: 'flex'}}>
          <Navbar setObjeto={setObjeto} accionCaja={accionCaja} MenuBoton={MenuBoton} />
          <Paper sx={{ display: { md: 'block', xs: 'none' } }} >
            <Cajon open={true} handleOpen={handleOpen} variant="permanent" handleAbrir={handleAbrir} ></Cajon>
          </Paper>
          <Paper sx={{ display: { md: 'block', xs: 'none' } }} >
            <Cajon open={caja} handleOpen={handleOpen} variant="temporary" onClose={accionCaja} handleAbrir={handleAbrir}></Cajon>
          </Paper>
          < Content   >
            <Toolbar variant="dense" ></Toolbar>
            <Modal objeto={objeto} abierto={abierto} handleCerrar={handleCerrar} ></Modal>
            <Index ></Index>
          </Content >
        </Box>
      </ThemeProvider>
    );
  }
}
