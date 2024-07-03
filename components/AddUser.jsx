import React from 'react'
import { LuUser2 } from 'react-icons/lu'
import NewUserForm from './NewUserForm'

const AddUser = ({ newUser, setNewUser }) => {
	return (
		<div
			className={`${
				!newUser && 'h-[0rem] w-[0rem]'
			} bg-[#3440548a] fixed top-0 bottom-0 left-0 right-0 z-[1000] flex items-center justify-center h-[100vh] w-[100vw] transition-all ease-in-out duration-75`}
			style={{ zIndex: '1000', position: 'fixed' }}
		>
			<div
				className={`${
					!newUser && 'h-[0rem] w-[0rem]'
				} bg-[#fff] w-[40vw] mx-auto rounded-md p-[1rem] relative transition-all ease-in-out duration-75 delay-75 z-[100]`}
			>
				<div className={`${!newUser && 'hidden'} relative`}>
					<p
						className=' font-bold absolute right-[1rem] cursor-pointer'
						onClick={() => setNewUser(false)}
					>
						X
					</p>
					<LuUser2 className=' bg-[#F0F6FE] text-[2rem] text-[#0D6EFD] h-[3rem] w-[3rem] rounded-full border border-[#D2E4FE] p-[0.5rem] text-center mx-auto' />
					<h1 className=' font-bold text-center mt-[0.5rem] mb-[1rem]'>
						New User
					</h1>
					<NewUserForm setNewUser={setNewUser} />
				</div>
			</div>
		</div>
	)
}

export default AddUser
