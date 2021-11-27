import type { NextPage } from "next"
import Head from 'next/head'
import Image from 'next/image'
import { useScroll } from "../hooks/useScroll"
import styles from '../styles/Home.module.css'
import Navbar from "./Navbar"

type Props = {
    title: string,
    description: string
}

const MainLayout: NextPage<Props> = (props) => {    
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={props.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="flex flex-col min-h-screen">
                {props.children}
            </main>
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </>
    )
}

export default MainLayout