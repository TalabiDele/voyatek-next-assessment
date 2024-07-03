'use client'

import React from 'react'
import { LuUser2, LuUsers2, LuLogOut } from 'react-icons/lu'
import { CiLock, CiCloud } from 'react-icons/ci'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { PiMoneyBold } from 'react-icons/pi'
import { GoTag } from 'react-icons/go'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SideNav = () => {
	const pathname = usePathname()

	const lists = [
		{
			id: 1,
			icon: <LuUser2 />,
			text: 'Account',
			link: '/account',
		},
		{
			id: 2,
			icon: <CiLock />,
			text: 'Security',
			link: '/security',
		},
		{
			id: 3,
			icon: <IoMdNotificationsOutline />,
			text: 'Notifications',
			link: '/notifications',
		},
		{
			id: 4,
			icon: <PiMoneyBold />,
			text: 'Pricing',
			link: '/pricing',
		},
		{
			id: 5,
			icon: <GoTag />,
			text: 'Sales',
			link: '/Sales',
		},
		{
			id: 6,
			icon: <LuUsers2 />,
			text: 'Users & Roles',
			link: '/',
		},
		{
			id: 7,
			icon: <CiCloud />,
			text: 'Backup',
			link: '/backup',
		},
	]

	return (
		<div className=' bg-[#fff] w-[15vw] rounded-md h-[80vh]'>
			<div className='  p-[1rem] grid'>
				<h1 className=' font-bold text-[#334155] mb-[1rem]'>Settings</h1>
				<ul className=' flex flex-col h-[40vh] justify-between'>
					{lists?.map((list) => (
						<Link href={list?.link}>
							<li
								className={`${
									pathname === list?.link && 'bg-[#F0F6FE] text-[#0D6EFD]'
								} flex items-center text-[#94A3B8] text-sm p-[0.5rem] rounded-md`}
							>
								<div className=' mr-[0.3rem]'>{list?.icon}</div>
								<p className=''>{list?.text}</p>
							</li>
						</Link>
					))}
				</ul>

				<button className=' flex items-center border border-[#475569] text-[#475569] text-sm p-[0.5rem] rounded-md self-end'>
					<LuLogOut />
					Back to Dashboard
				</button>
			</div>
		</div>
	)
}

export default SideNav
