import { animated, useSpring } from "@react-spring/web";
import Link from "next/link"
import React from "react"

export enum ITEM_TYPES {
    /** DEFAULT | NO_HOVER */
    "DEFAULT",
    "HOVER"
}

type Props<T> = {
    /** URL String */
    href: string,
    type?: T
}

const MenuItem: React.FC<Props<ITEM_TYPES>> = (props) => {
    const [isHover, setHover] = React.useState<boolean>(false);
    const fadeAnimation = useSpring({ to: { opacity: isHover === false ? 1 : 1, borderLeftWidth: isHover ? "5px" : "0", borderRightWidth: isHover ? "5px" : "0"}, from: { opacity: 1 }, delay: 0 })

    if (props.type === ITEM_TYPES.HOVER)
        return (
            <animated.div style={fadeAnimation} className="px-3 border-gray-drib2-500 rounded-xl"
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
    return (
        <Link href={props.href}>
            {props.children}
        </Link>
    )

}

export default MenuItem