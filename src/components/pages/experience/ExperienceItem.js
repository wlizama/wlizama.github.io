import React from 'react'

const ExperienceItem = (props) => {

    const { date, enterprice, roles } = props.item

    return (
        <li className='experience-item'>
            <div className='experience-item--title'>
                <div className='experience-item--title-enterprice'>
                    <i className='fa-solid fa-angle-right icon-color-1'></i>{' '}
                    {enterprice}
                </div>
                <div className='experience-item--title-date'>{date}</div>
            </div>
            <ul className='experience-item-roles'>
                {roles.map((role, index) => {
                    return (
                        <li key={index} className='experience-item-roles--role'>{' - ' + role}</li>
                    )
                })}
            </ul>
        </li>
    )
}

export default ExperienceItem