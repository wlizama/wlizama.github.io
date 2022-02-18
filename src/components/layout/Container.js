import React from 'react'
import { Outlet } from 'react-router-dom'

const Container = () => {
    return (
        <main className='container'>
            <Outlet />
        </main>
    )
}

export default Container