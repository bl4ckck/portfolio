// choose union type https://stackoverflow.com/questions/64527150/in-typescript-how-to-select-a-type-from-a-union-using-a-literal-type-property
/**
 * Chip Component
 * ===============
 */
type brandOptions<T> = Extract<T, { brand?: false }> 

export type PropsChip = {
    /** Default = false, to determine skill's chips */
    brand?: false
    /** Chip title */
    title: string
    /** background color e.g "#FFFFFF" */
    background?: string
    /** text color e.g "#FFFFFF" | "red" */
    color?: string
} | {
    /** Default = true, to determine skill's chips */
    brand: true
    options: Array<brandOptions<PropsChip> & {icon: string}>
}
/**
 * Timline Component
 * ===============
 */
export type PropsTimeline = {
    date?: string
    year?: number
    isNested?: boolean
    color?: string
    title?: string
    subTitle?: string
}