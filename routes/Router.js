import React from 'react'
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect
} from "react-router-dom"
import routeConfig from './routeConfig'
import NotFound from 'components/errors/NotFound'


const Router = () => {
	
	return (
		<BrowserRouter>
			<Switch>
				{routeConfig.map((route, idx) => 
				<Route key={idx} path={route.path} exact={route.exact} component={route.component} />
				)}
				<Route path='/404' exact={true} component={NotFound} />
				<Route path='*' exact={true}>
					<Redirect to='/404' />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default Router
