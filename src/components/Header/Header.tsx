import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    const links = [
        {url:'login',title:'Login'},
        {url:'registration',title:'Registration'},
        {url:'restore-pass',title:'Restore pass'},
    ]
    let navlinks  = links.map(link => {
        return <li>
            <NavLink to={`/${link.url}`}>
                <span>{link.title}</span>
            </NavLink>
        </li>
    })
    return (
        <ul >
            {navlinks}
        </ul>
    )
}

export default Header;
