import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
        <nav className='bar1'>
        <Link to="/" className='Roles'>
        Users and Admins
        </Link>
        <div className='collapse1'>
            <ul className='auto'>
            <li className="items">
            <Link to="/" className="linked">
             Management
             </Link>
            </li>
            <li className="items">
            <Link to="/" className="linked">
             Control
             </Link>
            </li>
            <li className="items">
            <Link to="/" className="linked">
             User Experience
             </Link>
            </li>
            </ul>
        </div>
    </nav>
    );
    
}