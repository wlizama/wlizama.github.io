import React, { useRef } from 'react'
import Avatar from './Avatar'
import NavigationLink from './NavigationLink'
import { useOnClickOutside } from 'utils/helpers'

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
                    <NavigationLink to="/about" onClick={() => { setIsOpenMenu(false) }}>
                        <i className='fa-solid fa-user icon-color-1'></i>
                        About
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink to="/education" onClick={() => { setIsOpenMenu(false) }}>
                        <i className='fa-solid fa-graduation-cap icon-color-1'></i>
                        Education
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink to="/experience" onClick={() => { setIsOpenMenu(false) }}>
                        <i className='fa-solid fa-briefcase icon-color-1'></i>
                        Experiencie
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink to="/tech-stack" onClick={() => { setIsOpenMenu(false) }}>
                        <i className='fa-solid fa-pen-ruler icon-color-1'></i>
                        Tech Stack
                    </NavigationLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation