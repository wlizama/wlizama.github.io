import React from 'react'
import { TEXTS } from 'utils/constants'
import { Outlet } from 'react-router-dom'

const Container = (props) => {

    const { setIsOpenMenu } = props

    return (
        <main 
            className='container'
        >
            <header className='container--header'>
                <button
                    type='button'
                    className='container--header-mbutton'
                    onClick={() => { setIsOpenMenu(true) }}
                >
                    <i className='fa-solid fa-bars'></i>
                </button>
                <h2>
                    <span className='container--header-user'>{TEXTS.USER}</span>
                    <span className='container--header-role'>{TEXTS.OCUPATION}</span>
                </h2>
            </header>
            <section className='container--body'>
                <Outlet />
            </section>
        </main>
    )
}

export default Container