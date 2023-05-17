import axios from 'axios';

const login = async (url, { email, password }) => {
	const response = await axios.post(`${url}/api/user/login`, {
		email,
		password
	});
	return response.data;
};

export {login}