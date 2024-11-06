'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Card } from './card';
// import Button from 

export default function Banner (){
	const handleOnClick = () => {
		console.log('clicked: hello!')
	}
	return (
		<>
			<Card className = "flex rounded-lg my-20 items-center px-20 w-full gap-10">
			<div className="flex flex-col py-10 items-center">
				<h1 className="text-black text-center">Coffee <span className = "text-amber-500">Connoisseur</span></h1>
				<Link href="/shops">
					<div className = "group relative flex my-10">
						<div className = "w-full absolute flex opacity-15 overflow-hidden w-160 h-full mix-blend-screen z-10 will-change-transform">
							<div className = "-skew-x-[45deg] bg-white p-10 h-full w-[30px] overflow-hidden group-hover:translate-x-64 -translate-x-60 transition-transform  ease-in-out duration-700"/>
						</div>
						<button 

							className = {
								`bg-amber-500
								shadow-sm shadow-stone-300
								hover:scale-[102%] hover:shadow-md
								active:scale-100 active:shadow-sm
								transition-all
								group-hover:bg-amber-500 group-hover:scale-[102%]
								duration-1000
								group-hover:shadow-md
								duration-700
								`
							}
							onClick = {handleOnClick}
						>
							Discover Local Shops
						</button>
					</div>
				</Link>
				{/* <h2 className="italic text-xl self-center text-amber-500 opacity-60">Discover local coffee shops</h2> */}
			</div>
				<div className="flex flex-col items-center justify-center w-full">
					<div className = "flex flex-col items-center">
						<Image
							className='mix-blend-multiply'
							src = "https://opendoodles.s3-us-west-1.amazonaws.com/coffee.gif"
							width={400}
							height={400}
							loading = "lazy"
							alt = "coffee lover"
						/>
						
					</div>
					
					
				</div>
			</Card>
		</>
	)
}