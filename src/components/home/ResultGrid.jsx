import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setError,
  setResults,
} from "../../redux/features/searchSlice";
import { fetchMedia } from "../../api/fetchMedia";

import LoadingState from "../state/LoadingState";
import ErrorState from "../state/ErrorState";
import EmptyState from "../state/EmptyState";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error, pageNo } = useSelector(
    (state) => state.search
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        dispatch(setLoading(true));
        const data = await fetchMedia(query, activeTab, pageNo);
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    getData();
  }, [query, activeTab, pageNo, dispatch]); // ✅ pageNo added

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (results.length === 0) return <EmptyState />;

  return (
    <div
      className="
        grid gap-6 p-10
        grid-cols-[repeat(auto-fill,minmax(260px,1fr))]
        bg-(--bg)
      "
    >
      {results.map((item) => (
        <ResultCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ResultGrid;
