import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: localStorage.getItem("query") || "",
    activeTab: "photos",
    results: [],
    loading: false,
    error: null,
    pageNo: 1,
    totalPages: 0,
    nextCursor: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
      state.pageNo = 1;
      state.nextCursor = null;
      localStorage.setItem("query", action.payload);
    },

    setActiveTabs(state, action) {
      state.activeTab = action.payload;
      state.pageNo = 1;
      state.nextCursor = null; // ✅ RESET
    },

    setLoading(state, action) {
      state.loading = action.payload;
      state.error = null;
    },

    setResults(state, action) {
      state.results = action.payload;
      state.loading = false;
    },

    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },

    setPageNo(state, action) {
      state.pageNo = action.payload;
    },

    // ✅ THIS WAS MISSING OR NOT EXPORTED
    setPagination(state, action) {
      state.totalPages = action.payload.totalPages;
    },
    setGifCursor(state, action) {
      state.nextCursor = action.payload;
    },
  },
});

export const {
  setQuery,
  setActiveTabs,
  setLoading,
  setResults,
  setError,
  setPageNo,
  setPagination,
  setGifCursor,
} = searchSlice.actions;

export default searchSlice.reducer;
