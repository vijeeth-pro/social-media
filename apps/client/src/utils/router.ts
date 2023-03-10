import { createBrowserRouter } from "react-router-dom";


const auth = createBrowserRouter([
    {
        path: '/', 
        element: <Login />
    }
])