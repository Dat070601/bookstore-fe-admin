import { createAsyncThunk } from "@reduxjs/toolkit";
import { changeOrderStatusAsync, getOrdersAsync } from "../../api/order";
import { URL } from "../../constant";

export const getOrdersAsyncThunk = createAsyncThunk("order/get-order", async () => {
  const response = await getOrdersAsync(URL)
  return response
})

export const changeOrderStatusAsyncThunk = createAsyncThunk("order/change-order-status", async (payload) => {
  try {
    const { orderId, statusName } = payload
    const response = await changeOrderStatusAsync(URL, { orderId, statusName })
    return response
  } catch (error) {
    console.log(error)
  }
})