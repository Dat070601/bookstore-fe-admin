import { createSlice } from "@reduxjs/toolkit";
import { addAuthorAsyncThunk, getAuthorsAsyncThunk, updateAuthorAsyncThunk } from "../thunks/AuthorThunk";
import { authorState } from "../initialState/AuthorState";

const authorSlice = createSlice({
  name: "author",
  initialState: authorState,
  reducers: {
    resetIsAuthorCreatedState: (state, action) => {
      return {
        ...authorState,
        isAuthorCreated: undefined
      }
    },
    resetIsAuthorUpdatedState: (state, action) => {
      return {
        ...authorState,
        isAuthorUpdated: undefined
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAuthorsAsyncThunk.fulfilled, (state, action) => {
      state.authors = action.payload
    }),
    builder.addCase(addAuthorAsyncThunk.fulfilled, (state, action) => {
      state.isAuthorCreated = true
    })
    builder.addCase(addAuthorAsyncThunk.rejected, (state, action) => {
      state.isAuthorCreated = false
    })
    builder.addCase(updateAuthorAsyncThunk.fulfilled, (state, action) => {
      state.isAuthorUpdated = true
    })
    builder.addCase(updateAuthorAsyncThunk.rejected, (state, action) => {
      state.isAuthorUpdated = false
    })
  }
})

export const authorReducer = authorSlice.reducer
export const authorSelector = (state) => state.authorReducer
export const { resetIsAuthorCreatedState, resetIsAuthorUpdatedState } = authorSlice.actions