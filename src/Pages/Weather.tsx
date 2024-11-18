import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useWeather } from '../Hooks/useWeather'
import { Typography } from '@mui/material';

const Weather = () => {
  const { register, handleSubmit, onSubmit, isLoading, errors, data } = useWeather()


  console.log(data);


  return (
    <Box component='div' sx={{ width: 1 / 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2 }}>
      <Box component='form' sx={{ display: 'flex', alignItems: 'center', gap: 1, height: '3rem' }} onSubmit={handleSubmit(onSubmit)} >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Slected Your City</InputLabel>
          <Select
            label="Slected Your City"
            sx={{ height: 1 }}
            {...register('Cityvalue', { required: 'Enter Your City' })}
          >
            <MenuItem value={'tehran'}>tehran</MenuItem>
            <MenuItem value={'karaj'}>karaj</MenuItem>
            <MenuItem value={'qom'}>qom</MenuItem>
            <MenuItem value={'kurdistan'}>kurdistan</MenuItem>
            <MenuItem value={'ardebil'}>ardebil</MenuItem>
            <MenuItem value={'tabriz'}>tabriz</MenuItem>
            <MenuItem value={'mashhad'}>mashhad</MenuItem>
            <MenuItem value={'semnan'}>semnan</MenuItem>
            <MenuItem value={'kerman'}>kerman</MenuItem>
            <MenuItem value={'isfahan'}>isfahan</MenuItem>
            <MenuItem value={'ahvaz'}>ahvaz</MenuItem>
            <MenuItem value={'lorestan'}>lorestan</MenuItem>
            <MenuItem value={'bandar abbas'}>bandar abbas</MenuItem>
            <MenuItem value={'mazandaran'}>mazandaran</MenuItem>
            <MenuItem value={'Sistan and Baluchestan'}>Sistan and Baluchestan</MenuItem>
            <MenuItem value={'golestan'}>golestan</MenuItem>
            <MenuItem value={'shiraz'}>shiraz</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" type='submit' sx={{ height: 1 }}>Submit</Button>
      </Box>
      {errors && <Typography variant='body1' sx={{ color: 'red' }}>Selected City</Typography>}

      {isLoading && <Typography variant='h6' sx={{ textAlign: 'center' }}>Loading...</Typography>}

      {data && <Box component='div' sx={(theme) => ({ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 1, background: theme.palette.grey[400], color: theme.palette.grey[900], borderRadius: 2, marginTop: 3 })}>
        <Box component='div' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <Typography variant='h6'>{data.name}</Typography>
          <Typography variant='body2'>{data.weather[0].description}</Typography>
        </Box>
        <Box component='div' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
          <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="temperature"></img>
          <Typography variant='body2'>{data.main.temp}</Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <Typography variant='body2'>min: {data.main.temp_min}</Typography>
          <Typography variant='body2'>max: {data.main.temp_max}</Typography>
        </Box>


      </Box>}
    </Box >
  )
}

export default Weather;