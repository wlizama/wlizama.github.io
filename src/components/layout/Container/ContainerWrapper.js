import React from 'react'

const ContainerWrapper = (props) => {
    const { title, children } = props
    return (
        <div className='container--body-wrapper'>
            <h1>{title}</h1>
            <div className='container--body-wrapper-content'>
                {children}
            </div>
        </div>
    )
}

export default ContainerWrapper