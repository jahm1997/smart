import LoginIcon from '@mui/icons-material/Login';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';


const Login = ({inicio }) => {

    const imageUrl = 'https://www.smartinfobusiness.com/recursos/imagenes/logo-smartinfo.svg';
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
                        <Image src={imageUrl} width="450" height="450" alt="Logo SmartInfo" />
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
                    </Box>
                        <Button type='submit' variant='contained' sx={{ margin:"2%"}} > Iniciar Sesion  <LoginIcon/> </Button>
                    <Typography color={'CaptionText'} sx={{padding: 2}} >
                        ¿ Aun no tienes una cuenta ?
                    </Typography>
                    <Typography color={'CaptionText'} >
                        Conecta con nosotros!
                        
                    </Typography>
                    
                    <Button sx={{padding: 2}} onClick={registro} >Registrarse <CoPresentIcon sx={{marginLeft: 2}} /> </Button>
                </Grid>
            </Grid>
        </Container>

  )
}

export default Login