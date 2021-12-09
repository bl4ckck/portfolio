// flex cheatsheet https://stackoverflow.com/questions/42613359/how-does-flex-wrap-work-with-align-self-align-items-and-align-content
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Chip from '../components/chip'
import MainLayout from '../components/MainLayout'
import Timeline from '../components/timeline'

import { DefaultValueBrandChip } from "../constants"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<div className="mx-8 mb-10 mt-28">
				<div className="grid grid-cols-1 md:h-full md:grid-cols-3">
					<p className="text-4xl text-center col-span-full">
						<span className="font-semibold">I'm Alvin Naufal</span> <hr className="max-w-xs mx-auto my-2 border-black border-1" /> Frontend Developer Based in Indonesia
					</p>
					<div className='mt-4'>
						<div className="mx-4 rounded-full bg-gray-drib2">
							<img className="block max-w-full mx-auto" style={{ minHeight: "380px", maxHeight: "380px" }} src="/assets/images/profile.png" />
						</div>
					</div>
					<div className="">
						<p className="mt-8 font-semibold text-gray-500 mb-7">
							SKILLS
						</p>
						<Chip brand={true} options={DefaultValueBrandChip.options} />
						<div className="mt-8 font-semibold text-gray-500 mb-7">
							ABOUT ME
						</div>
						<p>
							I have experience building several projects for the clients. My interest are Mobile, and also Web development. Experienced with React.js, Node.js, Flutter, React Native, Laravel, JavaScript, MySQL, and PostgreSQL. My approach of get the things done is “be curious person until your goal is reached”.
						</p>
						<p className="mt-8 font-semibold text-gray-500 mb-7">
							CONTACT
						</p>
						<p>
							Bekasi, Indonesia
						</p>
						<a href="mailto:alvin.naufal3@gmail.com" className="mt-1 font-bold underline">
							<i className="cursor-pointer fas fa-mail" /> alvin.naufal3@gmail.com
						</a>
					</div>
					<div>
						<p className="mt-8 font-semibold text-gray-500 mb-7">
							EXPERIENCE
						</p>
						<Timeline title="awe" />
						<Timeline title="awe" />
						<button className='w-full border-2 border-black'>View More</button>
					</div>
				</div>
			</div>
			<div className="bg-gray-200 h-80">
				
			</div>
			<div className="mt-1 bg-white h-80">
				test lagi
			</div>
		</>
	)
}

export default Home
