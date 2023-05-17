import { createSlice } from '@reduxjs/toolkit';
import { authState } from '../initialState/AuthState'
import { loginAsyncThunk } from '../thunks/AuthThunk'

const AuthSlice = createSlice({
	name: 'auth',
	initialState: authState,
	reducers: {}, 
	extraReducers: (builder) => {
		builder.addCase(loginAsyncThunk.fulfilled, (state, action) => {
			if (action.payload.isSuccess == false)
			{
				state.isSuccess = action.payload.isSuccess;
				state.message = action.payload.message;
			}
			else {
				state.isSuccess = action.payload.isSuccess;
				state.isActive = action.payload.isActive;
				state.message = 'Welcome back';
				state.accessToken = action.payload.accessToken;
				state.refreshToken = action.payload.refreshToken;
			}
		});
	}
});

const authReducer = AuthSlice.reducer;
const authSelector = (state) => state.authReducer;

export { authReducer, authSelector };