import React from 'react';
import TechBlog from '../css/TechBlog.png';
import ComingSoon from '../css/ComingSoon.jpeg'; 

function Project() {
    return (
        <section className="hero-body">
            <div className="container has-text-centered bg-light">
                <h1 className="name pb-6"> Projects </h1>
                <div >
                    <div className='columns'>
                        <img className="projects column" src={TechBlog} />
                        <div className='column'>
                        <p className="font title "> Full Stack Tech Blog </p>
                        <button className="button is-dark is-medium is-outlined ">Write a blog post</button>
                        </div>

                    </div>
                    <div className='columns'>
                    <img className="projects column" src={TechBlog} />
                        <div className='column'>
                        <p className="font title "> Full Stack Tech Blog </p>
                        <button className="button is-dark is-medium is-outlined ">Write a blog post</button>
                        </div>
                    </div>

                    <div className='columns'>
                    <img className="projects column" src={ComingSoon} />
                        <div className='column'>
                        <p className="font title "> The Educated Vegan </p>
                        <button className="button is-dark is-medium is-outlined ">Educate yourself on Veganism</button>
                        </div>
                    </div>

                </div>
            </div>

        </section >
    )

}

export default Project; 