import React, { useEffect } from "react";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import EmptyState from "./EmptyState";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (state) => state.search
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        dispatch(setLoading(true));
        let data = [];

        if (activeTab === "photos") {
          const response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            url: item.urls.full,
          }));
        }

        if (activeTab === "videos") {
          const response = await fetchVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            url: item.video_files[0].link,
          }));
        }

        if (activeTab === "gifs") {
          const response = await fetchGIF(query);
          data = response.data.results.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.content_description || "gif",
            thumbnail: item.media_formats.tinygif.url,
            url: item.media_formats.gif.url,
          }));
        }

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    getData();
  }, [query, activeTab, dispatch]);

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
