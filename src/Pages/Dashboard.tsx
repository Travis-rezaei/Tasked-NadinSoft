import { Box, Typography } from '@mui/material';
import { useDate } from '../Hooks/useDate'

const Dashboard = () => {
    const { time, wish, user } = useDate()
    console.log(user);




    return (
        <Box component='div' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <Typography variant='h2'>{time}</Typography>
            <Typography variant='h4'>{wish}{user}</Typography>
        </Box>
    )
}

export default Dashboard