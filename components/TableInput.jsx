import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

const TableInput = () => {
	return (
		<div>
			<div className=' relative'>
				<input
					type='text'
					className=' border border-[
            #CBD5E1] outline-none py-[0.5rem] px-[2rem] rounded-md text-sm text-[##475367]'
					placeholder='Search here'
				/>
				<div className=' absolute top-3 left-[0.5rem] text-[#475367]'>
					<IoSearchOutline />
				</div>
			</div>
		</div>
	)
}

export default TableInput
