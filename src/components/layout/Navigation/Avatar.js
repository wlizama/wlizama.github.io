import React from 'react'
import C from '../../../constants'

const Avatar = () => {
    return (
        <div className='avatar'>
            <img 
                src="https://avatars0.githubusercontent.com/u/10176577?s=460&v=4" 
                alt="avatar"
                className='avatar--image' 
            />
            <div className='avatar--texts'>
                <div className='avatar--texts-user'>{C.USER}</div>
                <div className='avatar--texts-role'>{C.OCUPATION}</div>
            </div>
        </div>
    )
}

export default Avatar