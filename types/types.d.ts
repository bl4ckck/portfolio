/**
 * Chip Component
 * ===============
 */
type PropsChip = {
    /** Chip title */
    title: string
    /** Default = false, to determine skill's chips */
    brand: false
    /** background color e.g "#FFFFFF" */
    background?: string
    /** text color e.g "#FFFFFF" | "red" */
    color?: string
} | {
    /** Default = true, to determine skill's chips */
    brand: true
    options: Array<PropsChip>
}
/**
 * ===============
 */