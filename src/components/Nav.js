import React, {useState} from 'react';
import "../styles.css";
import {GiHamburgerMenu} from 'react-icons/gi';

export default function Navbar() {
    const [showMobileNavItems, setShowMobileNavItems] = useState(false);
    const [activeNav, setActiveNav] = useState({
        all: true,
        breakfast: false,
        lunch: false,
        eveningSnacks: false,
        dinner: false,
    })

    const handleHamburgerClick = () => {
        setShowMobileNavItems(prev => !prev);
    }

    const handleNavItemClick = (e) => {
        setActiveNav(prevActiveNav => {
            return {
                all: false,
                breakfast: false,
                lunch: false,
                eveningSnacks: false,
                dinner: false,
                [e.target.id]: true,
            }
        })
    }

   
    return(
        <nav className="nav-bar">
            <div className="nav-bar-logo"><span>B</span>appa's <span>r</span>estaurant</div>
            <ul className={showMobileNavItems? "mobile-nav-items" : "nav-items"}>
                <li onClick={handleNavItemClick} className={activeNav.all ? "active-nav": ""} id="all">All</li>
                <li onClick={handleNavItemClick} className={activeNav.breakfast ? "active-nav": ""} id="breakfast">Breakfast</li>
                <li onClick={handleNavItemClick} className={activeNav.lunch ? "active-nav": ""} id="lunch">Lunch</li>
                <li onClick={handleNavItemClick} className={activeNav.eveningSnacks ? "active-nav": ""} id="eveningSnacks">Evening snacks</li>
                <li onClick={handleNavItemClick} className={activeNav.dinner ? "active-nav": ""} id="dinner">Dinner</li>
            </ul>
                <div className="hamburger-menu">
                <GiHamburgerMenu onClick={handleHamburgerClick} /> 
            </div>
        </nav>
    );
}