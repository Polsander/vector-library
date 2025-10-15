import { useState } from 'react'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {

    const [hideSidebar, setHideSidebar] = useState(false);


    const handleToggleSidebar = () => {
        setHideSidebar(!hideSidebar)
    };

    //TODO: @Oliver - The mobile responsiveness of the sidebar needs to be eliminated. Keep it closed and if the arrow is pressed, a full screen modal comes instead with
    //TODO: filter options.

    return (
        <div className={` h-full flex`}>
            <div className={`pt-6 pl-6 ${styles.sidebar} ${hideSidebar ? styles.collapsed : ''}`}>
                <h3 className='font-bold pb-3 text-text'>Category</h3>
                <ul className={styles.categories}>
                    <li>Furniture</li>
                    <li>Vehicles</li>
                    <li>Accessories</li>
                    <li>Structural</li>
                </ul>
            </div>

            <div className='flex flex-col bg-side-bg max-w-3'>
                <div className={`h-45/100 border-r-1 border-outline`}>
                </div>
                <div className={`h-10/100 ${styles.mid_section}`} onClick={handleToggleSidebar} onDrag={handleToggleSidebar}>
                    {!hideSidebar ?
                        <AiFillCaretLeft className='text-text'/> :
                        <AiFillCaretRight className='text-text'/>
                    }
                </div>
                <div className={`h-45/100 border-r-1 border-outline`}>
                </div>
            </div>

        </div>
    )
}
