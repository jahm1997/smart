import LoginIcon from '@mui/icons-material/Login';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';

// import { useUser } from '@auth0/nextjs-auth0/client';

const Login = ({inicio }) => {
  
//   const { user } = useUser();
//   user && console.log("Este es usuario de google")

    const imageUrl = 'https://media.licdn.com/dms/image/D4E35AQHx-vyDrt5V3g/profile-framedphoto-shrink_200_200/0/1689807959697?e=1690905600&v=beta&t=F9u2Z6dPV3JShZdSPOxKYVrTkMLmfY2njs5sS0rKwEw';
    const router = useRouter();
    
    const [parametro, setParametro] = useState({
        email:"",
        password:""
    })
    const [error, setError] = useState({
        error:false,
        menssage: ""
    })

    const validateEmail = (email) =>{
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(parametro.email)
    }


    const hableSubmit = (e) => {
        e.preventDefault();
        if(validateEmail(parametro.email) ){
            setError({
                error:false,
                menssage: ""
            })
        }else{
            return setError({
                error:true,
                menssage: "Email Incorrecto"
            })
        }
        inicio(parametro)
    }

    const registro = () =>{
        router.push('/cerrar/registro');
    }


    return (
        <Container sx={{alignItems:"center", marginTop:"3%"}} >
            <Grid container spacing={2} textAlign="center" sx={{ height:"100%"}}  >
                <Grid
                    item
                    md={6}
                    sx={{
                        // backgroundColor: 'green',
                        display: { [`@media (max-width:900px)`]: {
                            display:"none"
                            
                        }, },
                }}>
                    <Box sx={{marginLeft:-2}} >
                        {/* <Image src={imageUrl} width="450" height="450" alt="Logo SmartInfo" /> */}
                    </Box>
                </Grid>
                
                <Grid 
                    item
                    xs={12}
                    md={6}
                    sx={{
                        // backgroundColor: "red",
                        // width:{
                        //     xs: '100%',
                        //     sm: 'auto' 
                        // },
                        height:"auto",
                        alignItems:"center",
                        textAlign:"center",
                        justify:"center"
                        }} >
                    <Typography variant='h4' sx={{ marginBottom: "5%" }}> Iniciar Sesion</Typography>
                    <Typography variant='h5' > Que alegria tenerte de vuelta por acá </Typography>
                    <Box width="100%" 
                        component="form" 
                        onSubmit={hableSubmit} 
                        // sx={{backgroundColor: "orange"}}  
                        >
                        <TextField
                            label="Email"
                            type='email'
                            variant='outlined'
                            fullWidth={true}
                            helperText={error.menssage}
                            error={error.error}
                            value={parametro.email}
                            onChange={(event) => setParametro({...parametro, email: event.target.value})}
                            required
                            sx={{  
                                margin:"2%",
                                width:"70%",
                                marginTop:"10%",
                                }}
                        ></TextField>
                        <TextField
                            sx={{ 
                                margin:"2%",
                                width:"70%",
                                }}
                            label="Password"
                            type='password'
                            variant='outlined'
                            fullWidth={true}
                            // helperText={error.menssage}
                            // error={error.error}
                            value={parametro.password}
                            onChange={(event) => setParametro({...parametro, password: event.target.value})}
                            required

                        ></TextField>
                        <br />
                        <Button type='submit' variant='contained' sx={{ margin:"2%"}} > Iniciar Sesion  <LoginIcon/> </Button>
                    </Box>
                    <Typography color={'CaptionText'} sx={{padding: 2}} >
                        ¿ Aun no tienes una cuenta ?
                    </Typography>
                    <Typography color={'CaptionText'} >
                        Conecta con nosotros!
                    </Typography>
                    
                    <Button sx={{padding: 2}} onClick={registro} >Registrarse <CoPresentIcon sx={{marginLeft: 2}} /> </Button>

                    <Typography color={'CaptionText'} sx={{padding: 2}} >
                        ¡Tambien puedes conectar con terceros!
                    </Typography>
                    
                    {/* <a sx={{marginBottom:5, padding:1, border:2, borderRadius:5, }} component="button" variant='h5' href="/api/auth/login">Iniciar sesión con google</a> */}
                </Grid> 
            </Grid>
        </Container>

  )
}

export default Login