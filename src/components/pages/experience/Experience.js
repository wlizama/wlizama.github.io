import React from 'react'
import ContainerWrapper from 'components/layout/Container/ContainerWrapper'
import ExperienceItem from './ExperienceItem'
import './experience.scss'

const Experience = () => {

    const experienceList = [
        {
            date: 'April 2022 - currently',
            enterprice: 'Front End Engineer (remote work) at FTA DevBase LLC',
            roles: [
                'Development and support of new versions for mobile application with React Native.',
                'Review and refactoring of the application code migrating from JavaScript to TypeScript.',
                'Development of the shipment tracking function to allow users to know the status of their orders in real time.',
                'Development of a library of user interface components using atomic design system.',
            ]
        },
        {
            date: 'April 2019 – March 2022',
            enterprice: 'Full Stack developer at GNT Servicios Generales S.A, Lima',
            roles: [
                'Migration of desktop to web applications developed with React JS.',
                'Development and maintenance of ERP software and web intranet.',
                'Management of T-SQL structure and tables in SQL Server and tables.',
                'Support for IIS 6.0 and Ubuntu Server 14.4 servers.',
                'Development of applications for consumption of Gmail APIs for automatic registration of electronic documents.',
                'Development of Java services with execution in the background and by threads installed on the server.',
            ]
        },
        {
            date: 'March 2018 – March 2019',
            enterprice: 'Front end developer (remote work) at Home Business Real Estate Magazine',
            roles: [
                'Corporation website development full React JS.',
                'Proposal and maintenance of web design and APIs.',
                'Software testing and deployment.',
            ]
        },
        {
            date: 'January 2017 – February 2018',
            enterprice: 'Backend developer (remote work) at 828 Transporte',
            roles: [
                'Development and maintenance of desktop application accounting system.',
                'Management of T-SQL structure and tables.',
                'Development of CLI scripts for server automation.',
            ]
        },
        {
            date: 'October 2015 – December 2017',
            enterprice: 'Full Stack developer (remote work) at Coast Pacific Group',
            roles: [
                'Landing page development and maintenance, full JS website.',
                'Software testing and deployment.',
                'Development and maintenance of logistics ERP software and landing page.',
                'Maintenance of the travel log system.',
                'Software testing and deployment.',
            ]
        }
    ]

    return (
        <ContainerWrapper title='Experience'>
            <ul className='experience-list'>
                {experienceList.map((experience, index) => {
                    return (
                        <ExperienceItem key={index} item={experience} />
                    )
                })}
            </ul>
        </ContainerWrapper>
    )
}

export default Experience