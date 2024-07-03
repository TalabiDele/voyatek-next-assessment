'use client'

import UserDashboard from '@/containers/UserDashboard'
import axios from 'axios'
import { useEffect } from 'react'
import { fetchUsers } from '@/utils/requests'

export default function Home() {
	// console.log(fetchUsers())

	useEffect(() => {
		const getUsers = async () => {
			try {
				const users = await fetchUsers()

				console.log(users)
			} catch (error) {
				console.log(error)
			}
		}

		getUsers()
	}, [])

	return (
		<div className=''>
			<UserDashboard />
		</div>
	)
}
