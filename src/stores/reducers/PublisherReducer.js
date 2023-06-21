import { createSlice } from "@reduxjs/toolkit";
import { publisherState } from "../initialState/PublisherState";
import { addPublisherAsyncThunk, getPublisherAsyncThunk, updatePublisherAsyncThunk } from "../thunks/PublisherThunk";

const publisherSlice = createSlice({
  name: "publisher",
  initialState: publisherState,
  reducers: {
    resetIsPublisherCreatedState: (state, action) => {
      return {
        ...state,
        isPublisherCreated: undefined
      }
    },
    resetIsPublisherUpdatedState: (state, action) => {
      return {
        ...state,
        isPublisherUpdated: undefined
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPublisherAsyncThunk.fulfilled, (state, action) => {
      state.publishers = action.payload
    })
    builder.addCase(addPublisherAsyncThunk.fulfilled, (state, action) => {
      state.isPublisherCreated = true
    })
    builder.addCase(addPublisherAsyncThunk.rejected, (state, action) => {
      state.isPublisherCreated = false
    })
    builder.addCase(updatePublisherAsyncThunk.fulfilled, (state, action) => {
      state.isPublisherUpdated = true
    })
    builder.addCase(updatePublisherAsyncThunk.rejected, (state, action) => {
      state.isPublisherUpdated = false
    })
  }
})

export const publisherReducer = publisherSlice.reducer
export const publisherSelector = (state) => state.publisherReducer
export const { resetIsPublisherCreatedState, resetIsPublisherUpdatedState } = publisherSlice.actions