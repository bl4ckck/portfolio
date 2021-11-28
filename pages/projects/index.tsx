import type { GetStaticProps, NextPage, NextPageContext } from "next"
import Head from "next/head"
import MainLayout from "../../components/MainLayout"

type Post = {
    author: string
    content: string
}
export const getStaticProps: GetStaticProps = async (context) => {
    const testAja: Post = {
        author: "awe",
        content: "ea"
    }
    return {
        props: testAja
    }
}

const Project: NextPage<Post> = (props) => {
    console.log(props)
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <div>Test Aja {props.author}</div>
        </>
    )
}

export default Project