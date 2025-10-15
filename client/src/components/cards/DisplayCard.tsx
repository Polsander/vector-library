
import styles from "./DisplayCard.module.css";

export const DisplayCard = () => {
    return (
        <div className={`p-7 m-4 shadow-md ${styles.display}`}>
            <img className="flex text-center items-center h-33 w-40 justify-center items-center" src="/" alt="Image of Vector"/>
            <h4 className="text-text font-strong flex justify-center">Title</h4>
        </div>
    )
};
