import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <Link to="/" className="navbar-brand mb-0 h1">PokeApp</Link>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item ml-4">
                    <Link to="/favorite" data-testid="favorite-btn">Favorite</Link>
                </li>
            </ul>
        </nav>
    )
}