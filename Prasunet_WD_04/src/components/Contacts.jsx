import React, { useState, useRef } from 'react'
import CustomHook from './CustomHook'


const Contacts = () => {

    const [listContacts] = useState([
        {
            title : 'Phone Number',
            value : '123456789'
        },
        {
            title : 'Email',
            value : 'dev.sahils13@gmail.com'
        },
        {
            title : 'LinkedIn',
            value : 'https://www.linkedin.com/in/sahil-singh-604978310/'
        }
    ])

    const divs = useRef([]);
const scrollTab = useRef(null);
CustomHook(scrollTab, divs);

  return (
    
    <section className='contacts' ref={scrollTab}>
        <div className="contact-title" ref={(el) => el && divs.current.push(el)}>
            This is my Contact
        </div>
        <div className="contact-des"  ref={(el) => el && divs.current.push(el)}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, quasi similique fugiat dignissimos eaque pariatur!
        </div>
        <div className="contact-list" ref={(el) => el && divs.current.push(el)}>
            {
                listContacts.map((value,key) => (
                    <div className="contact-item" key={key}>
                        <h3>{value.title}</h3>
                        <div>{value.value}</div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Contacts
