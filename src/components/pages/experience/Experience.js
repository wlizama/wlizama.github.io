import React from 'react'
import ContainerWrapper from 'components/layout/Container/ContainerWrapper'
import ExperienceItem from './ExperienceItem'
import './experience.scss'

const Experience = () => {

    const experienceList = [
        {
            date: '2015 - currently',
            enterprice: 'GNT Servicios Generales S.A - Full Stack developer',
            roles: [
                'Development and maintenance of ERP software and web intranet.',
                'Migration of desktop to web applications developed with React JS.',
                'Management of T-SQL structure and tables in SQL Server and MySQL Databases.',
                'Support for IIS 6.0 and Ubuntu Server 14.4 servers',
                'Development of CLI scripts for server automation.',
                'Development of applications for consumption of Gmail APIs for automatic registration of electronic documents.',
                'Service implementation manager to issue electronic invoicing with web services for SUNAT.',
                'Development of Java services with execution in the background and by threads installed on the server.',
                'Software testing and deployment.',
            ]
        },
        {
            date: '2020 - 2020',
            enterprice: 'Home Business Real Estate Magazine - Front end developer',
            roles: [
                'Corporate website development full React JS.',
                'Proposal and maintenance of web design and APIs.'
            ]
        },
        {
            date: '2019 - 2019',
            enterprice: '828 Transporte - Full stack developer',
            roles: [
                'Development and maintenance of desktop application accounting system.',
                'Software testing and deployment.'
            ]
        },
        {
            date: '2018 - 2018',
            enterprice: 'Coast Pacific Group - Full stack developer',
            roles: [
                'Landing page development and maintenance, full React JS website.',
                'ER diagram proposal and Database modeling for backend functions.'
            ]
        },
        {
            date: '2017 - 2017',
            enterprice: 'Logística Intermodal del Perú S.A.C. - Full stack developer',
            roles: [
                'Development and maintenance of logistics ERP software and landing page.',
                'Maintenance of the travel log system.',
                'Software testing and deployment.'
            ]
        },
        {
            date: '2014 - 2014',
            enterprice: 'Ambercrest S.A.C. - Freelance Backend developer',
            roles: [
                'Development and implementation of new features for the accounting system.',
                'Support and remote training.'
            ]
        },
        ,
        {
            date: '2014 - 2014',
            enterprice: 'New Transport Paita - Systems Assistant',
            roles: [
                'Network support and implementation.',
                'Support and installation of operating systems.',
                'Preventive maintenance of software and hardware.'
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