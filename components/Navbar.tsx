/* Ref
aligning - https://css-tricks.com/almanac/properties/a/align-items/
*/
import React from "react"
import Link from 'next/link'
import { useSpring, animated } from '@react-spring/web'

interface Props {
    isScroll?: boolean
}

type navItem = {
    name: string,
    url: string,
}

// const navItems = [{navItem.name, url}]

const Navbar: React.FC<Props> = (props) => {
    const ani = useSpring({ to: { opacity: 1 }, from: { opacity: 0 },  })
    
    return (
        <div className="z-10 py-5">
            <div className="flex items-center justify-between uppercase md:mx-24">
                <div className="text-2xl font-bold normal-case">
                    <Link href="/">
                        Alvin
                    </Link>
                </div>
                <div className="flex md:space-x-10">
                    <Link href="/projects">
                        Projects
                    </Link>
                    <Link href="/experience">
                        Experience
                    </Link>
                    <Link href="/education">
                        Education
                    </Link>
                </div>
                <div className="flex space-x-5">
                    <div className="">
                        LINKEDIN
                    </div>
                    <div className="">
                        EMAIL
                    </div>
                    <div className="">
                        PHONE
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar