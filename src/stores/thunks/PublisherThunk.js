import { createAsyncThunk } from "@reduxjs/toolkit";
import { addPublisherAsync, getPublisherAsync, updatePublisherAsync } from "../../api/publisher";
import { URL } from "../../constant";

export const getPublisherAsyncThunk = createAsyncThunk("publisher/get-publisher", async () => {
  const response = await getPublisherAsync(`${URL}/api/publisher`)
  return response
})

export const addPublisherAsyncThunk = createAsyncThunk("publisher/add-publisher", async ({ namePublisher, description, accessToken }) => {
  const response = await addPublisherAsync(`${URL}/api/publisher`, {
    namePublisher,
    description,
    accessToken
  })
  return response
})  

export const updatePublisherAsyncThunk = createAsyncThunk("publisher/update-publisher", async ({ publisherId, namePublisher, description, accessToken }) => {
  const response = await updatePublisherAsync(`${URL}/api/publisher`, {
    publisherId,
    namePublisher,
    description,
    accessToken
  })
  return response
})