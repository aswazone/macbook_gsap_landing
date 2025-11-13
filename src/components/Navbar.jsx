import React from 'react'
import {navLinks} from "../constants/index.js";

const Navbar = () => {

    const handleSearchClick = () => {
        // TODO: Implement search functionality
        console.log('Search clicked');
    };

    const handleCartClick = () => {
        // TODO: Implement cart functionality
        console.log('Cart clicked');
    };

    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="Apple logo"/>
                <ul>
                    {navLinks.map(({ label,href }) =>(
                        <li key={label}>
                            <a href={href}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className={'flex-center gap-3'}>
                    <button type="button" onClick={handleSearchClick} aria-label="Search">
                        <img src="/search.svg" alt="Search"/>
                    </button>
                    <button type="button" onClick={handleCartClick} aria-label="Shopping Cart">
                        <img src="/cart.svg" alt="Cart"/>
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default Navbar
