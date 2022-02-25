import React from 'react'
import ContainerWrapper from 'components/layout/Container/ContainerWrapper'
import './about.scss'
import { TEXTS } from 'utils/constants'

const About = () => {
    return (
        <ContainerWrapper title='About'>
            <div className='about--body'>
                <p>
                I am a software developer with experience in different projects in the Backend and Frontend
                area under web environments, APIs, desktop, mobile and services; I have knowledge for the
                development of applications with or without Frameworks, different Database managers,
                version control and development methodologies.
                </p>
                <p>
                I can develop and adapt to the work that the team and business environment require, being a collaborating member at all times,
                contributing my knowledge and professional skills. I am always focused on learning with
                future benefit not only in my job skills but also in my training as a person.
                </p>
            </div>
            <div className='about--contact'>
                <h2>Contact</h2>
                <ul className='about--contact-list'>
                    <li>
                        <i className='fa-solid fa-envelope icon-color-1'></i>
                        <a href='mailto:wilderlizama@gmail.com' target='_blank' title='E-mail'>{TEXTS.USER_CONTACT.MAIL}</a>
                    </li>
                    <li>
                        <i className='fa-brands fa-github icon-color-1'></i>
                        <a href='https://github.com/wlizama' target='_blank' title='Github'>{TEXTS.USER_CONTACT.GITHUB}</a>
                    </li>
                    <li>
                        <i className='fa-brands fa-linkedin icon-color-1'></i>
                        <a href='https://www.linkedin.com/in/wilderlizama' target='_blank' title='Linkedin'>{TEXTS.USER_CONTACT.LINKEDIN}</a>
                    </li>
                    <li>
                        <i className='fa-brands fa-twitter icon-color-1'></i>
                        <a href='https://twitter.com/wilderlizama' target='_blank' title='Twitter'>{TEXTS.USER_CONTACT.TWITTER}</a>
                    </li>
                </ul>
            </div>
        </ContainerWrapper>
    )
}

export default About