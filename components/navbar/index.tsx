/* Ref
aligning - https://css-tricks.com/almanac/properties/a/align-items/
*/
import React from "react"
import Link from 'next/link'
import { useSpring, animated } from '@react-spring/web'
import { useScroll } from "../../hooks/useScroll"
import MenuItem from "./MenuItem"
import { ITEM_TYPES } from "../../types/navbar"
import MenuDisplay from "./MenuDisplay"
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

    const [isOpenMenu, setOpenMenu] = React.useState<boolean>(false);

    const fadeAnimation = useSpring({ boxShadow: position.y > 0 ? "0 1px 2px 0 rgb(0 0 0 / 10%)" : "0 0px 0px 0 rgb(0 0 0 / 0%)" })
    const bounceAnimation = useSpring({ x: position.y > 0 ? 10 : 0 })

    return (
        <>
            <animated.div style={fadeAnimation} className="fixed top-0 z-10 w-full py-5 bg-white">
                <div className="flex items-center justify-between mx-4 font-semibold uppercase md:mx-16 lg:mx-24">
                    <animated.div style={
                        bounceAnimation
                    } className="px-2 ml-6 font-mono text-2xl font-bold normal-case border-2 border-black md:ml-0 rounded-2xl">
                        <Link href="/">
                            alvin.
                        </Link>
                    </animated.div>
                    <i className="mr-4 text-3xl cursor-pointer fas fa-th-large sm:hidden" onClick={(e) => {
                        e.preventDefault()
                        setOpenMenu(isOpenMenu ? false : true)
                        console.log("kebuka")
                    }} />
                    {MenuDisplay({ type: "desktop" })}
                    <div className={`absolute shadow-xl top-0 right-0 w-1/2 z-50 h-screen transform duration-150 translate-x-5 bg-white 
                    ${isOpenMenu === true ? "visible opacity-100 -translate-x-0" : "invisible opacity-0"}`}>
                        <div className="flex flex-col items-center content-center justify-center text-sm">
                            <div className="">
                                awe
                            </div>
                        </div>
                    </div>
                    {isOpenMenu ? <div className="fixed inset-0 z-40 bg-black opacity-10" onClick={(e) => {
                        e.preventDefault()
                        setOpenMenu(false)
                    }} /> : null}
                </div>
            </animated.div>
        </>
    )
}

export default Navbar