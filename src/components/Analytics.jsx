import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
	return (
		<div className='w-full bg-white py-16 px-4'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
				<img
					className='w-[500px] mx-auto my-4'
					src={Laptop}
					alt='A laptop with graphs on the screen and around.'
				/>
				<div className='flex flex-col justify-center'>
					<p className='text-[#009dfa] font-bold'>
						DATA ANALYTICS DASHBOARD
					</p>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
						Manage Data Analytics Centrally
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Corporis, temporibus sed! Impedit nobis quae minus atque quis!
						Nam at quas modi perferendis? Libero, eaque ut voluptas quam
						cumque veritatis maxime, itaque dignissimos esse doloribus
						vero. Officiis laboriosam, dolor illum eveniet laudantium
						sapiente hic vel, eius vitae ratione placeat ullam iure.
					</p>
					<button className='bg-black text-[#009dfa] w-[200px] rounded-full font-medium my-6 mx-auto md:mx-0 py-3'>
						Let's Explore Right Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Analytics;
