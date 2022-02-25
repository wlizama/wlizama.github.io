import React from 'react'

const TechStackGroup = (props) => {

    const { group, items } = props.item

    return (
        <li className='techstack-group'>
            <h2 className='techstack-group--title'>{group}</h2>
            <ul className='techstack-group-items'>
                {items.map((item, index) => {
                    return (
                        <li key={index} className='techstack-group-items--item'>
                            <img src={item.logo} title={item.name} />
                            <div>{item.name}</div>
                        </li>
                    )
                })}
            </ul>
        </li>
    )
}

export default TechStackGroup