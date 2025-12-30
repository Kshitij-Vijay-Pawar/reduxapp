import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gifs"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex gap-5 p-10">
      {tabs.map((elem) => (
        <button
          key={elem}
          onClick={() => dispatch(setActiveTabs(elem))}
          className={`
            px-5 py-2 rounded uppercase font-medium
            cursor-pointer active:scale-95 transition-all duration-300
            border-2
            ${
              activeTab === elem
                ? "bg-(--primary) text-white border-(--primary)"
                : "bg-(--surface) text-(--text-muted) border-(--border) hover:text-(--text) hover:border-(--primary)"
            }
          `}
        >
          {elem}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
