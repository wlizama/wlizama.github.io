import React from 'react'

const EducationItem = (props) => {

    const { date, title, description } = props.item

    return (
        <li className='education-item'>
            <div className='education-item--date'>{date}</div>
            <div className='education-item-content'>
                <div className='education-item-content--title'>{title}</div>
                <div className='education-item-content--description'>{description}</div>
            </div>
        </li>
    )
}

export default EducationItem