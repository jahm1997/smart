import { Box, Button, Modal,  TextField, Typography } from "@mui/material";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from "react";
import axios from "axios";

export default function Ventana({objeto, abierto, handleCerrar}) {
    console.log(objeto)
    const [user,setUser]=useState({
        id:objeto?.id,
        name:objeto?.name,
        lastName:objeto?.lastName,
        email:objeto?.email,
        password:""
    })
    // const [user,setUser]=useState({
    //     id:1,
    //     name:"Persona",
    //     lastName:" Aleatoria",
    //     email:"Oculto",
    // })

    const actualizar = async (data) => {
        try {
          const res = await axios.patch( `${process.env.NEXT_PUBLIC_DEPLOY}/user` , data);
          if (res.status === 200 || res.status === 201) {
            alert(res.data)
            handleCerrar()
            } 
        } catch (error) {
            console.log("Error en la petición:", error);
        }
        // handleCerrar()
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
                    backgroundColor: "lightblue",
                    // backgroundColor: "orchid",
                    boxShadow: 30,
                    p: 6,
                    [`@media (min-width:1000px)`]: {
                        width: "md",
                        marginLeft: '110px',
                        
                    },
                    [`@media (max-width:640px)`]: {
                        maxWidth: '100%',
                        height:550,
                        top: "27%",
                        left: "30%",
                        transform: "translate(-20%, -20%)",
                    },
                    [`@media (max-width:445px)`]: {
                        maxWidth: '100%',
                        width: "100",
                        top: "27%",
                        left: "20%",
                        transform: "translate(-20%, -20%)",
                        p: 2,
                    }


                }}

                open={abierto}
                handleClose={handleCerrar}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <Typography style={{ color: 'white' }} sx={{ fontSize:"35px" , 
                    [`@media (max-width:640px)`]: {
                         fontSize:"28px"
                            },
                            [`@media (max-width:445px)`]: {
                                fontSize:"20px"
                                   }}} >Cambiar datos de perfil</Typography>
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
                                width:"90%",
                                // [`@media (max-width:640px)`]: {
                                //     margin:"2%",
                                //     width:"50%",
                                //        },
                                //        [`@media (max-width:445px)`]: {
                                //             margin:"2%",
                                //             width:"30%",
                                //               }
                                }}
                        
                        ></TextField>
                        <TextField
                            sx={{ 
                                margin:"2%",
                                width:"90%",
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
                                width:"90%",
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
                                width:"90%",
                                }}
                            label="Password"
                            type='password'
                            variant='standard'
                            fullWidth={true}
                            value={user.password}
                            onChange={(event) => setUser({...user, password: event.target.value})}
                            required

                        ></TextField>
                        <Button type='submit' variant="contained" sx={{ marginTop: 2,[`@media (max-width:445px)`]: { fontSize:"small"
                            }}} color="primary" size="large" > <AddReactionIcon/>  Actualizar Datos ! </Button>
                        <Button onClick={handleCerrar} variant="contained" sx={{ marginTop: 2, marginLeft: "3%",[`@media (max-width:445px)`]: { fontSize:"small"
                            }}} color="primary" size="large" > <ChevronLeftIcon /> <ChevronLeftIcon sx={{margin:-2}} /> <ChevronLeftIcon/> Atras </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}