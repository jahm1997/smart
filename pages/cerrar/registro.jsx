import MoodIcon from '@mui/icons-material/Mood';
import InfoIcon from '@mui/icons-material/Info';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box, Button, Container, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, Link, ListSubheader, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';


const Registro = (inicio) => {

    const router = useRouter();

    const [image] = useState([
        {id:1,url: "https://www.smartinfobusiness.com/imagenes/team/gabrial-villan.png", nombre: "Gabriel Villan", ocupacion: "Coordinador de Social Media"},
        {id:2,url: "https://www.smartinfobusiness.com/imagenes/team/gucci.png", nombre: "Gustavo Rojas ", ocupacion: "Ingeniero Senior I+D"},
        {id:3,url: "https://www.smartinfobusiness.com/imagenes/team/hector4.png", nombre:"Hector Díaz C ", ocupacion: "Gerente"},
        {id:4,url: "https://www.smartinfobusiness.com/imagenes/team/jhoana3.png", nombre:"Johanna Pantoja ", ocupacion: "Coordinador Administrativo"},
        {id:5,url: "https://www.smartinfobusiness.com/imagenes/team/luis-yepes.png", nombre:"Luis Yepes ", ocupacion: "Coordinador de Infraestructura"},
        {id:6,url: "https://www.smartinfobusiness.com/imagenes/team/miguel.png", nombre:"Miguel Angel Beleño ", ocupacion: "Coordinador Diseño Web"},
        {id:7,url: "https://www.smartinfobusiness.com/imagenes/team/silvena.png", nombre:"Sylvanna Zuluaga ", ocupacion: "Líder de Tráfico"}
    ])
  
    const [user, setUser] = useState({
        name:"",
        lastName:"",
        email:"",
        password:""
    })
    const [error, setError] = useState({
        error:false,
        menssage: ""
    })

    const validateEmail = (email) =>{
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(user.email)
    }

    const registro = async (data) => {
        try {
          const res = await axios.post(`${process.env.NEXT_PUBLIC_DEPLOY}/user` , data);
          if (res.status === 200 || res.status === 201) {
            const resp = res.data;
            console.log(resp)
            router.push('/cerrar/agradecimiento');
          } else {
          }
        } catch (error) {
          console.log("Error en la petición:", error);
        }
        // alert("no es posible registrarse ahora")
      }


    const hableSubmit = (e) => {
        e.preventDefault();
        if(validateEmail(user.email) ){
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
        registro(user)
    }

    const atras = () => {
        router.push('/');
    }

    return (

        <Container sx={{alignItems:"center", marginTop:"3%"}}>
        <Grid container spacing={2} textAlign="center" sx={{ height:"100%"}}  >
            <Grid
                item
                xs={6}
                sx={{
                    // backgroundColor: 'green',
                    display: { xs: 'none', lg: 'block' },
            }}>
                <Box>
                <ImageList sx={{ width: 550, height: 450}}>
                    <ImageListItem   key="Subheader" cols={2}>
                    <Box component="div" sx={{ typography: 'body1', fontFamily: '-moz-initial' }}>
                        Algunos del equipo smartinfo... 
                    </Box >
                    </ImageListItem>
                        {image.map((item) => (
                            <ImageListItem key={item.id}>
                            <Image
                                width="170"
                                height="170"
                                src={item.url}
                                alt={item.nombre}
                            />
                            <ImageListItemBar
                                title={item.nombre}
                                subtitle={item.ocupacion}
                                actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <Link href="https://www.smartinfobusiness.com/quienes-somos" underline="none">
                                        <InfoIcon />
                                    </Link>
                                </IconButton>
                                }
                            />
                    </ImageListItem>
                    ))}
                    </ImageList>
                </Box>
            </Grid>
            
            <Grid 
                item
                xs={12}
                sm={6}
                sx={{
                    // backgroundColor: "red",
                    width:{
                        xs: '100%',
                        sm: 'auto' 
                    },
                    alignItems:"center",
                    textAlign:"center",
                    justify:"center"
                    }} >
                <h1>¡ Registrate !</h1>
                <Typography>
                    Estás tomando la mejor opcion al registrarte en nuestra plataforma!
                    
                </Typography>
                <Typography>
                    Rellena nuestra información y haz parte de nuestro equipo

                </Typography>
                <Box component="form" onSubmit={hableSubmit} >
                    <TextField
                        label="Nombre"
                        type='text'
                        variant='outlined'
                        fullWidth={true}
                        helperText={error.menssage}
                        error={error.error}
                        value={user.name}
                        onChange={(event) => setUser({...user, name: event.target.value})}
                        required
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
                        variant='outlined'
                        fullWidth={true}
                        // helperText={error.menssage}
                        // error={error.error}
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
                        variant='outlined'
                        fullWidth={true}
                        // helperText={error.menssage}
                        // error={error.error}
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
                        variant='outlined'
                        fullWidth={true}
                        // helperText={error.menssage}
                        // error={error.error}
                        value={user.password}
                        onChange={(event) => setUser({...user, password: event.target.value})}
                        required

                    ></TextField>
                    <Button type='submit' variant="contained" sx={{ marginTop: 2}} color="primary" size="large" > <MoodIcon/>  Registrame ! </Button>
                    <Button onClick={atras} variant="contained" sx={{ marginTop: 2, marginLeft: "3%"}} color="primary" size="large" > <ChevronLeftIcon /> <ChevronLeftIcon sx={{margin:-2}} /> <ChevronLeftIcon/> Atras </Button>
                </Box>
                
            </Grid>
        </Grid>
    </Container>
  )
}

export default Registro


