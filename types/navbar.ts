export enum ITEM_TYPES {
    /** DEFAULT | DEFAULT_ICON | HOVER | HOVER_ICON */
    "DEFAULT",
    "DEFAULT_ICON",
    "HOVER",
    "HOVER_ICON"
}

export default interface INavbar<T = {}> {
    RenderDefault(param: T): JSX.Element
    RenderDefaultIcon(param: T): JSX.Element
    RenderHover(param: T): JSX.Element
    RenderHoverIcon(param: T): JSX.Element
}

