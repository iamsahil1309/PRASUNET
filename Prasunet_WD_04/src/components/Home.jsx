import { useRef } from 'react';
import React from 'react'
import CustomHook from './CustomHook';

const Home = () => {

    const scrollTab = useRef();
    CustomHook(scrollTab);

  return (
    <section ref={scrollTab} className='home'>
        <div className="home-content">
            <div className="home-name">
                MY NAME IS <span>SAHIL SINGH</span>
            </div>
            <div className="home-des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatem, obcaecati cupiditate fugit veritatis architecto ab provident eveniet nobis officiis unde est voluptatum corrupti necessitatibus.''
            </div>
            <a href="/democv.pdf" target="_blank" rel='noopener noreferrer'>Download My CV</a>
        </div>
        <div className="home-avatar">
            <div className="home-card">
                <img src="/public/profile-pic (2).png" alt="" />
                <div className="home-info">
                    <div>Front End Developer</div>
                    <div>Indian</div>
                    <div>13/09</div>
                    <div>Male</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home
