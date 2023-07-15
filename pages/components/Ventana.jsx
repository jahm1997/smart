import { Box, Button, Modal,  TextField, Typography } from "@mui/material";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from "react";
import axios from "axios";

export default function Ventana({objeto, abierto, handleCerrar}) {

    const [user,setUser]=useState({
        id:objeto?.id,
        name:objeto?.name,
        lastName:objeto?.lastName,
        email:objeto?.email,
        password:""
    })

    const actualizar = async (data) => {
        try {
          const res = await axios.put( `process.env.NEXT_PUBLIC_API/api/user` , data);
          if (res.status === 200) {
            const resp = res.data;
            alert(resp.message)
            handleCerrar()
          } else {
          }
        } catch (error) {
          console.log("Error en la petición:", error);
        }
      }


    const hableSubmit = (e) => {
        e.preventDefault();
        actualizar(user)

    }

    return(
        <>
            <Modal
                sx={{
                    display: "flex",
                    width: "auto",
                    textAlign: "center",
                    height: 500,
                    alignItems: "center",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    // backgroundColor: "HighlightText",
                    // backgroundColor: "ghostwhite",
                    // backgroundColor: "lightblue",
                    backgroundColor: "orchid",
                    boxShadow: 30,
                    p: 6,

                }}

                open={abierto}
                handleClose={handleCerrar}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <Typography style={{ color: 'white' }} variant="h4" >Cambiar datos de perfil</Typography>
                    <Box component="form" onSubmit={hableSubmit} >
                        <TextField
                            
                            label="Nombre"
                            type='text'
                            variant='standard'
                            fullWidth={true}
                            value={user.name}
                            onChange={(event) => setUser({...user, name: event.target.value})}
                            required
                            style={{ color: 'white' }}
                            sx={{ 
                                margin:"2%",
                                width:"70%",
                                }}
                        
                        ></TextField>
                        <TextField
                            sx={{ 
                                margin:"2%",
                                width:"70%",
                                }}
                            label="Apellidos"
                            type='text'
                            variant='standard'
                            fullWidth={true}
                            value={user.lastName}
                            onChange={(event) => setUser({...user, lastName: event.target.value})}
                            required

                        ></TextField>
                        <TextField
                            sx={{ 
                                margin:"2%",
                                width:"70%",
                                }}
                            label="Email"
                            type='email'
                            variant='standard'
                            fullWidth={true}
                            value={user.email}
                            onChange={(event) => setUser({...user, email: event.target.value})}
                            required

                        ></TextField>
                        <TextField
                            sx={{ 
                                margin:"2%",
                                width:"70%",
                                }}
                            label="Password"
                            type='password'
                            variant='standard'
                            fullWidth={true}
                            value={user.password}
                            onChange={(event) => setUser({...user, password: event.target.value})}
                            required

                        ></TextField>
                        <Button type='submit' variant="contained" sx={{ marginTop: 2}} color="primary" size="large" > <AddReactionIcon/>  Actualizar Datos ! </Button>
                        <Button onClick={handleCerrar} variant="contained" sx={{ marginTop: 2, marginLeft: "3%"}} color="primary" size="large" > <ChevronLeftIcon /> <ChevronLeftIcon sx={{margin:-2}} /> <ChevronLeftIcon/> Atras </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}