import React from 'react';
//import '.../src/css/style.css';
import {motion} from 'framer-motion';

function Header() {

    return (
        <section className="hero-body">
            <div className="container has-text-centered bg-light">
            <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 3,
                            delay: 0.5,
                            ease: [0, 0.71, .5, 1.01]
                        }}>
                <p className="font title">
                    Hi, I'm
                </p>
                <h1 className="name"> Alejandra Quintero </h1>
                <p className="font title">  I am chemist, turned full-stack developer
                </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Header; 