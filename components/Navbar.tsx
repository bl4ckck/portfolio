/* Ref
aligning - https://css-tricks.com/almanac/properties/a/align-items/
*/
import React from "react"
import Link from 'next/link'
import { useSpring, animated } from '@react-spring/web'
import { useScroll } from "../hooks/useScroll"
import MenuItem, { ITEM_TYPES } from "./navbar/MenuItem"

interface Props {
    isScroll?: boolean
}

// const navItems = [{navItem.name, url}]

const Navbar: React.FC<Props> = (props) => {
    const {
        scrolling,
        time,
        speed,
        direction,
        position,
        relativeDistance,
        totalDistance
    } = useScroll({
        onScrollStart: () => { },
        onScrollEnd: () => { }
    });
    console.log(position.y > 0 ? "tampil navbar" : "awe")

    const [val, toggle] = React.useState<boolean>(false);
    
    const fadeAnimation = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 200 })
    const bounceAnimation = useSpring({ from: { x: position.y > 0 ? -10 : 0 }, to: { x: position.y > 0 ? 10 : 0 } })

    return (
        <animated.div style={fadeAnimation} className={"fixed w-full top-0 z-10 bg-white py-5" + `${position.y > 0 ? " shadow-cust2" : ""} `}>
            <div className="flex items-center justify-between font-semibold uppercase md:mx-24">
                <animated.div style={
                    bounceAnimation
                } className="px-2 font-mono text-2xl font-bold normal-case border-2 border-black rounded-2xl">
                    <Link href="/">
                        alvin.
                    </Link>
                </animated.div>
                <div className="flex md:space-x-10">
                    <MenuItem href="/projects" type={ITEM_TYPES.HOVER}>
                        Projects
                    </MenuItem>
                    <MenuItem href="/experience" type={ITEM_TYPES.HOVER}>
                        Experience
                    </MenuItem>
                    <MenuItem href="/education" type={ITEM_TYPES.HOVER}>
                        Education
                    </MenuItem>
                </div>
                <div className="flex space-x-5">
                    <a href="https://www.linkedin.com/in/alvin747/" target="_blank">
                        <i className="text-lg cursor-pointer fas fa-linkedin"></i>
                    </a>
                    <a href="mailto:alvin.naufal3@gmail.com">
                        <i className="text-xl cursor-pointer fas fa-mail"></i>
                    </a>
                    <a href="tel:+6287782740685">
                        <i className="text-xl cursor-pointer fas fa-phone-outline"></i>
                    </a>
                </div>
            </div>
        </animated.div>
    )
}

export default Navbar