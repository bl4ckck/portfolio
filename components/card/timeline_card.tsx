import Chip from "../chip"
import { DefaultValueBrandChip } from "../../constants"

const TimelineCard = (): JSX.Element => {
    return (
        <div className="max-w-lg px-2 py-2 mr-5 text-sm border shadow-md cursor-pointer x-2 border-t-1 rounded-xl">
            <div className="flex flex-col space-x-2 lg:flex-row">
                <div>
                    <div className="text-lg">
                        TBClear
                    </div>
                    <div className="flex flex-none">
                        <Chip title="Freelance" background="rgba(59, 130, 246, 1)" />
                    </div>
                    <div className="font-thin text-gray-500">
                        Feb - Mar (2 month)
                    </div>
                </div>
                <p className="px-1 border-l-2 text-gray-dark">
                    Lorem lorem vero est ipsum est ipsum clita lorem. Gubergren dolore accusam amet sadipscing takimata et nonumy clita et, erat.
                </p>
            </div>
            <hr className="my-2" />
            {/* TODO: Selectable brand, change background color */}
            <Chip brand={true} options={DefaultValueBrandChip.options} />
        </div>
    )
}

export default TimelineCard