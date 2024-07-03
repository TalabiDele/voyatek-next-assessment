import React from 'react'
import logo from '@/public/logo-go.png'
import Image from 'next/image'
import SearchInput from './SearchInput'
import NavLists from './NavLists'

const TopNav = () => {
	return (
		<div className=' bg-[#fff] shadow-sm fixed top-0 left-0 right-0 z-[100]'>
			<div className=' flex justify-between items-center w-[95vw] mx-auto py-[1rem]'>
				<Image src={logo} alt='logo' width={50} height={50} />
				<SearchInput />
				<NavLists />
			</div>
		</div>
	)
}

export default TopNav
