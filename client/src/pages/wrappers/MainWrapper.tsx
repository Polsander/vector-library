import { Navbar } from "../../components/layout/Navbar"


import { Outlet } from 'react-router'

// interface IMainWrapperProps {
//     children: React
// }

export const MainWrapper = () => {
    return (
        <div>
            <Navbar />
            <div className="architect_vector_content">
                <Outlet />
            </div>
        </div>
    )
}
