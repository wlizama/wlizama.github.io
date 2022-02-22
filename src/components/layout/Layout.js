import React, { useState } from 'react'
import Navigation from './Navigation/Navigation'
import Container from './Container/Container'
import { useMedia } from 'utils/helpers'
import { VALS } from 'utils/constants'
import './layout.scss'


const Layout = () => {
    
    const [isOpenMenu, setIsOpenMenu] = useState(false)
	const isWeb = useMedia(['(min-width: ' + VALS.MEDIA_MIN_WIDTH + ')'], [true], false)

	return (
		<div className={`main-container ${!isWeb ? 'mobile' : ''} ${isOpenMenu ? 'menu-open' : ''}`}>
			<Navigation setIsOpenMenu={setIsOpenMenu} />
			<Container setIsOpenMenu={setIsOpenMenu} />
		</div>
	)
}

export default Layout