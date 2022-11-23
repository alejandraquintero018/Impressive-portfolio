import React, { useState, useRef } from 'react';
import 'bulma/css/bulma.css';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

function ContactMe() {

    const [formState, setFormState] = useState({ username: "", email: "", message: "" })

    const { username, email, message } = formState

    const [hiddenState, setHiddenState] = useState(true);

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_9nes2pi', 'template_u93ykkh', form.current, 'OyDLVDU7bKQ73ycgR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setFormState({ username: "", email: "", message: "" })
        setHiddenState(false);
    }

    return (
        <>
            <section className="hero-body">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 3,
                            delay: 0.5,
                            ease: [0, 0.71, .5, 1.01]
                        }}>
                        <h1 className="name"> Contact Me </h1>
                        <form className="contact" ref={form} onSubmit={sendEmail} >

                            <div className="card p-6">
                                <div className="card-body">
                                    <div className="field is-expanded is-medium">
                                        <label className="navfont">Name</label>
                                        <div class="control as-adons">
                                            <input name="username" value={username} className="input" type="text" />
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="navfont">Email</label>
                                        <div class="control has-icons-left has-icons-right">
                                            <input name="email" value={email} class="input is-danger" type="email" />
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
                                            <textarea name="message" value={message} class="textarea" ></textarea>
                                        </div>
                                    </div>

                                    <div class="field is-grouped">
                                        <div class="control">
                                            <button type="submit" class="button is-link">Submit</button>
                                        </div>
                                        <div className={hiddenState ? "is-hidden" : ""}>
                                            Sent
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </form>
                    </motion.div>
                </div>
            </section>

        </>
    )

}

export default ContactMe; 