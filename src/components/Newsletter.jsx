const Newsletter = () => {
	return (
		<div className='w-full px-4 py-16 text-white'>
			<div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
				<div className='lg:col-span-2'>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
						Want tips & tricks to optmize your flow !?
					</h1>
					<p>Sign up to our newsletter and stay up to date.</p>
				</div>
				<div className='my-4'>
					<div className='w-full flex flex-col justify-between items-center sm:flex-row'>
						<input
							type='email'
							placeholder='Enter Email'
							name='email'
							id='emailInput'
							className='p-3 flex w-full rounded-full border-none outline-none text-black text-[15px]'
						/>
						<button className='bg-[#009dfa] text-black w-[200px] rounded-full font-medium ml-4 my-6 px-6 py-3'>
							Notify Me
						</button>
					</div>
					<p>
						We care about the protection of your data. Read our{' '}
						<span className='text-[#009dfa]'>Privacy Policy.</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
