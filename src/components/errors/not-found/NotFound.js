import React from 'react'
import NotFoundImg from 'assets/images/not-found.svg'
import './not-found.scss'

const NotFound = () => {
    return (
        <div className='err--not-found'>
            <img src={NotFoundImg} title='Not Found image' />
            <div>Not found</div>
        </div>
    )
}

export default NotFound
