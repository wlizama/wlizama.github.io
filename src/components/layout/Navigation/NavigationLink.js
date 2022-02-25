import React from 'react'
import {
    Link,
    useMatch,
    useResolvedPath
} from 'react-router-dom'

const NavigationLink = (props) => {
    const { to, children } = props

    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link to="/about" {...props} {...(match ? {className: 'active'} : {})} >
            {children}
        </Link>
    )
}

export default NavigationLink