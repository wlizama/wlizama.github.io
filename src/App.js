import React from 'react';
import Layout from 'components/layout'
import About from 'components/pages/about'
import Education from 'components/pages/education'
import Experience from 'components/pages/experience'
import TechStack from 'components/pages/tech-stack'
import { TransitionGroup, CSSTransition } from "react-transition-group";

import NotFound from 'components/errors/not-found'
import {
	Routes,
	Route,
    useLocation
} from "react-router-dom"

const App = () => {
    const location = useLocation();

    return (
        <Routes location={location}>
            <Route path="/" element={<Layout />}>
                <Route index element={<TransitionGroup component={null}><CSSTransition key={location.key} classNames="fade" timeout={300}><About /></CSSTransition></TransitionGroup>} />
                <Route path='about' element={<TransitionGroup component={null}><CSSTransition key={location.key} classNames="fade" timeout={300}><About /></CSSTransition></TransitionGroup>} />
                <Route path='education' element={<TransitionGroup component={null}><CSSTransition key={location.key} classNames="fade" timeout={300}><Education /></CSSTransition></TransitionGroup>} />
                <Route path='experience' element={<TransitionGroup component={null}><CSSTransition key={location.key} classNames="fade" timeout={300}><Experience /></CSSTransition></TransitionGroup>} />
                <Route path='tech-stack' element={<TransitionGroup component={null}><CSSTransition key={location.key} classNames="fade" timeout={300}><TechStack /></CSSTransition></TransitionGroup>} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App;
