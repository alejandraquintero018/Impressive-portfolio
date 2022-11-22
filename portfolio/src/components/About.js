import { motion } from 'framer-motion';
import React from 'react';
import Profile from '../css/profilephoto.webp';

function About() {

    return (
        <section className="hero-body">
            <div className="container has-text-centered bg-light">
                
                <div className='columns is-vcentered'>
                    <motion.div className='column my-6'
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring',
                            bounce: 0.25,
                            duration: 2,
                            delay: 0.5,
                            ease: [0, 0.71, .5, 1.01]
                        }}>
                            <h1 className="name"> About Me </h1>

                        <p className='font'>A full stack developer with a strong background in chemistry. Holding a bachelors degree in Chemistry from University of California, Riverside,
                            Research experience in quantitative method development and analysis of plant-produced metabolites,
                            and work experience as an Analytical Chemist. Having adapted the discipline and attention to detail to be an efficient developer. 
                            Through the UCLA extension campus, I have devloped front-end as well as back-end skills including proficiency in HTML, CSS, React, and Javascript, Node.js, Expres.js, and MVC Frameworks.  
                            When I am not behind a computer screen coding, I am training for my next race, with my next race being a marathon in Febuarary 2023. 

                        </p>


                    </motion.div>


                    <motion.div className='column my-6'
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 10 }}
                        animate={{ y: -50 }}
                        transition={{
                            type: 'spring',
                            bounce: 0.25,
                            duration: 2,
                            delay: 0.5,
                            ease: [0, 0.71, .5, 1.01]
                        }}>
                        <figure className="aboutimage">
                            <img className="aboutimage" src={Profile} />
                        </figure>
                    </motion.div>
                </div>
            </div>
        </section >
    )

}

export default About; 
