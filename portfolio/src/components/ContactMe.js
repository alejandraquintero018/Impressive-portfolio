import React from 'react';
import 'bulma/css/bulma.css';
import { motion } from "framer-motion"

function ContactMe() {

    return (
        <>
            <section className="hero-body">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1 ,scale: 1 }}
                        transition={{
                            duration: 3,
                            delay: 0.5,
                            ease: [0, 0.71, .5, 1.01]
                        }}>
                        <h1 className="name"> Contact Me </h1>
                        <div className="contact">
                            {/* <motion.div
                           initial={{ opacity: 0, scale: 0.5 }}
                           animate={{ opacity: 1, scale: 1 }}
                           transition={{
                             duration: 1.5,
                             delay: 0.5,
                             ease: [0, 0.71, 0.2, 1.01]
                           }}> */}
                            <div className="card p-6">
                                <div className="card-body">
                                    <div className="field is-expanded is-medium">
                                        <label className="navfont">Name</label>
                                        <div class="control as-adons">
                                            <input class="input" type="text" placeholder="Text input" />
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="navfont">Email</label>
                                        <div class="control has-icons-left has-icons-right">
                                            <input class="input is-danger" type="email" placeholder="Email input" />
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-envelope"></i>
                                            </span>
                                            <span class="icon is-small is-right">
                                                <i class="fas fa-exclamation-triangle"></i>
                                            </span>
                                        </div>
                                        <p class="help is-danger">This email is invalid</p>
                                    </div>


                                    <div class="field">
                                        <label class="font is-size-5">Message</label>
                                        <div class="control">
                                            <textarea class="textarea" placeholder="Textarea"></textarea>
                                        </div>
                                    </div>

                                    <div class="field is-grouped">
                                        <div class="control">
                                            <button class="button is-link">Submit</button>
                                        </div>
                                        <div class="control">
                                            <button class="button is-link is-light">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </motion.div> */}

                        </div>
                    </motion.div>
                </div>
            </section>

        </>
    )

}

export default ContactMe; 