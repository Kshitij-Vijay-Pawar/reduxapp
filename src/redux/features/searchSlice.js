import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "photos",
    results: [],
    loading: false,
    error: null,
    pageNo: 1,          // ✅ page number state
    total: 0,           // (optional but recommended)
    totalPages: 0,      // (optional but recommended)
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
      state.pageNo = 1; // reset page on new search
    },

    setActiveTabs(state, action) {
      state.activeTab = action.payload;
      state.pageNo = 1; // reset page on tab change
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

    clearResults(state) {
      state.results = [];
      state.pageNo = 1;
    },

    // ✅ PAGE NUMBER SETTER
    setPageNo(state, action) {
      state.pageNo = action.payload;
    },

    // (optional) store totals for footer
    setPagination(state, action) {
      state.total = action.payload.total;
      state.totalPages = action.payload.totalPages;
    },
  },
});

export const {
  setQuery,
  setActiveTabs,
  setLoading,
  setResults,
  setError,
  clearResults,
  setPageNo,
  setPagination,
} = searchSlice.actions;

export default searchSlice.reducer;
