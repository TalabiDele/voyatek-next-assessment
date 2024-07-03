import Table from '@/components/Table'
import React from 'react'

const UserDashboard = () => {
	return (
		<div>
			<div className=' relative left-[20rem] top-[7rem] pb-[10rem] z-0'>
				<p className=' text-sm text-[#98A2B3]'>
					Settings / Users & Roles Settings
				</p>

				<h1 className=' font-bold text-2xl mt-[2rem]'>Users & Roles</h1>
				<p className=' text-sm text-[#98A2B3]'>
					Manage all users in your business
				</p>

				<div className=' text-[#98A2B3] text-sm mt-[2rem] flex gap-[2rem]'>
					<p className=' border-b-2 border-[#0D6EFD] pb-[0.3rem] text-[#0D6EFD]'>
						Users
					</p>
					<p className=''>Roles</p>
				</div>

				<Table />
			</div>
		</div>
	)
}

export default UserDashboard
