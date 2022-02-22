import React, { useRef } from 'react'
import Avatar from './Avatar'
import { useOnClickOutside } from 'utils/helpers'
import { Link } from 'react-router-dom'

const Navigation = (props) => {

    const ref = useRef()
    const { setIsOpenMenu } = props

    useOnClickOutside(ref, () => { setIsOpenMenu(false) })

    return (
        <nav 
            className='navigation'
            ref={ref}
        >
            <Avatar />
            <ul className='navigation--list'>
                <li>
                    <Link to="/about" onClick={() => { setIsOpenMenu(false) }}>
                        <i className='fa-solid fa-user icon-color-1'></i>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/education" onClick={() => { setIsOpenMenu(false) }}>
                        <i className='fa-solid fa-graduation-cap icon-color-1'></i>
                        Education
                    </Link>
                </li>
                <li>
                    <Link to="/experiencie" onClick={() => { setIsOpenMenu(false) }}>
                        <i className='fa-solid fa-briefcase icon-color-1'></i>
                        Experiencie
                    </Link>
                </li>
                <li>
                    <Link to="/tech-stack" onClick={() => { setIsOpenMenu(false) }}>
                        <i className='fa-solid fa-pen-ruler icon-color-1'></i>
                        Tech Stack
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation