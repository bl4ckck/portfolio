import React from "react"
import Link from "next/link"
import { animated, useSpring } from "@react-spring/web";
import INavbar, { ITEM_TYPES } from "../../types/navbar";

type Props<T> = {
    /** URL String */
    href: string
    type: T
}

// const MenuItem: React.FC<Props<ITEM_TYPES>> = (props, nav: INavbar<{}> ) => {
const MenuItem: React.FC<Props<ITEM_TYPES>> = (props) => {
    const [isHover, setHover] = React.useState<boolean>(false);
    const fadeAnimation = useSpring({ to: { opacity: isHover === false ? 1 : 0.5, borderLeftWidth: isHover ? "5px" : "0", borderRightWidth: isHover ? "5px" : "0"}, from: { opacity: 1 }, delay: 0 })

    const RenderMenu: INavbar<{}> = {
        RenderDefault(param) {
            return (
                <Link href={props.href}>
                    {props.children}
                </Link>
            )
        },
        RenderDefaultIcon(param) {
            return (
                <div></div>
            )
        },
        RenderHover(param) {
            return (
                <animated.div style={fadeAnimation} className="px-3 border-black rounded-xl"
                    onMouseOver={(e) => {
                        e.preventDefault()
                        setHover(true)
                        console.log(isHover)
                    }} onMouseOut={(e) => {
                        e.preventDefault()
                        setHover(false)
                    }}>
                    <Link href={props.href}>
                        {props.children}
                    </Link>
                </animated.div>
            )
        },
        RenderHoverIcon(param) {
            return (
                <div></div>
            )
        }
    }

    if (props.type === ITEM_TYPES.DEFAULT_ICON)
        return <RenderMenu.RenderDefaultIcon />
    else if (props.type === ITEM_TYPES.HOVER_ICON)
        return <RenderMenu.RenderHoverIcon />
    else if (props.type === ITEM_TYPES.HOVER)
        return <RenderMenu.RenderHover />
    
    return <RenderMenu.RenderDefault />
}

MenuItem.defaultProps = {
    type: ITEM_TYPES.DEFAULT
}

export default MenuItem