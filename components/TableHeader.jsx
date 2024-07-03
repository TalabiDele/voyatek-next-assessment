'use client'

import React, { useState } from 'react'
import TableInput from './TableInput'
import { FilterBtn, IconBtn } from './Buttons'
import AddUser from './AddUser'

const TableHeader = () => {
	const [newUser, setNewUser] = useState(false)

	return (
		<div>
			{newUser && <AddUser newUser={newUser} setNewUser={setNewUser} />}

			<div className=' mt-[1rem] bg-[#fff] p-[1rem] rounded-t-md flex justify-between'>
				<div className=' flex gap-2'>
					<TableInput />
					<FilterBtn text={'Filter'} />
				</div>

				<div className='' onClick={() => setNewUser(true)}>
					<IconBtn text={'New User'} />
				</div>
			</div>
		</div>
	)
}

export default TableHeader
