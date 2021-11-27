import type { NextPage } from 'next'
import Head from 'next/head'
import MainLayout from '../components/MainLayout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="mt-1 bg-white h-80">
        test lagi
      </div>
      <div className="mt-1 bg-gray-drib1 h-80">
        test lagi
      </div>
      <div className="mt-1 bg-white h-80">
        test lagi
      </div>
    </>
  )
}

export default Home
