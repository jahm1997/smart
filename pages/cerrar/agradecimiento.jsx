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
        This is a success alert — check it out!
        </Alert>
    </Container>
  )
}

export default Agradecimiento