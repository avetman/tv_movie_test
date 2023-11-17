import {useState} from 'react';
import styles from './mainManu.module.css'
import {iconData} from "../../helpers";

const MainMenu = () => {
    const [selectedItem, setSelectedItem] = useState(2);
    const [isHovered, setIsHovered] = useState(false);
    const handleItemClick = (id) => {
        setSelectedItem(id);
    };
    return (
        <div
            className={`${styles.MainMenu} ${isHovered ? styles.expanded : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="MenuIcons">
                {iconData.map((icon) => (
                    <div
                        key={icon.id}
                        className={`${styles.menuIcon} ${selectedItem === icon.id ? styles.active : ''}`}
                        onClick={() => handleItemClick(icon.id)}
                    >
                        <img src={icon.url} alt={icon.name} />
                        <span>{icon.name}</span>
                    </div>
                ))}
            </div>

            {isHovered && (
                <div className={styles.bottomMenu}>
                    <p>Language</p>
                    <p>Get Help</p>
                    <p>Exit</p>
                </div>
            )}

        </div>
    )
}

export default MainMenu;
