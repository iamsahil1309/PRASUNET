import React, { useState ,useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faHtml5, faBootstrap, faCss3, faJs, faNode} from '@fortawesome/free-brands-svg-icons'
import CustomHook from './CustomHook';

const Skills = () => {

    const divs = useRef([]);
    const scrollTab = useRef();
    CustomHook(scrollTab, divs);

    const [listSkills] = useState([
        {
            name: 'HTML',
            des:"Proficient in HTML, the foundational language of the web, adept at creating well-structured and semantic markup to build responsive and accessible websites. Skilled in integrating HTML with CSS and JavaScript to enhance user experience and functionality.",
            icon: faHtml5,
        },
        {
            name: 'CSS',
            des : "Skilled in CSS (Cascading Style Sheets), capable of designing visually appealing and responsive web layouts. Proficient in leveraging CSS frameworks and preprocessors to efficiently style HTML elements, ensuring consistent design across various devices and browsers.",
            icon : faCss3,
        },
        {
            name: 'Javascript',
            des : "Experienced in JavaScript, adept at developing interactive and dynamic web applications. Proficient in leveraging JavaScript frameworks and libraries to create efficient front-end functionalities, enhance user interactivity, and integrate with back-end services for seamless user experiences.",
            icon: faJs,
        },
        {
            name: 'ReactJs',
            des: "Skilled in React, proficient in building modern and scalable web applications with reusable components. Experienced in state management with Redux, and proficient in integrating with RESTful APIs to create responsive and interactive user interfaces, optimizing performance and user experience.",
            icon: faReact,
        },
        {
                name: 'NodeJs',
                des: "Experienced with Node.js, proficient in building scalable server-side applications and APIs. Skilled in using Express.js for middleware management and RESTful architecture, adept at integrating with databases like MongoDB and MySQL to create robust and efficient back-end solutions for web and mobile applications.",
                icon: faNode,
        },
        {
            name: 'Bootstrap',
            des: "Proficient in Bootstrap, a popular front-end framework for building responsive and mobile-first websites. Skilled in utilizing Bootstrap's grid system, components, and utilities to streamline and enhance the design and layout process, ensuring compatibility across various devices and browsers." ,
            icon: faBootstrap,
        }
    ])

  return (
    <section className='skills' ref={scrollTab}>
        <div className="title"  ref={(el) => el && divs.current.push(el)}>
            This is my Skills
        </div>
        <div className="des" ref={(el) => el && divs.current.push(el)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut hic obcaecati provident quia totam!
        </div>
        <div className="list">
            {
                listSkills.map((value, key) => (
                    <div key={key} className="item"  ref={(el) => el && divs.current.push(el)}>
                        <FontAwesomeIcon icon={value.icon} />
                        <h3>{value.name}</h3>
                        <div className="des">{value.des}</div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Skills
