import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { CiWallet } from 'react-icons/ci'
import { GoQuestion } from 'react-icons/go'
import { IoSettingsOutline, IoChevronDownOutline } from 'react-icons/io5'
import Link from 'next/link'
import Image from 'next/image'
import userImg from '@/public/user-a.png'

const NavLists = () => {
	const lists = [
		{
			icon: <IoMdNotificationsOutline />,
			text: 'Notifications',
			link: '/notifications',
		},
		{
			icon: <CiWallet />,
			text: 'Wallet',
			link: '/wallet',
		},
		{
			icon: <GoQuestion />,
			text: 'Inquiries',
			link: '/inquiries',
		},
		{
			icon: <IoSettingsOutline />,
			text: 'Settings',
			link: '/settings',
		},
	]

	return (
		<div>
			<ul className=' flex items-center w-[30vw] justify-between'>
				{lists?.map((list) => (
					<Link href={list?.link}>
						<li
							key={list?.text}
							className=' text-center flex flex-col justify-center items-center text-[#667185]'
						>
							<div className=' text-2xl font-bold  mb-[0.3rem]'>
								{list?.icon}
							</div>
							<p className=' text-sm'>{list?.text}</p>
						</li>
					</Link>
				))}

				<li className=' rounded-full flex items-center'>
					<div className=' rounded-full'>
						<Image
							src={userImg}
							alt='user image'
							width={50}
							height={50}
							objectFit='cover'
						/>
					</div>

					<IoChevronDownOutline className=' ml-[0.5rem] cursor-pointer' />
				</li>
			</ul>
		</div>
	)
}

export default NavLists
