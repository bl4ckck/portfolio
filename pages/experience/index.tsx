import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import MainLayout from "../../components/MainLayout"

type Exp = {
    author: string
    content: string
}
export const getStaticProps: GetStaticProps = async (context) => {
    const testAja: Exp = {
        author: "awe",
        content: "ea"
    }
    return {
        props: testAja
    }
}

const Experience: NextPage<Exp> = (props) => {
    console.log(props)
    //TODO: log / timline UI
    return (
        <>
            <Head>
                <title>Experiences</title>
            </Head>
            <div>Experience Aja {props.author}</div>
        </>
    )
}

export default Experience