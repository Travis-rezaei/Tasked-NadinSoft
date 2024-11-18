import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Profile from '../Pages/Profile'
import Weather from '../Pages/Weather'
import Todos from '../Pages/Todos'
import Dashboard from '../Pages/Dashboard'

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <Profile /> },
            { path: '/Todos', element: <Todos /> },
            { path: '/Weather', element: <Weather /> },
            { path: '/Dashboard', element: <Dashboard /> },
            { path: '*', element: <h1>NotFound</h1> }

        ]

    }
])
