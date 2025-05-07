import React, { useEffect, useState } from 'react';

import { Container, Typography, Card, CardContent, CardMedia, CircularProgress, Alert } from '@mui/material';

import { Grid2 } from '@mui/material';

import { fetchCars } from '../../api/carsAPI';

import { Car } from '../../types/types';

import { useAuth } from '../../AuthContext';

import { Link as MuiLink } from '@mui/material';

import { Link as RouterLink } from 'react-router';





import LoginPage from '../LoginPage/LoginPage';

import SingleCarPage from '../../components/carsPage/SingleCarPage';



const HomePage: React.FC = () => {
 const [cars, setCars] = useState<Car[]>([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);


 const {logoutUser, user} = useAuth()


 useEffect(() => {
 const loadCars = async () => {
  try {
   const data = await fetchCars();
   setCars(data.slice(0, 20));
   setLoading(false);
  } catch (err: any) {
   setError(err.message || 'Failed to fetch cars.');
   setLoading(false);
  }
 };


 loadCars();
 }, []);


 if (loading) {
 return (
  <Container sx={{ mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
   <CircularProgress />
  </Container>
 );
 }


 if (error) {
 return (
  <Container sx={{ mt: 4 }}>
   <Alert severity="error">{error}</Alert>
  </Container>
 );
 }


 return (
 <Container sx={{ mt: 4 }}>
  <Typography variant="h4" component="h2" gutterBottom>
   Featured Cars
  </Typography>
  <Grid2 container spacing={3}>
   {cars.map((car) => (
    <Grid2 key={car._id} sx={{ width: 'calc(50% - 12px)' }}>
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {user ? (<MuiLink
      component={RouterLink}
      to={`/rent/car-renting/${car._id}`}
      sx={{ textDecoration: 'none', color: 'inherit' }}
     >
      {car.image && (
       <CardMedia
       component="img"
       sx={{
        height: 300,
        objectFit: 'cover',
        cursor: 'pointer',
       }}
       image={car.image}
       alt={car.model}
       />
      )}
     </MuiLink>) : (
      <MuiLink
      component={RouterLink}
      to={"/home/login"}
      sx={{ textDecoration: 'none', color: 'inherit' }}
     >
      {car.image && (
       <CardMedia
       component="img"
       sx={{
        height: 300,
        objectFit: 'contain',
        cursor: 'pointer',
       }}
       image={car.image}
       alt={car.model}
       />
      )}
     </MuiLink>
     ) }
    
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h6" component="h3">
       {car.brand} {car.model} ({car.carMakeDate})
      </Typography>
      {user ? (
       <Typography>
       Price: ${car.price}
       </Typography>
      ) : (
       <Typography>
       <MuiLink component={RouterLink} to="/home/login" underline="hover">
        Login to see prices
       </MuiLink>
       </Typography>
      )}
     </CardContent>
    </Card>
    </Grid2>
   ))}
  </Grid2>
 </Container>
 );

};



export default HomePage;