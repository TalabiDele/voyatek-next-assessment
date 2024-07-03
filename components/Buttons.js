import { IoMdAddCircleOutline } from 'react-icons/io'
import { MdOutlineFilterList } from 'react-icons/md'

export const IconBtn = ({ text }) => {
	return (
		<button className=' bg-[#0D6EFD] rounded-md flex items-center gap-2 text-sm p-[0.5rem] text-[#fff] hover:bg-[#0d6dfdd8] transition-all ease-in-out duration-75'>
			<IoMdAddCircleOutline />
			{text}
		</button>
	)
}

export const FilterBtn = ({ text }) => {
	return (
		<button className='rounded-md flex items-center gap-2 border border-[#CBD5E1] p-[0.5rem] text-sm text-[#334155] hover:bg-[#ffffffde] transition-all ease-in-out duration-75'>
			<MdOutlineFilterList />
			{text}
		</button>
	)
}

export const FormBtn = ({ text }) => {
	return (
		<button className=' bg-[#0D6EFD] rounded-md gap-2 text-sm p-[0.5rem] text-[#fff] w-full transition-all ease-in-out duration-75 hover:bg-[#0d6dfdd8]'>
			{text}
		</button>
	)
}
