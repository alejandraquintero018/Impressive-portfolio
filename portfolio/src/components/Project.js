import React from 'react';
import TechBlog from '../css/TechBlog.png';
import ComingSoon from '../css/ComingSoon.jpeg';
import TrackMyMileage from '../css/TrackMyMileage1.png'; 
import { motion } from "framer-motion"


function Project() {
    return (
        <section className="hero-body">
            <div className="container has-text-centered bg-light">

                <h1 className="name pb-6"> Projects </h1>

                <div>
                        <motion.div className='columns my-6'
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: -50 }}
                            animate={{ y: -50 }}
                            transition={{
                                type: 'spring',
                                bounce: 0.25,
                                duration: 2,
                                //delay: 0.5,
                                ease: [0, 0.71, .5, 1.01]
                            }}>
                            <img alt="screenshot of application" className="projects column" src={TechBlog} />
                            <div className='column'>
                                <p className="font title "> Full Stack Tech Blog </p>
                                <p className='py-4 font'> Application using express.js, sequelize, and handlebars.js. This platform incorporates user authentication when the user to sign ups for an account. Once the user logs in, they will be redirected to their dashboard. On their dashboard, the user is able create a new blog post. When the blogpost is made. It will show up on thier dashboard where they are able to delete a previous blog post or they can edit the blogpost. It will also show up on the homepage where other users can read the blog and leave comments. </p>
                                <button className="button is-dark is-medium is-outlined ">Write a blog post</button>
                            </div>
                        </motion.div>
                    

                    <motion.div className='columns my-6'
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1,  y: -50 }}
                        transition={{
                            type: 'spring',
                            bounce: 0.25,
                            duration: 2,
                            //delay: 0.5,
                            ease: [0, 0.71, .5, 1.01]
                        }}>
                           
                            <div className='column'>
                                <p className="font title"> Full Stack Running Application </p>
                                <p className='py-4 font'> Project incorporating Chart.js, Node.js, user authentication, express.js and Handlebars. 
                                    Allows a user to log in or sign up and go to their profile and track a run. When a run is logged, 
                                    it changes the chart on the profile page which visualizes their running progression. 
                                    Also allows the viewer to see runs logged by other users on the homepage of the website. </p>
                                <button className="button is-dark is-medium is-outlined">Track your running</button>
                            </div>
                            <img alt="screenshot of application" className="projects column" src={TrackMyMileage} />

                    
                    </motion.div>
                        <motion.div className='columns my-6'
                           initial={{ opacity: 0, y: 100 }}
                           whileInView={{ opacity: 1, y: -50 }}
                           //animate={{ y: -50 }}
                           transition={{
                               type: 'spring',
                               bounce: 0.25,
                               duration: 2,
                               //delay: 0.5,
                               ease: [0, 0.71, .5, 1.01]
                           }}>
                            <img className="projects column" alt="placehholder image" src={ComingSoon} />
                            <div className='column'>
                                <p className="font title "> The Educated Vegan </p>
                                <p className='py-4 font'> Front End Application using tailwindcss that is an organized library of the best vegan material that I have come across in the last 6 years of being vegan. 
                                The user will be able to discover the best books, youtube videos, and blogs on veganism and quickly discover environmental, health and ethical benefits of veganism. 
                                My hope is that through this page, users will not be bogged down with harmful, misleading, or exessive material, making veganism approachable for more people.  </p>
                                <button disabled className="button is-dark is-medium is-outlined pt-4">Educate yourself on Veganism</button>
                            </div>
                        </motion.div>


                </div>

            </div>

        </section >
    )

}

export default Project; 