"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="flex flex-col gap-20 lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30 ">
        {/* Image */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative flex justify-center items-center">
          <div className="relative sm:w-96 sm:h-96 h-60 w-60  rounded-full overflow-hidden ring-4 ring-black">
            <Image
              src="/mypic.jpeg"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              alt="My Picture"
            />
          </div>
        </div>
        {/* Text */}
        <div className="h-1/2 lg:h-full lg:w-1/2 lg:gap-8 p-10 pt-0 flex flex-col gap-8 items-center justify-center ">
          <div>
            <h1 className="italic text-xl md:text-2xl md:mt-2">Hello! I am Prasuk Jain, a passionate and dedicated third-year B.Tech student specializing in Computer Science at Punjab Engineering College, Chandigarh. I am a Full-Stack Developer with a strong focus on front-end development. I enjoy creating digital experiences that are clean, efficient, and user-friendly.</h1>
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
