const Card = props => {
	const {
		logo,
		qty,
		amount,
		storage,
		nbUsers,
		during,
		cardDesign,
		btnDesign,
	} = props;

	
	return (
		<>
			<div
				className={`${cardDesign} w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300`}
			>
				<img
					src={logo}
					alt=''
					className='w-20 mx-auto mt-[-3rem] bg-transparent'
				/>
				<h2 className='text-2xl font-bold text-center py-8'>{qty} User</h2>
				<p className='text-center text-4xl font-bold'>${amount}</p>
				<div className='text-center font-medium'>
					<p className='py-2 border-b mx-8 mt-8'>{storage} Storage</p>
					<p className='py-2 border-b mx-8'>
						{nbUsers} Granted User{nbUsers >= 2 && 's'}
					</p>
					<p className='py-2 border-b mx-8'>For {during}</p>
				</div>
				<button
					className={`${btnDesign} w-[200px] rounded-full font-medium mx-auto my-6 px-6 py-3`}
				>
					Start Trial
				</button>
			</div>
		</>
	);
};

export default Card;
