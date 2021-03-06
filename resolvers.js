import axios from 'axios'

const resolvers = {
	Query: {
		test_query: (parent, args) => {
			return axios.get(`www.apiurl.com/people`)
			.then((response) => response.data)
			.catch((error) => console.log(error))
		}
	}
}

export default resolvers