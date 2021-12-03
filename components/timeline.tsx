import { PropsTimeline } from "../types/types"
import Image from "next/image"
import TimelineCard from "./card/timeline_card"

const Timeline = (props: PropsTimeline): JSX.Element => {    
    return (
        <>
            <div className="flex mt-4 space-x-4">
                {/* LINE */}
                <div className="flex flex-col items-center space-y-2 flex-nowrap">
                    <Image src="/assets/images/hexagon.svg" width={35} height={35} />
                    <div className="h-full border border-gray-500 border-dashed rounded-2xl" style={{ width: "0.11rem", maxHeight: "3rem" }} />
                    <div className="">2018</div>
                    <div className="h-full border border-gray-600 rounded-2xl" style={{ width: "0.11rem" }} />
                </div>
                <div className="flex-col w-full h-full space-y-2">
                    <TimelineCard />
                </div>
            </div>
        </>
    )
}

export default Timeline