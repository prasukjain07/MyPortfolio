"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const items = [
    {
        id: 1,
        color: "from-red-300 to-blue-300",
        title: "Apna Ghar",
        desc: "A real estate app built with React, Node.js, and MongoDB. Find homes for rent or purchase with secure user authentication, advanced search and filters, detailed property pages, and personalized user profiles.",
        img: "/apnaGhar.png",
        link: "https://estate-app-ebon.vercel.app/"
    },
    {
        id: 2,
        color: "from-blue-300 to-violet-300",
        title: "A2O Blood Bridge",
        desc: "BloodLink is a comprehensive full-stack application designed to seamlessly connect blood banks with donors and patients in need. Users can easily donate blood by filling out a donor form, while those requiring blood can submit a request form.",
        img: "/A2O.png",
        link: "https://github.com/prasukjain07/Upper_Circuit",
    },
    {
        id: 3,
        color: "from-violet-300 to-purple-300",
        title: "Spectrum",
        desc: "A frontend website of collede Artand Photography Competition. Build homepage using Fluid-JS",
        img: "spectrum.png",
        link: "spectrum-hazel.vercel.app",
    },
    {
        id: 4,
        color: "from-purple-300 to-red-300",
        title: "Amazon Clone",
        desc: "A simple frontend project by cloning home page of Amazon",
        img: "amazon.png",
        link: "amazon-clone-dusky-delta.vercel.app/",
    },
];

const PortfolioPage = () => {



    const ref = useRef()

    const { scrollYProgress } = useScroll({ target: ref })

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])
    return (
        <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
            <div className="h-[600vh] relative" >
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">My Works</div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex">
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
                        {items.map(item => (
                            <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                                key={item.id}>
                                <div className="flex flex-col text-white justify-between items-center"> 
                                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                                        {item.title}
                                    </h1>
                                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[500px] xl:h-[320px]">
                                        <img src={item.img} className="object-contain h-full w-full" />
                                    </div>
                                    <div className="w-80 md:w-96 lg:text-lg lg:w-[500px] xl:w-[500px]">
                                        <p className="">{item.desc}</p>
                                        <Link className="flex justify-end" href={item.link}>
                                        <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded ">See Demo</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default PortfolioPage