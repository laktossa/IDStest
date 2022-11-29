import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let BASE_URL = "http://localhost:3000";

export const getTrx = createAsyncThunk("getTrx", async () => {
  try {
    let { data } = await axios.get(`${BASE_URL}/data`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getDetail = createAsyncThunk("getDetail", async (id) => {
  try {
    let { data } = await axios.get(`${BASE_URL}/data/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getStatus = createAsyncThunk("getStatus", async () => {
  try {
    let { data } = await axios.get(`${BASE_URL}/status`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const addTrx = createAsyncThunk("addTrx", async (data) => {
  try {
    await axios.post(`${BASE_URL}/data`, data);
    getTrx();
  } catch (error) {
    console.log(error);
  }
});

export const editTrx = createAsyncThunk("editTrx", async (data) => {
  try {
    await axios.put(`${BASE_URL}/data`, data);
    getTrx();
  } catch (error) {
    console.log(error);
  }
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    loading: false,
    transactions: [],
    detail: {},
    status: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getStatus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getStatus.fulfilled, (state, actions) => {
      state.status = actions.payload;
    });

    builder.addCase(getTrx.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTrx.fulfilled, (state, actions) => {
      let data = actions.payload.map((e) => {
        if (e.status === state.status[0].id) {
          e.status = state.status[0].name;
        } else {
          e.status = state.status[1].name;
        }
        return e;
      });
      state.transactions = data;
      state.loading = false;
    });

    builder.addCase(getDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDetail.fulfilled, (state, actions) => {
      let data = actions.payload;
      if (data.status === state.status[0].id) {
        data.status = state.status[0].name;
      } else {
        data.status = state.status[1].name;
      }
      state.detail = data;
      state.loading = false;
    });
  },
});

export const { actions, reducer } = dataSlice;

export default reducer;
