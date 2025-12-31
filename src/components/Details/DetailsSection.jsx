import React from "react";
import SameData from "./SameData";

const DetailsSection = ({ data }) => {
  const { author, raw, title } = data;

  const downloadImage = async (url, filename = "image.jpg") => {
    const res = await fetch(url);
    const blob = await res.blob();

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();

    URL.revokeObjectURL(link.href);
  };

  return (
    <main className="w-full text-(--text)">
      {/* Image */}
      <div className="mx-auto w-[70%] mt-10 rounded-xl overflow-hidden bg-(--surface) shadow-lg">
        <img
          src={raw}
          alt={title}
          className="w-full object-cover object-center"
        />
      </div>

      {/* Info Section */}
      <div
        className="
          w-[70%] mx-auto mt-8
          flex items-center justify-between gap-6
          bg-(--surface)
          border border-(--border)
          rounded-xl
          p-6
        "
      >
        {/* Text */}
        <div className="space-y-2">
          <h1 className="font-bold text-4xl capitalize">
            {title || "Unknown Author"}
          </h1>
          <p className="text-(--text-muted) capitalize">
            {author || "Untitled"}
          </p>
        </div>

        <button
          onClick={() => downloadImage(raw)}
          className="uppercase font-medium
            px-6 py-3 rounded-lg
            bg-(--primary) text-black
            hover:opacity-90
            active:scale-95
            transition"
        >
          Download
        </button>
      </div>
    </main>
  );
};

export default DetailsSection;
