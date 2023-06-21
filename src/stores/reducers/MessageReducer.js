import { createSlice } from '@reduxjs/toolkit';


// declaring the types for our state

export const messageSlice = createSlice({
    name: "message",
    initialState: {
        message: []
    },
    reducers: {
        setMessage: (state,action) => {
            state.message = action.payload;
        },
        addMessage: (state,action) => {
            state.message.push(action.payload)   
        },
    },
});
// exporting the actions
export const { setMessage,addMessage } = messageSlice.actions;
export default messageSlice.reducer;
export const messageSelector = (state) => state.MessageReducer;
 