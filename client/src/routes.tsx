import { MainWrapper } from "./pages/wrappers/MainWrapper";
import { Landing } from "./pages/landing/Landing";


const Routes = [
    {
        path: '/',
        element: <MainWrapper/>,
        children: [
            {
                path: '/',
                element: <Landing/>
            }
        ]
    }, 
]

export default Routes;