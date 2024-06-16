/* create new component consisting of home and about */
import React from 'react'
import Home from './Home.tsx'
import About from './About.tsx'

function HomePage() {
    return (
        <div>
            <Home />
            <About />
        </div>
    )
}

export default HomePage
