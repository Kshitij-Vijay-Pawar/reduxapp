import React, { useEffect } from "react";
import {
  setError,
  setLoading,
  setResults,
} from "../../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import LoadingState from "../state/LoadingState";
import EmptyState from "../state/EmptyState";
import ErrorState from "../state/ErrorState";
import { fetchMedia } from "../../api/fetchMedia";
import ResultCard from "../home/ResultCard";

const SameData = ({ data }) => {
  const dispatch = useDispatch();
  const perPage = 10;

  const { activeTab, results, loading, error, pageNo } = useSelector(
    (state) => state.search
  );

  const sanitizeQuery = (text = "") =>
    text
      .replace(/https?:\/\/\S+/g, "")
      .replace(/www\.\S+/g, "")
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/\s+/g, " ")
      .trim();

  const rawQuery = `${data?.title || ""} ${data?.description || ""}`;
  const searchQuery = sanitizeQuery(rawQuery);

  useEffect(() => {
    if (!searchQuery) return;

    const getData = async () => {
      try {
        dispatch(setLoading(true));
        const result = await fetchMedia(searchQuery, activeTab, pageNo, null);
        dispatch(setResults(result.data || result));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    getData();
  }, [searchQuery, activeTab, pageNo, dispatch]);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (!results || results.length === 0) return <EmptyState />;

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

export default SameData;
