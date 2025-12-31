import React from "react";
import { useDispatch } from "react-redux";
import { addCollection } from "../../redux/features/collecionSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCollection = () => {
    dispatch(addCollection(item));
    toast.success("Added to Collection");
  };

    const navigate = useNavigate();


  return (
      <div
        className="
      group relative
      bg-(--surface) text-(--text)
      border border-(--border)
      rounded-xl overflow-hidden
      shadow-sm hover:shadow-xl
      transition-all duration-300 cursor-pointer
      "
      onClick={() => navigate(`/details/${item.type}/${item.id}`)}
      >
        {/* Media */}
        <div className="relative h-52 overflow-hidden">
          {item.type === "photo" && (
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-110"
            />
          )}

          {item.type === "video" && (
            <video
              src={item.url}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-110"
            />
          )}

          {item.type === "gif" && (
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-110"
            />
          )}

          {/* Hover Overlay */}
          <div
            className="
          absolute inset-0
          bg-black/50
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-100
          flex items-center justify-center
          "
          >
            <button
              onClick={addToCollection}
              className="
            px-4 py-2 rounded-lg
            bg-(--primary) text-white
            font-medium
            scale-90 group-hover:scale-100
            transition-transform duration-300
            active:scale-95
            cursor-pointer
            "
            >
              Save
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="p-3">
          <h3
            className="
          text-sm font-semibold capitalize
          line-clamp-2
          "
          >
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

export default ResultCard;
