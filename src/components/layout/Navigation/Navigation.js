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
                    <Link to="/about" onClick={() => { setIsOpenMenu(false) }}>About</Link>
                </li>
                <li>
                    <Link to="/education" onClick={() => { setIsOpenMenu(false) }}>Education</Link>
                </li>
                <li>
                    <Link to="/experiencie" onClick={() => { setIsOpenMenu(false) }}>Experiencie</Link>
                </li>
                <li>
                    <Link to="/tech-stack" onClick={() => { setIsOpenMenu(false) }}>Tech Stack</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation