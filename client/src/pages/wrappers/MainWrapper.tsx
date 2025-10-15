import { Navbar } from "../../components/layout/Navbar";
import { Sidebar } from "../../components/layout/Sidebar";


import { Outlet } from 'react-router'

// interface IMainWrapperProps {
//     children: React
// }

export const MainWrapper = () => {
    return (
        <div className="flex flex-col h-full">
            <Navbar />
            <div className="flex flex-1">
                <section className="sticky top-0 h-[calc(100vh)]">
                    <Sidebar />
                </section>
                <div className="architect_vector_content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
