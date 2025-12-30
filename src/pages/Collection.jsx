import React from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { clearCollection } from "../redux/features/collecionSlice";
import Cards from "../components/Cards";
import EmptyState from "../components/EmptyState";

const CollectionPage = () => {
  const { items } = useSelector((state) => state.collection);
  const dispatch = useDispatch();

  return (
    <main className="w-full min-h-screen bg-(--bg) text-(--text)">
      <Navbar />

      {/* Header */}
      <div className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold">My Collection</h1>

        {items.length > 0 && (
          <button
            onClick={() => dispatch(clearCollection())}
            className="
              px-4 py-2 rounded-lg
              border border-(--danger)
              text-(--danger)
              hover:bg-(--danger)
              hover:text-white
              transition
            "
          >
            Clear All
          </button>
        )}
      </div>

      {/* Collection Grid */}
      {items.length === 0 ? (
        <EmptyState />
      ) : (
        <div
          className="
            grid gap-6 px-10 pb-10
            grid-cols-[repeat(auto-fill,minmax(260px,1fr))]
          "
        >
          {items.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      )}
    </main>
  );
};

export default CollectionPage;
