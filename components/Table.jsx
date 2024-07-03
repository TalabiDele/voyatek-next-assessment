import React from 'react'
import { HiOutlineChevronUpDown } from 'react-icons/hi2'

const Table = () => {
	return (
		<div>
			{/* <table class='table-fixed'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email Address</th>
						<th>Role</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
						<td>Malcolm Lockyer</td>
						<td>1961</td>
						<td>1961</td>
					</tr>
				</tbody>
			</table> */}

			<div className=' grid grid-cols-4 mt-[1rem] text-[#1D2739]'>
				<div className=' flex items-center text-sm'>
					Name <HiOutlineChevronUpDown />
				</div>
				<div className=' flex items-center text-sm'>
					Email Address <HiOutlineChevronUpDown />
				</div>
				<div className=' flex items-center text-sm'>
					Role <HiOutlineChevronUpDown />
				</div>
				<div className=' flex items-center text-sm'>
					Action <HiOutlineChevronUpDown />
				</div>
			</div>

			<div className=' grid grid-cols-4 mt-[1rem] text-[#1D2739]'>
				<div className=' flex items-center text-sm'>Taiwo Isaac</div>
				<div className=' flex items-center text-sm'>taiwoisaac@email.com</div>
				<div className=' flex items-center text-sm'>Administrator</div>
				<div className=' flex items-center text-sm'>Edit</div>
			</div>
		</div>
	)
}

export default Table
