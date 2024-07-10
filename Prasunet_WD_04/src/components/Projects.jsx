import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import CustomHook from './CustomHook';

const Projects = () => {

    const divs = useRef([]);
    const scrollTab = useRef();
    CustomHook(scrollTab, divs);

    const [listProjects] = useState([
        {
            name: 'Dropbox Clone',
            des : "I developed a Dropbox clone using Firebase, enabling seamless file uploads via drag-and-drop. The application features a responsive design and incorporates a sleek dark mode for enhanced user experience. Firebase ensures secure file storage and real-time updates, optimizing performance.Bootstrap facilitated responsive design implementation, ensuring compatibility across devices. User feedback guided UI enhancements, focusing on usability and accessibility. This project showcases proficiency in frontend development, Firebase integration, and UI/UX design, demonstrating the ability to deliver a practical and visually appealing solution for file management.",

            language : 'React, Tailwind, Firebase, Typescript',
            images : '/public/project1.png'
        },
        {
            name: 'Landing Page',
            des : "Designed and developed a responsive Starbucks landing page using HTML, CSS, and JavaScript. Implemented modern design principles to create a visually appealing and user-friendly interface. Utilized JavaScript for interactive elements, enhancing user engagement. The project showcases proficiency in frontend development and UI design.",
            language : 'HTML, Css, Javascript',
            images : '/public/project2.png'
        },
        {
            name: 'Amazon Page',
            des : "Created a functional Amazon clone using HTML, CSS, and JavaScript. Implemented responsive design principles for seamless usability across devices. Utilized JavaScript for dynamic features like product filtering and interactive elements. The project highlights skills in frontend development and UI/UX design, focusing on creating a user-friendly shopping experience.",
            language : 'HTML, Css Javascript',
            images : '/public/project3.png'
        },
    ])

  return (
   <section className='projects'  ref={scrollTab}>
        <div className="project-title" ref={(el) => el && divs.current.push(el)}>
            This is my Projects
        </div>
        <div className="project-des" ref={(el) => el && divs.current.push(el)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, enim? Fuga dolorem neque rem libero!
        </div>
        <div className="project-list">
            {
                listProjects.map((value,key) => (
                    <div className="project-item" key={key} ref={(el) => el && divs.current.push(el)}>
                        <div className="project-images">
                            <img src={value.images} alt="" />
                        </div>
                        <div className="project-content" ref={(el) => el && divs.current.push(el)}>
                            <h3>{value.name}</h3>
                            <div className="description">{value.des}</div>
                            <div className="mission">
                                <div>
                                    <FontAwesomeIcon icon={faEarthAmericas}/>
                                </div>
                                <h4>Languages</h4>
                                <div className="de">{value.language}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
   </section>
  )
}

export default Projects
