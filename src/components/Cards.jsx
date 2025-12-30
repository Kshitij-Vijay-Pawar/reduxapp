import React from "react";
import { useDispatch } from "react-redux";
import { removeCollection } from "../redux/features/collecionSlice";
import { toast } from "react-toastify";

const Cards = ({ item }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeCollection(item.id));
    toast.info("Removed from collection");
  };

  return (
    <div
      className="
        group relative
        bg-(--surface) text-(--text)
        border border-(--border)
        rounded-xl overflow-hidden
        shadow-sm hover:shadow-xl
        transition-all duration-300
      "
    >
      {/* Media */}
      <div className="relative h-52 overflow-hidden">
        {item.type === "photo" && (
          <img
            src={item.url}
            alt={item.title}
            className="
              w-full h-full object-cover
              transition-transform duration-500
              group-hover:scale-110
            "
          />
        )}

        {item.type === "video" && (
          <video
            src={item.url}
            autoPlay
            loop
            muted
            className="
              w-full h-full object-cover
              transition-transform duration-500
              group-hover:scale-110
            "
          />
        )}

        {item.type === "gif" && (
          <img
            src={item.url}
            alt={item.title}
            className="
              w-full h-full object-cover
              transition-transform duration-500
              group-hover:scale-110
            "
          />
        )}

        {/* Hover Delete Button */}
        <div
          className="
            absolute inset-0
            bg-black/50
            opacity-0
            group-hover:opacity-100
            transition
            flex items-center justify-center
          "
        >
          <button
            onClick={removeItem}
            className="
              px-4 py-2 rounded-lg
              bg-(--danger)
              text-white font-medium
              active:scale-95
              transition
            "
          >
            Delete
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="p-3">
        <h3 className="text-sm font-semibold capitalize line-clamp-2">
          {item.title || "Untitled"}
        </h3>

        <span
          className="
            inline-block mt-2 text-xs uppercase
            px-2 py-1 rounded
            bg-(--primary)/10
            text-(--primary)
          "
        >
          {item.type}
        </span>
      </div>
    </div>
  );
};

export default Cards;
