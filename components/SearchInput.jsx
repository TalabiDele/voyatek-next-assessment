import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

const SearchInput = () => {
	return (
		<div>
			<div className=' relative'>
				<input
					type='text'
					className=' bg-[#F0F2F5] border-none outline-none py-[0.5rem] px-[2rem] rounded-md w-[40vw] text-[##475367]'
					placeholder='Search here'
				/>
				<div className=' absolute top-3 left-[0.5rem] text-[#475367]'>
					<IoSearchOutline />
				</div>
			</div>
		</div>
	)
}

export default SearchInput
