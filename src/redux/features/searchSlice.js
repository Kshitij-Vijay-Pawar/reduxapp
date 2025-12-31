import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "photos",
    results: [],
    loading: false,
    error: null,
    pageNo: 1,
    totalPages: 0,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
      state.pageNo = 1;
    },

    setActiveTabs(state, action) {
      state.activeTab = action.payload;
      state.pageNo = 1;
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
  },
});

export const {
  setQuery,
  setActiveTabs,
  setLoading,
  setResults,
  setError,
  setPageNo,
  setPagination, // ✅ MUST BE HERE
} = searchSlice.actions;

export default searchSlice.reducer;
