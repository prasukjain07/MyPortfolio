"use client"
import Brain from "@/components/brain";
import { easeInOut, motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {

    const containerRef = useRef()

    const { scrollYProgress } = useScroll({ container: containerRef })

    const skillRef = useRef()
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" })

    const experienceRef = useRef()
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" })

    return (
        <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>

            {/* Container */}
            <div className="h-full overflow-scroll lg:flex " ref={containerRef}>
                {/* textcontainer  */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-32 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
                    {/* AboutMe  */}
                    <div className="flex flex-col gap-12 justify-center">
                        <h1 className="font-bold text-2xl">About Me</h1>
                        <p>As a fullstack web developer, I am deeply passionate about leveraging technology to create innovative solutions. With a strong foundation in problem-solving, I thrive on tackling complex challenges and delivering impactful results.</p>
                        <span>Coding is not just my profession; its my passion and the way I create solutions.</span>
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: easeInOut }}
                            className="x:0"
                            width="185"
                            height="77"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 62.5"
                        >
                            <path d="M25,45A14,14,0,0,0,39,31V19a14,14,0,0,0-28,0V31A14,14,0,0,0,25,45ZM13,19a12,12,0,0,1,24,0V31a12,12,0,0,1-24,0Z" /><path d="M24,24.5h.09l.2.21a1,1,0,0,0,1.42,0l.2-.21H26v-.09l5.71-5.7-1.42-1.42L26,21.59V11H24V21.59l-4.29-4.3-1.42,1.42L24,24.41Z" />
                        </motion.svg>
                    </div>
                    {/* skills  */}
                    <div className="flex flex-col gap-12 justify-center " ref={skillRef}>
                        <motion.h1 initial={{ x: "-300px" }} animate={isSkillRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className="font-bold text-2xl">Skills</motion.h1>
                        {/* skill list  */}
                        <motion.div initial={{ x: "-300px" }} animate={isSkillRefInView ? { x: 0 } : {}} className="flex gap-4 flex-wrap">
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                React.js
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Next.js
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                CSS
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                SCSS
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Tailwind CSS
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Mongo DB
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Node.js
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                html
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                MySQL
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                express.js
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                C++
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                DSA
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Git
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Restful Web API
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Problem Solving
                            </div>

                        </motion.div>
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: easeInOut }}
                            className="x:0"
                            width="185"
                            height="77"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 62.5"
                        >
                            <path d="M25,45A14,14,0,0,0,39,31V19a14,14,0,0,0-28,0V31A14,14,0,0,0,25,45ZM13,19a12,12,0,0,1,24,0V31a12,12,0,0,1-24,0Z" /><path d="M24,24.5h.09l.2.21a1,1,0,0,0,1.42,0l.2-.21H26v-.09l5.71-5.7-1.42-1.42L26,21.59V11H24V21.59l-4.29-4.3-1.42,1.42L24,24.41Z" />
                        </motion.svg>
                    </div>
                    {/* experience  */}
                    <div className="flex flex-col justify-center pb-48" ref={experienceRef}>
                        <motion.h1 className="font-bold text-2xl mb-16" initial={{ x: "-300px" }} animate={isExperienceRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }}>Experience</motion.h1>
                        {/* Experience list  */}
                        <motion.div initial={{ x: "-300px" }} animate={isExperienceRefInView ? { x: 0 } : {}}>
                            {/* Experience list item  */}
                            <div className="flex justify-between h-48">
                                {/* left  */}
                                <div className="w-1/3">
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-l-lg ">Tech Team Jointhead</div>
                                    <div className="p-3 text-sm italic">Develop the website for E-Summit 2024 along with team of 5</div>
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        Jan 2024 - April 2024
                                    </div>
                                </div>
                                {/* center  */}
                                <div className="w-1/6 flex justify-center">
                                    {/* line  */}
                                    <div className="flex justify-center w-1 h-full bg-gray-600 rounded relative">
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white "></div>
                                    </div>
                                </div>
                                {/* right  */}
                                <div className="w-1/3">

                                </div>
                            </div>

                        </motion.div>

                        {/* Experience list  */}
                        <div>
                            {/* Experience list item  */}
                            <div className="flex justify-between h-48">
                                {/* left  */}
                                <div className="w-1/3">
                                </div>
                                {/* center  */}
                                <div className="w-1/6 flex justify-center">
                                    {/* line  */}
                                    <div className="flex justify-center w-1 h-full bg-gray-600 rounded relative">
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white "></div>
                                    </div>
                                </div>
                                {/* right  */}
                                <div className="w-1/3">
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-l-lg ">Tech Team Jointhead</div>
                                    <div className="p-3 text-sm italic">Develop the website for E-Summit 2024 along with team of 5</div>
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        Jan 2024 - April 2024
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Experience list  */}
                        <div>
                            {/* Experience list item  */}
                            <div className="flex justify-between h-64">
                                {/* left  */}
                                <div className="w-1/3">
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-l-lg ">Tech Team Jointhead</div>
                                    <div className="p-3 text-sm italic">Develop the website for E-Summit 2024 along with team of 5</div>
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        Jan 2024 - April 2024
                                    </div>
                                </div>
                                {/* center  */}
                                <div className="w-1/6 flex justify-center">
                                    {/* line  */}
                                    <div className="flex justify-center w-1 h-full bg-gray-600 rounded relative">
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white "></div>
                                    </div>
                                </div>
                                {/* right  */}
                                <div className="w-1/3">

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                {/* svgcontainer  */}
                <div className="hidden lg:block w-1/2 sticky top-0 z-30 xl:1/2">
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>
    )
}

export default AboutPage