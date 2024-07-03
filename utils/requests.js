import axios from 'axios'

async function fetchUsers() {
	axios.get(`${process.env.NEXT_PUBLIC_API_URL}`).then((res) => {
		console.log(res.data)
		return res.data
	})

	// console.log()
}

export { fetchUsers }
