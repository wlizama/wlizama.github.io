import React from 'react'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className='navigation'>
            <Avatar />
            <ul className='navigation--list'>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/education">Education</Link>
                </li>
                <li>
                    <Link to="/experiencie">Experiencie</Link>
                </li>
                <li>
                    <Link to="/tech-stack">Tech Stack</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation