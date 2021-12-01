/* Ref
aligning - https://css-tricks.com/almanac/properties/a/align-items/
*/
import React from "react"
import Link from 'next/link'
import { useSpring, animated } from '@react-spring/web'
import { useScroll } from "../../hooks/useScroll"
import MenuItem from "./MenuItem"
import { ITEM_TYPES } from "../../types/navbar"
// INavbar
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

    const defaultProps = {boxShadow: "none"}
    
    const fadeAnimation = useSpring({ boxShadow: position.y > 0 ? "0 1px 2px 0 rgb(0 0 0 / 10%)" : "0 0px 0px 0 rgb(0 0 0 / 0%)"})
    const bounceAnimation = useSpring({ x: position.y > 0 ? 10 : 0 })

    return (
        <animated.div style={fadeAnimation} className="fixed top-0 z-10 w-full py-5 bg-white">
            <div className="flex items-center justify-between font-semibold uppercase md:mx-24">
                <animated.div style={
                    bounceAnimation
                } className="px-2 ml-6 font-mono text-2xl font-bold normal-case border-2 border-black md:ml-0 rounded-2xl">
                    <Link href="/">
                        alvin.
                    </Link>
                </animated.div>
                <div className="invisible md:flex md:visible md:space-x-10">
                    <MenuItem isIcon={false} href="/projects" type={ITEM_TYPES.HOVER}>
                        Projects
                    </MenuItem>
                    <MenuItem isIcon={false} href="/experience" type={ITEM_TYPES.HOVER}>
                        Experience
                    </MenuItem>
                    <MenuItem isIcon={false} href="/education" type={ITEM_TYPES.HOVER}>
                        Education
                    </MenuItem>
                </div>
                <div className="invisible md:flex md:visible md:items-center md:space-x-5">
                    {/* TODO: Change linkedin font */}
                    <MenuItem isIcon={true} icon="fa-linkedin" href="https://www.linkedin.com/in/alvin747/" type={ITEM_TYPES.HOVER_ICON} />
                    <MenuItem isIcon={true} icon="fa-mail" href="mailto:alvin.naufal3@gmail.com" type={ITEM_TYPES.HOVER_ICON} />
                    <MenuItem isIcon={true} icon="fa-phone-outline" href="tel:+6287782740685" type={ITEM_TYPES.HOVER_ICON} />
                </div>
            </div>
        </animated.div>
    )
}

export default Navbar