import { Box, Container, Grid, TextField, Typography, Toolbar } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import React, { useState } from 'react'
import axios from 'axios';
import Image from 'next/image';

const Index = () => {
  
  const[city, setCity]=useState("")
  const[loading,setLoading] = useState(false)
  const[error,setError] = useState({
    error:false,
    message:""
  })
  const[estado, setEstado]=useState({
    city:"",
    country:"",
    temp:"",
    condition:"",
    icon:"",
    conditionText:"",
  })
  const submit= async (e) =>{
    e.preventDefault()
    setLoading(true)
    try {
      if(!city.trim()) throw {message:"Por favor el campo Ciudad es obligatorio"}
      const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=63cc260de670441e89d14341231407&q=${city}&aqi=no`);
      if (res.status === 200) {
        const resp = res.data;
        setEstado({
          city:resp.location.name,
          country:resp.location.country,
          temp:resp.current.temp_c,
          condition:resp.current.condition.code,
          icon:resp.current.condition.icon,
          conditionText:resp.current.condition.text,
        })
        console.log("Respuesta correcta:", resp)}
    } catch (error) {
      setError({
        error:true,
        message:error.message
      })
    }finally{
      setLoading(false)
    }


  }

  return (
    <Container
      maxWidth="xs"
      sx={{ align:'center', textAlign:"center", marginTop:"5%"}}

    >
      <Toolbar></Toolbar>

      <Typography
        variant='h3'
        component="h1"
        align='center'
        gutterBottom
      >
        Pronostico meteorologico
        </Typography>          
      <Box
        sx={{display:"grid", gap:"2"}}
        component="form"
        autoComplete='false'
        onSubmit={submit} 
      > 
        <TextField
          id="city"
          label="Ciudad"
          variant='outlined'
          size='small'
          required
          fullWidth={true}
          value={city}
          onChange={(e)=> setCity(e.target.value)}
          error={error.error}
          helperText={error.message}
        >

        </TextField>
        <LoadingButton
          sx={{
            marginTop: "2%"
          }}
          type="submit"
          variant="contained"
          loading={loading}
          loadingIndicator="Cargando..."
        >Buscar</LoadingButton>
      </Box>

          {estado.city && (
            <Box
              sx={{
                marginTop:2,
                display: "grid",
                gap: 2,
                justifyItems:"center",

                
              }}
            >
                <Typography  
                  variant='h4'
                  component="h2"
                >
                  {estado.city}, {" " + estado.country}
                </Typography>
                <Image
                  width="100"
                  height="100"
                  alt={estado.conditionText}
                  src={`https:${estado.icon}`}
                  sx={{
                    margin:"0 auto",
                    
                    
                  }}
                  />
                  <Typography variant='h3' component="h2" >
                    {estado.temp} °C
                  </Typography>
                  <Typography variant='h4' component="h3" >
                    {estado.conditionText}
                  </Typography>
            </Box>
          )}

      <Typography
        textAlign="center"
        sx={{marginTop:2, fontSize: "10px"}}
      >
        Powered by: {" "}
          <a href="https://www.weatherapi.com/" title='Weather Api'>
            WeatherAPI.com
          </a>
      </Typography>

    </Container>
  )
}

export default Index