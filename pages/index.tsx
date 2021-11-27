import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../components/MainLayout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="bg-white mt-28">
        <div className="grid grid-rows-1 md:h-96 md:grid-cols-3">
          <div className="mx-12">
            <div className="text-sm font-semibold text-gray-500 mb-7">
              ABOUT ME
            </div>
            <div className="text-sm">
              I have experience building several projects for the clients. My interest are Mobile, and also Web development. Experienced with React.js, Node.js, Flutter, React Native, Laravel, JavaScript, MySQL, and PostgreSQL. My approach of get the things done is “be curious person until your goal is reached”.
            </div>
            <div className="mt-8 text-sm font-semibold text-gray-500 mb-7">
              CONTACT
            </div>
            <div className="text-sm">
              Bekasi, Indonesia
            </div>
          </div>
          <div className="">1</div>
          <div className="rounded-full bg-gray-drib2">
            {/* <div className='block mx-auto'> */}
            <img className="block max-w-full mx-auto" style={{ minHeight: "380px", maxHeight: "380px" }} src="/assets/images/profile.png" />
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="h-80">
        test lagi
      </div>
      <div className="mt-1 bg-white h-80">
        test lagi
      </div>
    </>
  )
}

export default Home
