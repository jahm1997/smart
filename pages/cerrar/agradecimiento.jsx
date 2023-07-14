import { Alert, Button, Container } from '@mui/material'
import { useRouter } from 'next/router';
import React from 'react'

const Agradecimiento = () => {

    const router = useRouter();

    const inicio = () =>{
        router.push('/');
    }

  return (
    <Container sx={{
        textAlign: 'center',
        justifyContent: 'center',
        alignItems:"center",
        width: "100%",
        height: "100%",
        backgroundColor:"#FFFFFF",
        marginTop: "20%"
    }} >
        <Alert
        action={
            <Button onClick={inicio} color="inherit" size="small">
            Iniciar sesion
            </Button>
        }
        >
        ¡Haz Creado una cuenta con nosotros! que maravillosa elección, por favor inicia sesión y usa de inmediato la app.
        </Alert>
    </Container>
  )
}

export default Agradecimiento