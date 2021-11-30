//https://isamatov.com/conditional-props-react-typescript/#one-or-the-other
import React from "react"
import Link from "next/link"
import { animated, useSpring } from "@react-spring/web";
import INavbar, { ITEM_TYPES, PropsNavbar } from "../../types/navbar";

// const MenuItem: React.FC<Props<ITEM_TYPES>> = (props, nav: INavbar<{}> ) => {
const MenuItem: React.FC<PropsNavbar> = (props) => {
    const iconProps = props.isIcon ? props : undefined
    
    const [isHover, setHover] = React.useState<boolean>(false);
    const fadeAnimation = useSpring({ to: { opacity: isHover === false ? 1 : 0.5, borderLeftWidth: isHover ? "5px" : "0", borderRightWidth: isHover ? "5px" : "0"}, from: { opacity: 1 }, delay: 0 })
// props.
    const RenderMenu: INavbar<{}> = {
        RenderDefault() {
            return (
                <Link href={props.href}>
                    {props.children}
                </Link>
            )
        },
        RenderDefaultIcon() {
            return (
                <a href={props.href} target="_blank">
                    <i className={`"cursor-pointer fas ${iconProps?.icon}`} style={{ fontSize: props.isIcon ? props.size : "1.125rem", lineHeight: props.isIcon ? props.lineHeight : "1.75rem", padding: iconProps?.padding }}></i>
                </a>
            )
        },
        RenderHover() {
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
        RenderHoverIcon() {
            return (
                <a href={props.href} target="_blank" style={{ padding: iconProps?.padding }}>
                    <i className={`cursor-pointer fas ${iconProps?.icon}`} style={{ fontSize: iconProps?.size ? iconProps?.size : "1.125rem", lineHeight: iconProps?.lineHeight ? iconProps.lineHeight : "1.75rem"}}></i>
                </a>
            )
        }
    }

    if (props.type === ITEM_TYPES.DEFAULT_ICON)
        return RenderMenu.RenderDefaultIcon()
    else if (props.type === ITEM_TYPES.HOVER_ICON)
        return RenderMenu.RenderHoverIcon()
    else if (props.type === ITEM_TYPES.HOVER)
        return RenderMenu.RenderHover()
    
    return <RenderMenu.RenderDefault />
}

MenuItem.defaultProps = {
    isIcon: false,
    type: ITEM_TYPES.DEFAULT
}

export default MenuItem