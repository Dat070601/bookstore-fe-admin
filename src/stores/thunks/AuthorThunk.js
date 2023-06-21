import { createAsyncThunk } from "@reduxjs/toolkit";
import { addAuthorAsync, getAuthorsAsync, updateAuthorAsync } from "../../api/author";
import { URL } from "../../constant";

export const getAuthorsAsyncThunk = createAsyncThunk("author/get-authors", async () => {
  const response = await getAuthorsAsync(URL)
  return response
})

export const addAuthorAsyncThunk = createAsyncThunk("author/add-author", async ({ nameAuthor, accessToken }) => {
  const response = await addAuthorAsync(URL, {
    nameAuthor,
    accessToken
  })
  return response
})

export const updateAuthorAsyncThunk = createAsyncThunk("author/update-author", async ({ authorId, nameAuthor, accessToken }) => {
  const response = await updateAuthorAsync(URL, {
    authorId,
    nameAuthor,
    accessToken
  })
  return response
})