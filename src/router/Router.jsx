import { createBrowserRouter } from "react-router-dom"
import Root from "../root/Root"
import Home from "../pages/Home"


const router = createBrowserRouter([

    {path: '/', element: <Root/> , children:[

        {path:'/', element: <Home/>}
    ]}
])


export default router ;