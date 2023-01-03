import React, { useState, useRef } from 'react';
import 'bulma/css/bulma.css';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

function ContactMe() {

    const [emailData, setEmailData] = useState(
        {
            username: "",
            emailaddress: "",
            message: ""
        })

        const handleInputChange = (event) => {
            const { name, value } = event.target
            setEmailData({ ...emailData, [name]: value })
        }

        const form = useRef();

        const sendEmail = (event) => {
            event.preventDefault();

        emailjs.sendForm('service_9nes2pi', 'template_u93ykkh', form.current, 'OyDLVDU7bKQ73ycgR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            setEmailData({ username: "", email: "", message: "" })
    }

    return (
        <>
            <section className="hero-body">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0.1, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 2,
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
                                            <input name="username" 
                                             value={emailData.username}
                                            onChange={handleInputChange}
                                            className="input" type="text" />
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="navfont">Email</label>
                                        <div class="control has-icons-left has-icons-right">
                                            <input name="email" 
                                            value={emailData.emailaddress} 
                                            onChange={handleInputChange}
                                            className="input" type="text" />
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="font is-size-5">Message</label>
                                        <div class="control">
                                            <textarea name="message" 
                                            value={emailData.message}
                                            onChange={handleInputChange}
                                            class="textarea" ></textarea>
                                        </div>
                                    </div>

                                    <div class="field is-grouped">
                                        <div class="control">
                                            <button type="submit" class="button is-link">Submit</button>
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