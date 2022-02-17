import React from 'react';
import Layout from 'components/layout'
import About from 'components/pages/about'
import NotFound from 'components/errors/not-found'
import {
    BrowserRouter,
	Routes,
	Route
} from "react-router-dom"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<About />} />
                    <Route path='about' element={<About />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
