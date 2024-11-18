import { createTheme } from '@mui/material/styles'
import Vazir from '../fonts/Vazir-Light.ttf'



export const theme = createTheme({

    palette: {
        primary: {
            main: '#64b5f6',
            dark: '#42a5f5',
            contrastText: '#fff',
        },
        grey: {
            "100": '#fafafa',
            "400": '#bdbdbd',
            "900": '#212121'
        },


    },
    typography: {
        fontFamily: 'Vazir',
        fontSize: 16,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: (theme) => ({
                '@font-face': {
                    fontFamily: 'Vazir',
                    src: `url(${Vazir})`
                },
                body: {
                    fontFamily: 'Vazir',
                }
            }),

        },
        MuiButton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    fontWeight: 600,
                    '&:hover': {
                        background: theme.palette.primary.light,
                        color: theme.palette.grey[900]
                    }
                })
            }
        },


    }
})