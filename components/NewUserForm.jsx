'use client'

import React, { useState } from 'react'
import { FormBtn } from './Buttons'
import { GrFormViewHide, GrFormView } from 'react-icons/gr'
import axios from 'axios'

const NewUserForm = ({ setNewUser }) => {
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [role, setRole] = useState('')
	const [password, setPassword] = useState('')
	const [isShow, setIsShow] = useState(false)

	const handleAddUser = (e) => {
		e.preventDefault()

		axios
			.post(`${process.env.NEXT_PUBLIC_API_URL}`, {
				email,
				fullName: name,
				role: role,
				password,
			})
			.then((res) => {
				setNewUser(false)

				setEmail('')
				setName('')
				setRole('')
				setPassword('')
				console.log(res.data)
			})
	}

	return (
		<div>
			<form action='' onSubmit={handleAddUser}>
				<div className=' flex flex-col mb-[1rem]'>
					<label htmlFor='email' className=' text-sm mb-[0.5rem]'>
						Email Address
					</label>
					<input
						type='email'
						placeholder="New User's Email Address"
						className=' border border-[
              #CBD5E1] outline-none py-[0.5rem] px-[0.5rem] rounded-md text-sm text-[##475367]'
						value={email}
						id='email'
						name='email'
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className=' flex flex-col mb-[1rem]'>
					<label htmlFor='name' className=' text-sm mb-[0.5rem]'>
						Full Name
					</label>
					<input
						type='text'
						placeholder="New User's Full Name"
						className=' border border-[
              #CBD5E1] outline-none py-[0.5rem] px-[0.5rem] rounded-md text-sm text-[##475367]'
						value={name}
						id='name'
						name='name'
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className=' flex flex-col mb-[1rem]'>
					<label htmlFor='name' className=' text-sm mb-[0.5rem]'>
						Role
					</label>
					<select
						value={role}
						onChange={(e) => setRole(e.target.value)}
						name='role'
						id='role'
						className=' appearance-none border border-[
              #CBD5E1] outline-none py-[0.5rem] px-[0.5rem] rounded-md text-sm text-[##475367]'
					>
						<option
							className=' text-sm text-[#475367] py-[0.5rem] mb-[1rem]'
							selected
						>
							Select Role
						</option>
						<option
							className=' text-sm text-[#475367] py-[0.5rem] mb-[1rem]'
							value='admin'
						>
							Admin
						</option>
						<option
							className=' text-sm text-[#475367] py-[0.5rem] mb-[1rem]'
							value='manager'
						>
							Manager
						</option>
						<option
							className=' text-sm text-[#475367] py-[0.5rem] mb-[1rem]'
							value='sales representative'
						>
							Sales Representative
						</option>
					</select>
				</div>
				<div className=' flex flex-col mb-[1rem]'>
					<label htmlFor='password' className=' text-sm mb-[0.5rem]'>
						Create Password
					</label>
					<div className=' w-full relative'>
						<input
							type={isShow ? 'text' : 'password'}
							placeholder='Create a Password for New User'
							className=' border border-[
              #CBD5E1] outline-none py-[0.5rem] px-[0.5rem] rounded-md text-sm text-[##475367] w-full'
							value={password}
							id='password'
							name='password'
							onChange={(e) => setPassword(e.target.value)}
						/>
						<div className=' absolute right-[1rem] top-[0.5rem] text-[1rem]'>
							{!isShow ? (
								<GrFormViewHide
									onClick={() => setIsShow(true)}
									className=' font-xl'
								/>
							) : (
								<GrFormView
									onClick={() => setIsShow(false)}
									className=' font-xl'
								/>
							)}
						</div>
					</div>
				</div>

				<FormBtn text={'Add User'} />
			</form>
		</div>
	)
}

export default NewUserForm
