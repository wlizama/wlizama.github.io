import React from 'react'
import ContainerWrapper from 'components/layout/Container/ContainerWrapper'
import TechStackGroup from './TechStackGroup'
import './tech-stack.scss'
import logo_javascript from 'assets/images/logo-javascript.svg'
import logo_java from 'assets/images/logo-java.svg'
import logo_python from 'assets/images/logo-python.svg'
import logo_php from 'assets/images/logo-php.svg'
import logo_typescript from 'assets/images/logo-typescript.svg'
import logo_nodejs from 'assets/images/logo-nodejs.svg'
import logo_react from 'assets/images/logo-react.svg'
import logo_redux from 'assets/images/logo-redux.svg'
import logo_vue from 'assets/images/logo-vue.svg'
import logo_bootstrap from 'assets/images/logo-bootstrap.svg'
import logo_materialui from 'assets/images/logo-materialui.svg'
import logo_jquery from 'assets/images/logo-jquery.svg'
import logo_sqlserver from 'assets/images/logo-sqlserver.svg'
import logo_mysql from 'assets/images/logo-mysql.svg'
import logo_mongodb from 'assets/images/logo-mongodb.svg'
import logo_redis from 'assets/images/logo-redis.svg'

import logo_git from 'assets/images/logo-git.svg'
import logo_gitkraken from 'assets/images/logo-gitkraken.svg'
import logo_docker from 'assets/images/logo-docker.svg'
import logo_nginx from 'assets/images/logo-nginx.svg'
import logo_apache from 'assets/images/logo-apache.svg'
import logo_tomcat from 'assets/images/logo-tomcat.svg'
import logo_postman from 'assets/images/logo-postman.svg'
import logo_vscode from 'assets/images/logo-vscode.svg'
import logo_dart from 'assets/images/logo-dart.svg'
import logo_flutter from 'assets/images/logo-flutter.svg'
import logo_react_native from 'assets/images/logo-react-native.svg'


const TechStack = () => {

    const techStackGroupsList = [
        {
            group: 'Languages',
            items: [
                { name: 'Javascript', logo: logo_javascript },
                { name: 'Java', logo: logo_java },
                { name: 'Python', logo: logo_python },
                { name: 'PHP', logo: logo_php },
                { name: 'Typescript', logo: logo_typescript },
                { name: 'Node.js', logo: logo_nodejs },
                { name: 'Dart', logo: logo_dart },
            ]
        },
        {
            group: 'Libraries/Frameworks',
            items: [
                { name: 'React JS', logo: logo_react },
                { name: 'React Redux', logo: logo_redux },
                { name: 'React Native', logo: logo_react_native },
                { name: 'Flutter', logo: logo_flutter },
                { name: 'Vue JS', logo: logo_vue },
                { name: 'Bootstrap', logo: logo_bootstrap },
                { name: 'Material UI', logo: logo_materialui },
                { name: 'JQuery', logo: logo_jquery },
            ]
        },
        {
            group: 'Databases',
            items: [
                { name: 'Microsoft SQL Server', logo: logo_sqlserver },
                { name: 'MySQL', logo: logo_mysql },
                { name: 'MongoDB', logo: logo_mongodb },
                { name: 'Redis', logo: logo_redis },
            ]
        },
        {
            group: 'I\'m also experienced with',
            items: [
                { name: 'Git', logo: logo_git },
                { name: 'Gitkraken', logo: logo_gitkraken },
                { name: 'Docker', logo: logo_docker },
                { name: 'Nginx', logo: logo_nginx },
                { name: 'Apache', logo: logo_apache },
                { name: 'Tomcat', logo: logo_tomcat },
                { name: 'Postman', logo: logo_postman },
                { name: 'VScode', logo: logo_vscode },
            ]
        },
    ]
    
    return (
        <ContainerWrapper title='Tech Stack'>
            <ul className='techstack-list'>
                {techStackGroupsList.map((techstack, index) => {
                    return (
                        <TechStackGroup key={index} item={techstack} />
                    )
                })}
            </ul>
        </ContainerWrapper>
    )
}

export default TechStack