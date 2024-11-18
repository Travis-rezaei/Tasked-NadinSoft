import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import { useProfile } from '../Hooks/useProfile'
import { Typography } from '@mui/material';

const Profile = () => {
  const { register, handleSubmit, onSubmit, errors } = useProfile()

  return (
    <Box component='form' sx={{ maxWidth: 250, display: 'grid', gap: 1 }} onSubmit={handleSubmit(onSubmit)}>
      <TextField label="Enter Name" variant="outlined" {...register('Name', { required: 'Username is required' })} fullWidth />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Mode</InputLabel>
        <Select
          label="Mode"
          {...register('Mode')}
        >
          <MenuItem value='false'>light</MenuItem>
          <MenuItem value='true'>dark</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Local</InputLabel>
        <Select
          label="Local"
          {...register('Language', { required: 'Language is required' })}
        >
          <MenuItem value={'fa'}>fa-IR</MenuItem>
          <MenuItem value={'en'}>en-US</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" type='submit'>Save</Button>
      {errors && <Typography variant='body1' sx={{ color: 'red' }}>Complete the information</Typography>}
    </Box>
  )
}

export default Profile;