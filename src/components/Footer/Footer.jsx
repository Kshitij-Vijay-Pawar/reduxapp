import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setPageNo,
  setResults,
  setGifCursor,
} from "../../redux/features/searchSlice";
import { fetchGIF } from "../../api/mediaApi";

const Footer = () => {
  const { pageNo, totalPages, loading, activeTab, query, nextCursor, results } =
    useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleLoadMore = async () => {
    try {
      dispatch(setLoading(true));

      const response = await fetchGIF(query, 15, nextCursor);

      const newGifs = response.data.results.map((item) => ({
        id: item.id,
        type: "gif",
        title: item.content_description || "gif",
        thumbnail: item.media_formats.tinygif.url,
        url: item.media_formats.gif.url,
      }));

      dispatch(setResults([...results, ...newGifs]));
      dispatch(setGifCursor(response.data.next || null));
    } catch (err) {
      console.error("Load more GIFs failed:", err);
    }
  };

  if (activeTab === "gifs")
    return (
      <footer className="flex justify-center py-8">
        <button
          onClick={handleLoadMore}
          disabled={loading}
          className="
          px-6 py-3 rounded-md font-medium
          bg-(--primary) text-black
          hover:opacity-90 transition
          disabled:opacity-50 disabled:cursor-not-allowed
        "
        >
          {loading ? "Loading..." : "Load More GIFs"}
        </button>
      </footer>
    );

  if (loading || totalPages <= 1) return null;

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    dispatch(setPageNo(page));
  };

  return (
    <footer className="flex justify-center py-8">
      <div className="flex items-center gap-3">
        {/* Prev */}
        <button
          onClick={() => changePage(pageNo - 1)}
          disabled={pageNo === 1}
          className="px-4 py-2 rounded bg-(--surface) text-(--text-muted) disabled:opacity-40"
        >
          ‹
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].slice(0, 5).map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => changePage(page)}
              className={`
                w-10 h-10 rounded-full transition
                ${
                  pageNo === page
                    ? "bg-(--primary) text-black"
                    : "bg-(--surface) text-(--text-muted) hover:text-(--text)"
                }
              `}
            >
              {page}
            </button>
          );
        })}

        {/* Next */}
        <button
          onClick={() => changePage(pageNo + 1)}
          disabled={pageNo === totalPages}
          className="px-4 py-2 rounded bg-(--surface) text-(--text-muted) disabled:opacity-40"
        >
          ›
        </button>
      </div>
    </footer>
  );
};

export default Footer;
