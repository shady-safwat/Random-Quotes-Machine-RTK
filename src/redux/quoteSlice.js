import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuotes = createAsyncThunk(
  "quote/fetchQuotes",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://type.fit/api/quotes");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to get data Quotes");
    }
  }
);

const initialState = {
  quotes: {
    text: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse"
  },
  loading: false,
  error: null,
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.loading = false;
        state.quotes = action.payload ;
        console.log(action.payload);
      })
      .addCase(fetchQuotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default quoteSlice.reducer;
