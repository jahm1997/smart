import {
   IconButton,
   styled,
   Toolbar,
   Paper,
   Box,
   Grid
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

const Content = styled("div")(({ theme }) => ({
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

// import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
  
  // const { user, error, isLoading } = useUser();
  // user && console.log("Este es usuario de google")
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
      const res = await axios.post( `${process.env.NEXT_PUBLIC_DEPLOY}/user`, data);
        const resp = res.data;
        setObjeto(resp);
    } catch (error) {
      if(error){
        setFailed(!failed)
        }
    }
    // setObjeto({
    //     id:1,
    //     name:"Persona",
    //     lastName:" Aleatoria",
    //     email:"Oculto",
    // });
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
        <Grid container  justifyContent="center" >
            <Navbar setObjeto={setObjeto} accionCaja={accionCaja} MenuBoton={MenuBoton} />
            <Box component="div" item  sx={{ display: 'flex'}}>
              <Paper sx={{ display: { md: 'block', xs: 'none', } }} >
                <Cajon open={true} handleOpen={handleOpen} variant="permanent" handleAbrir={handleAbrir} ></Cajon>
              </Paper>
              <Paper sx={{ display: { md: 'block', xs: 'none' } }} >
                <Cajon open={caja} handleOpen={handleOpen} variant="temporary" onClose={accionCaja} handleAbrir={handleAbrir}></Cajon>
              </Paper>
              <Grid item xs={12} sx={{flexGrow: 1, display:"flex", justifyContent:"center"}} >
                <Toolbar variant="dense" ></Toolbar>
                <Modal objeto={objeto} abierto={abierto} handleCerrar={handleCerrar} ></Modal>
                  <Index  ></Index>
              </Grid>
            </Box>
        </Grid>
      </ThemeProvider>
    );
  }
}
