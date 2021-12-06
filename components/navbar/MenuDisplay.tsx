import { ITEM_TYPES, PropsMenuDisplay } from "../../types/navbar";
import MenuItem from "./MenuItem";

const MenuDisplay = (props: PropsMenuDisplay) => {
    if (props.type === "desktop")
        return (
            <>
                <div className="hidden space-x-10 sm:static sm:flex sm:space-x-2">
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
                <div className="hidden sm:flex sm:static sm:items-center sm:space-x-5">
                    {/* TODO: Change linkedin font */}
                    <MenuItem isIcon={true} icon="fa-linkedin" href="https://www.linkedin.com/in/alvin747/" type={ITEM_TYPES.HOVER_ICON} />
                    <MenuItem isIcon={true} icon="fa-mail" href="mailto:alvin.naufal3@gmail.com" type={ITEM_TYPES.HOVER_ICON} />
                    <MenuItem isIcon={true} icon="fa-phone-outline" href="tel:+6287782740685" type={ITEM_TYPES.HOVER_ICON} />
                </div>
            </>
        )
    
    return (
        <>
            <div className={`absolute top-0 left-0 hidden w-1/2 h-screen bg-red-400 `}>
                asd
            </div>
        </>
    )
}

export default MenuDisplay