import { useRef, useState, useEffect } from "react";
import { Navbar } from "../../components/layout/Navbar";
import { Sidebar } from "../../components/layout/Sidebar";


import { Outlet } from 'react-router'

// interface IMainWrapperProps {
//     children: React
// }

export const MainWrapper = () => {

    const navbarRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [sidebarHeight, setSidebarHeight] = useState("80vh");

    useEffect(() => {
        const updateHeight = () => {
            const navbarHeight = navbarRef.current?.offsetHeight || 0;
            const contentHeight = contentRef.current?.scrollHeight || 0;
            const viewportHeight = window.innerHeight;

            if (contentHeight > viewportHeight) {
                setSidebarHeight("100vh"); // content overflowing
            } else {
                setSidebarHeight(`calc(100vh - ${navbarHeight}px)`); // content fits
            }
        };

        // Initial calculation
        updateHeight();

        // Listen to window resize
        window.addEventListener("resize", updateHeight);

        // Observe content height changes
        let observer: ResizeObserver | null = null;
        if (contentRef.current) {
            observer = new ResizeObserver(() => updateHeight());
            observer.observe(contentRef.current);
        }

        return () => {
            window.removeEventListener("resize", updateHeight);
            if (observer && contentRef.current) observer.unobserve(contentRef.current);
        };
    }, []);

    return (
        <div className="flex flex-col h-full">
            <Navbar ref={navbarRef} />
            <div className="flex flex-1">
                <section
                    className=" sticky top-0"
                    style={{ height: sidebarHeight, position: "sticky", top: 0 }}>
                    <Sidebar />
                </section>
                <div ref={contentRef} className="architect_vector_content">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
