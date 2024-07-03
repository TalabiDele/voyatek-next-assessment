import axios from 'axios'

export const GET = async (request) => {
	axios.get(`${process.env.NEXT_PUBLIC_API_URL}`).then((res) => {
		return res.data
	})
}
