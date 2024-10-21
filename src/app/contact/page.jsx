"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { useState } from "react";
import Link from 'next/link';
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


        <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 overflow-x-hidden">
                {/* TextContainer  */}
                <div className="flex flex-col lg:w-1/2 gap-8 lg:mt-[30vh] text-center">
                    <p className="text-6xl">
                        Work with Me :)
                    </p>
                    <p className="text-xl">You can contact me via form or at <i>prasukjain0703@gmail.com</i></p>

                    <div className="md:hidden flex gap-6 justify-center items-center">
                        <Link href="https://github.com/prasukjain07">
                            <img src="/github.png" className="h-8 w-8" />
                        </Link>
                        <Link href="https://www.instagram.com/prasukjain_07">
                            <img src="/instagram.png" className="h-8 w-8" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/prasuk-jain-1053b5244/">
                            <img src="/linkedin.png" className="h-8 w-8" />
                        </Link>
                    </div>

                </div>
                {/* Form Container  */}
                <form
                    onSubmit={sendEmail}
                    ref={form} className=" md:h-full lg:h-[90%] lg:w-1/2 bg-red-50 rounded-xl text-xl flex p-8 m-4 flex-col gap-8 justify-center ">
                    <span className="text-4xl font-serif text-center">Contact Me</span>
                    <span className="">Name</span>
                    <input className="bg-white border-b-2 border-b-black " name="user_name" type="text" />
                    <span>Email</span>
                    <input className="bg-white border-b-2 border-b-black " name="user_email" type="email" />
                    <span>Message</span>
                    <textarea className="bg-white border-b-2 border-b-black outline-none" name="user_message" row={6} />
                    <button className="bg-purple-200 rounded text-semibold text-gray-600 py-2 hover:bg-purple-500 hover:text-white">Send</button>
                    {success && <span className="text-green-600 font-semibold">Your message has been sent successfully!</span>}
                    {error && <span className="text-red-600 font-semibold">Something went wrong!</span>}
                </form>

            </div>
    )
}

export default ContactPage