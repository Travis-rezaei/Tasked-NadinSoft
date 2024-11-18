import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider, useColorScheme } from "@mui/material/styles";
import { theme } from "./themes/theme";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Components/Navbar";
import { StorageGetItem, StorageSetItem } from './Components/webStorage'
import { useEffect, useState, createContext } from "react";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

export const Toggle = createContext<boolean>(false)
export const SetToggle = createContext<any>(null)

function App() {
  const [mode, setMode] = useState<boolean>(false)
  const [toggle, settoggle] = useState<boolean>(false)
  const Client = new QueryClient()

  useEffect(() => {
    const GetItem = StorageGetItem('ProfileInformations')
    StorageSetItem('mui-mode', 'system')
    if (GetItem) {
      const parseItem = JSON.parse(GetItem)
      setMode(JSON.parse(parseItem.Mode))
    }

  }, [toggle])




  const themes = createTheme({
    colorSchemes: {
      dark: mode,
    },
    ...theme
  })


  return (
    <ThemeProvider theme={themes} disableTransitionOnChange >
      <Toggle.Provider value={toggle}>
        <SetToggle.Provider value={settoggle}>
          <CssBaseline />
          <QueryClientProvider client={Client}>
            <Navbar />
            <Box
              component="main"
              sx={{
                maxwidth: 1,
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: '0 .5rem'
              }}
            >
              <Outlet />
            </Box>
          </QueryClientProvider>
        </SetToggle.Provider>
      </Toggle.Provider>
    </ThemeProvider>
  );
}

export default App;
