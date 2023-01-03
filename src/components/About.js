import { motion } from 'framer-motion';
import React from 'react';
import Profile from '../css/ProfilePhoto.png';

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

                        <p className='font'> 
                         A full stack developer with a certificate from University of California, Los Angeles extension campus in Full-Stack web development.
                         Through the bootcamp, I have gained proficiency in HTML, CSS, JavaScript, Node.js, React. 
                         Gained excellence using server side and third-party API’s and using databases including SQL, NoSQL, and GraphQL. 
                         I also have valuable experience using Express.js, Jest, Model-View-Controller Framework, Sequelize, and Apollo Sandbox. 
                         I have a strong background in chemistry, having graduated from University of California, Riverside with a bachelor's degree in Chemistry with research experience in quantitative method development and work experience as an Analytical Chemist. 
                         I have successfully been able to adapt the discipline, attention to detail, and work ethic from my background in chemistry to become an adept developer. 
                         When I am not behind a computer screen coding, I am training for my next race, with my next race being in April 2023. 
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
