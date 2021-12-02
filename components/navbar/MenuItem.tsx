//https://isamatov.com/conditional-props-react-typescript/#one-or-the-other
import React from "react"
import Link from "next/link"
import { animated, useSpring } from "@react-spring/web";
import { INavbarMenu, ITEM_TYPES, PropsNavbar } from "../../types/navbar";

const MenuItem: React.FC<PropsNavbar> = (props) => {
    const iconProps = props.isIcon ? props : undefined
    
    const [isHover, setHover] = React.useState<boolean>(false);
    const fadeAnimation = useSpring({ opacity: isHover ? 0.5 : 1, delay: 0.8 })
    const slideUpAnimation = useSpring({ y: isHover ? -3 : 0, color: isHover ? "#43a48c" : "black"})
    
    const RenderMenu: INavbarMenu<{}> = {
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
                    <i className={`cursor-pointer fas ${iconProps?.icon}`} style={{ fontSize: iconProps?.size ? iconProps?.size : "1.125rem", lineHeight: iconProps?.lineHeight ? iconProps.lineHeight : "1.75rem" }} />
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
                <animated.a href={props.href} target="_blank" style={slideUpAnimation} onMouseOver={(e) => {
                    e.preventDefault()
                    setHover(true)
                    console.log(isHover)
                }} onMouseOut={(e) => {
                    e.preventDefault()
                    setHover(false)
                }}>
                    <i className={`cursor-pointer fas ${iconProps?.icon}`} style={{ fontSize: iconProps?.size ? iconProps?.size : "1.125rem", lineHeight: iconProps?.lineHeight ? iconProps.lineHeight : "1.75rem"}} />
                </animated.a>
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