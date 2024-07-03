"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      <div className="flex flex-col gap-20 lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30 ">
        {/* Image */}
        <div className="h-1/2 lg:h-full lg:w-1/2 rounded-full relative ">
          <Image src="/mypic.jpeg" fill className="h-48 w-48 rounded-full" />
        </div>
        {/* Text */}
        <div className="h-1/2 lg:h-full lg:w-1/2 lg:gap-8 flex flex-col gap-8 items-center justify-center ">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">There are three responses to a piece of design - yes, no, WOW! Wow is the one to aim for...</h1>
            <p className="italic text-xl md:text-2xl md:mt-2">-Milton Glaser</p>
          </div>
          <div className="flex gap-8 w-full justify-center lg:justify-normal">
            <Link href="/portfolio">
            <button className="rounded-md p-2 bg-black text-white ring-1 ring-black">View My Work</button>
            </Link>
            <Link href="/contact">
            <button className="rounded-md p-2  ring-1 ring-black">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Homepage;
