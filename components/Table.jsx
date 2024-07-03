'use client'

import React, { useEffect, useState } from 'react'
import { HiOutlineChevronUpDown } from 'react-icons/hi2'
import TableHeader from './TableHeader'
import { fetchUsers } from '@/utils/requests'
import axios from 'axios'

const Table = () => {
	const [allUsers, setAllUsers] = useState(null)

	useEffect(() => {
		const getUsers = async () => {
			axios.get(`${process.env.NEXT_PUBLIC_API_URL}`).then((res) => {
				console.log(res.data)
				setAllUsers(res.data)
			})
		}

		getUsers()
	}, [])

	return (
		<div>
			<TableHeader />

			<div className=' grid grid-cols-4 mt-[1rem] text-[#1D2739] px-[3rem] py-[1rem]'>
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

			<div className=' rounded-b-md'>
				{allUsers?.map((user) => (
					<div className=' grid grid-cols-4 text-[#1D2739] bg-[#fff] py-[1rem] px-[3rem] border-b border-[#cbd5e1a9] text-sm '>
						<div className=' flex items-center text-sm'>{user?.fullName}</div>
						<div className=' flex items-center text-sm'>{user?.email}</div>
						<div className=' flex items-center text-sm'>{user?.role}</div>
						<div className=' flex items-center text-sm font-medium gap-[1rem]'>
							<p className=' text-[#0D6EFD] text-sm cursor-pointer'>Edit</p>
							<p className=' text-sm cursor-pointer'>Remove</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Table
