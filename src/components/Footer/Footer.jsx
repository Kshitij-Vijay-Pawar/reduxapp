import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageNo } from "../../redux/features/searchSlice";

const Footer = () => {
  const { pageNo, totalPages, loading } = useSelector(
    (state) => state.search
  );
  const dispatch = useDispatch();

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
