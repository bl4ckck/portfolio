//https://wanago.io/2020/03/09/functional-react-components-with-generic-props-in-typescript/
//https://www.youtube.com/watch?v=vXh4PFwZFGI&ab_channel=BrunoAntunes
export enum ITEM_TYPES {
    /** DEFAULT | DEFAULT_ICON | HOVER | HOVER_ICON */
    "DEFAULT",
    "DEFAULT_ICON",
    "HOVER",
    "HOVER_ICON"
}

export interface BasePropsNavbar {
    /** URL String */
    readonly isIcon: false
    readonly type: ITEM_TYPES.DEFAULT | ITEM_TYPES.HOVER
    readonly href: string
}

export interface BaseIconProps extends Omit<BasePropsNavbar, 'isIcon' | 'type'> {
    readonly isIcon: true
    readonly type: ITEM_TYPES.DEFAULT_ICON | ITEM_TYPES.HOVER_ICON
    /** icon example: "fa-YourIcon" */
    readonly icon: string
    /** Default value: 1.125rem (18px) */
    readonly size?: string
    /** Default value: 1.75rem (28px) */
    readonly lineHeight?: string
    readonly margin?: string
}

export type PropsNavbar = BasePropsNavbar | BaseIconProps
// export interface PropsNavbar extends BaseIconProps {}

export type PropsMenuDisplay = {type: "desktop"} | {type: "mobile"}

export interface INavbarMenu<T = {}, J = JSX.Element> {
    RenderDefault(param?: T): J
    RenderDefaultIcon(param?: T): J
    RenderHover(param?: T): J
    RenderHoverIcon(param?: T): J
}