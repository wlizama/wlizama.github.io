import React from 'react'
import ContainerWrapper from 'components/layout/Container/ContainerWrapper'
import EducationItem from './EducationItem'
import './education.scss'

const Education = () => {

    const educationList = [
        {
            date: 'March 2019 – December 2022',
            title: 'Bachelor\'s degree in Systems and Computer Engineering',
            description: 'Universidad Tecnológica del Perú'
        },
        {
            date: 'January 2022 – March 2022',
            title: 'Design Microservices Architecture with Patterns & Principles',
            description: 'Udemy e-learning platform'
        },
        {
            date: 'January 2020 – April 2020',
            title: 'Developing native apps with Flutter',
            description: 'Udemy e-learning platform'
        },
        {
            date: 'April 2019 – July 2019',
            title: 'ReactJS, Redux + ES6',
            description: 'Udemy e-learning platform'
        },
        {
            date: 'February 2018 – July 2022',
            title: 'Backend development with Python and Django',
            description: 'Platzi e-learning platform'
        },
        {
            date: 'July 2018 – November 2022',
            title: 'Java SE Basic Course',
            description: 'Platzi e-learning platform'
        },
        {
            date: 'November 2017 – January 2018',
            title: 'Backend development with PHP',
            description: 'Platzi e-learning platform'
        },
        {
            date: 'January 2017 – March 2017',
            title: 'Front end architecture',
            description: 'Platzi e-learning platform'
        },
        {
            date: 'February 2016 – April 2016',
            title: 'Visual Studio 2015 Fundamentals - C#',
            description: 'Cibertec'
        }
    ]

    return (
        <ContainerWrapper title='Education'>
            <ul className='education-list'>
                {educationList.map((education, index) => {
                    return (
                        <EducationItem key={index} item={education} />
                    )
                })}
            </ul>
        </ContainerWrapper>
    )
}

export default Education