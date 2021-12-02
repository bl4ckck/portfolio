import React from "react"

const Chip: React.FC<PropsChip> = (props) => {
    const dProps = props.brand ? undefined : props
    const bProps = props.brand ? props : undefined

    // TODO: Chip for brand
    return (
        <div className="flex items-center px-2 py-1 mx-1 my-1 space-x-2 text-sm font-thin text-white duration-500 transform translate-y-0 bg-gray-400 rounded-lg cursor-pointer min-w-24 hover:bg-gray-drib2-600 hover:-translate-y-1">
            <div className="w-2 h-2 bg-white rounded-50" />
            <p>{dProps?.title}</p>
        </div>
    )
}

Chip.defaultProps = {
    brand: false
}

export default Chip