import React from 'react';
import Layout from 'components/layout'
import About from 'components/pages/about'
import Education from 'components/pages/education'
import Experience from 'components/pages/experience'
import TechStack from 'components/pages/tech-stack'

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
                <Route path="/" element={<Layout />}>
                    <Route index element={<About />} />
                    <Route path='about' element={<About />} />
                    <Route path='education' element={<Education />} />
                    <Route path='experience' element={<Experience />} />
                    <Route path='tech-stack' element={<TechStack />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
