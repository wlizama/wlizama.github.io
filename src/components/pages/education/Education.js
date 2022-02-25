import React from 'react'
import ContainerWrapper from 'components/layout/Container/ContainerWrapper'
import EducationItem from './EducationItem'
import './education.scss'

const Education = () => {

    const educationList = [
        {
            date: '2019 - currently',
            title: 'Engineering career: Systems and computer engineering',
            description: 'Technological University of Peru'
        },
        {
            date: '2022 - currently',
            title: 'Design Microservices Architecture with Patterns & Principles - Course',
            description: 'Udemy e-learning platform'
        },
        {
            date: '2020 - 2021',
            title: 'Developing native apps with Flutter',
            description: 'Udemy e-learning platform'
        },
        {
            date: '2019 - 2019',
            title: 'ReactJS, Redux + ES6',
            description: 'Udemy e-learning platform'
        },
        {
            date: '2018 - 2018',
            title: 'Backend development with Python and Django',
            description: 'Platzi e-learning platform'
        },
        {
            date: '2018 - 2018',
            title: 'Java SE Basic Course',
            description: 'Platzi e-learning platform'
        },
        {
            date: '2017 - 2018',
            title: 'Backend development with PHP',
            description: 'Platzi e-learning platform'
        },
        {
            date: '2017 - 2017',
            title: 'Front end architecture',
            description: 'Platzi e-learning platform'
        },
        {
            date: '2017 - 2017',
            title: 'Linux Server Administration Course',
            description: 'Platzi e-learning platform'
        },
        {
            date: '2017 - 2017',
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