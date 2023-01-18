import Card from './Card';

import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {

	return (
		<div className='w-full py-[10rem] px-4 bg-white'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
				<Card
					logo={Single}
					qty='Single'
					amount='500'
					storage='500GB'
					nbUsers='1'
					during='3 months'
					cardDesign='my-4'
					btnDesign='bg-[#009dfa] text-black'
				/>
				
					<Card
						logo={Double}
						qty='Double'
						amount='2000'
						storage='1To'
						nbUsers='3'
						during='7 months'
						cardDesign='bg-gray-100 md:my-0 my-8'
						btnDesign='bg-black text-[#009dfa]'
					/>

				<Card
					logo={Triple}
					qty='Triple'
					amount='5000'
					storage='2To'
					nbUsers='5'
					during='1 year'
					cardDesign='my-4'
					btnDesign='bg-[#009dfa] text-black'
				/>
			</div>
		</div>
	);
};

export default Cards;
