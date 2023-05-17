import { createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from '../../constant';
import { login} from '../../api/auth';

export const loginAsyncThunk = createAsyncThunk('auth/login', async (payload) => {
	try {
		const response = await login(URL, {
			email: payload.email,
			password: payload.password
		});
		console.log(response);
		return response;
	} catch (error) {
		console.log(error);
	}
});