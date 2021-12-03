import React from "react"
import { PropsChip } from "../types/types"

const Chip = (props: PropsChip) => {
    if (props.brand)
        return (
            <div className="flex flex-wrap items-end content-start">
                {props.options.map((item, i) => {
                    return (
                        <div className="flex items-center px-2 mx-1 my-1 space-x-2 text-sm font-thin duration-500 transform translate-y-0 bg-white rounded-lg cursor-pointer select-none border-1 shadow-cust2 min-w-22 hover:-translate-y-1">
                            <i className={"fas " + item.icon} />
                            <p className="text-gray-800">{item.title}</p>
                        </div>
                    )
                })}
            </div>
        )
    return (
        <div className="flex items-center px-2 mx-1 my-1 space-x-2 text-sm font-thin text-white duration-500 transform translate-y-0 bg-gray-400 rounded-lg cursor-pointer select-none min-w-24 hover:bg-gray-drib2-600 hover:-translate-y-1">
            <div className="w-2 h-2 bg-white rounded-50" />
            <p>{props.title}</p>
        </div>
    )
}

export default Chip