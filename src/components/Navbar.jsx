"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link"
import { usePathname } from "next/navigation";
const links = [

    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
];

function Navbar() {
    const pathName = usePathname();
    const [open, setOpen] = useState(false);

    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255,255,255)",
        }
    }

    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0
        }
    }

    const bottomVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255,255,255)",
        }
    }

    const listVariants = {
        closed: {
            x: "100vw",
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            }
        }
    }
    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        }
    }

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30">
            <div className="hidden md:flex gap-4 w-1/3 justify-start z-10">
                {links.map(link => (
                    <Link key={link.title} href={link.url} className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`} >{link.title}</Link>
                ))}
            </div>
            {/* LOGO */}
            <div className="md:hidden lg:flex w-1/3 justify-center">
                <Link href="/" className="text-sm bg-black w-24 rounded-md p-1 flex justify-center items-center">
                    <span className="text-white mr-1">Prasuk</span>
                    <span className="bg-white rounded-sm p-1">Jain</span>
                </Link>
            </div>
            {/* SocialMedia */}
            <div className="hidden md:flex gap-6 w-1/3 justify-center">
                <Link href="https://github.com/prasukjain07">
                    <img src="/github.png" className="h-6 w-6" />
                </Link>
                <Link href="https://www.instagram.com/prasukjain_07">
                    <img src="/instagram.png" className="h-6 w-6" />
                </Link>
                <Link href="https://www.linkedin.com/in/prasuk-jain-1053b5244/">
                    <img src="/linkedin.png" className="h-6 w-6" />
                </Link>
            </div>
            {/* RESPONSIVE MENU */}
            <div className="md:hidden">
                <button onClick={(() => setOpen(!open))} className="flex h-8 w-10 flex-col justify-between z-50 relative">
                    {/* Menu Button */}
                    <motion.div
                        variants={topVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left">
                    </motion.div>
                    <motion.div
                        variants={centerVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded">
                    </motion.div>
                    <motion.div
                        variants={bottomVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left">
                    </motion.div>
                </button>
                {/* MENU LIST */}
                {open && (
                    <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl z-40">
                        {links.map(link => (
                            <motion.div key={link.title} variants={listItemVariants}>
                                <Link href={link.url} >{link.title}</Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default Navbar