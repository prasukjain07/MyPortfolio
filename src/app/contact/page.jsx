"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { useState } from "react";
const ContactPage = () => {

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        emailjs
            .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
                publicKey: process.env.NEXT_PUBLIC_KEY,
            })
            .then(
                (result) => {
                    setSuccess(true);
                    form.current.reset();
                },
                (error) => {
                    setError(true);
                    form.current.reset();
                },
            );
    };

    return (
        <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
            <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30">
                {/* TextContainer  */}
                <div className="flex flex-col lg:h-full lg:w-1/2 gap-8 mt-[30vh] text-center">
                    <p className="text-6xl">
                        Work with Me :)
                    </p>
                    <p className="text-xl">You can contact me via form or at <i>prasukjain0703@gmail.com</i></p>

                </div>
                {/* Form Container  */}
                <form
                    onSubmit={sendEmail}
                    ref={form} className=" lg:h-[90%] lg:w-1/2 bg-red-50 rounded-xl text-xl flex p-8 m-4 flex-col gap-8 justify-center ">
                    <span className="text-4xl font-serif text-center">Contact Me</span>
                    <span className="">Name</span>
                    <input className="bg-transparent border-b-2 border-b-black outline-none" name="user_name" type="text" />
                    <span>Email</span>
                    <input className="bg-transparent border-b-2 border-b-black outline-none" name="user_email" type="text" />
                    <span>Message</span>
                    <textarea className="bg-transparent border-b-2 border-b-black outline-none" name="user_message" row={6} />
                    <button className="bg-purple-200 rounded text-semibold text-gray-600 py-2">Send</button>
                    {success && <span className="text-green-600 font-semibold">Your message has been sent successfully!</span>}
                    {error && <span className="text-red-600 font-semibold">Something went wrong!</span>}
                </form>

            </div>
        </motion.div>
    )
}

export default ContactPage