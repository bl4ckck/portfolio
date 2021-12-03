
import { PropsChip } from "../types/types"

type brandOptions = Extract<PropsChip, { brand?: true }>

export const DefaultValueBrandChip: brandOptions = {
    brand: true,
    options: [
        {
            icon: "fa-react",
            title: "React Js",
        },
        {
            icon: "fa-react",
            title: "React Native"
        },
        {
            icon: "fa-node",
            title: "Node.js"
        },
        {
            icon: "fa-node",
            title: "Express.js"
        },
        {
            icon: "fa-flutter",
            title: "Flutter"
        },
        {
            icon: "fa-go",
            title: "Go"
        },
        {
            icon: "fa-php",
            title: "PHP"
        },
        {
            icon: "fa-laravel",
            title: "Laravel"
        },
        {
            icon: "fa-codeigniter",
            title: "Codeigniter"
        },
        {
            icon: "fa-postgresql",
            title: "PostgreSQL"
        },
    ]
}