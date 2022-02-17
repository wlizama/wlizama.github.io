import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<div>
			<nav>Aside nav</nav>
			<main>
				<Outlet/>
			</main>
		</div>
	)
}

export default Layout