import React from "react";

const DetailsSection = ({ data }) => {
  const { author, raw, title, url, type, id } = data || {};

  const downloadMedia = async (url, filename = "media") => {
    if (!url) return;

    try {
      const res = await fetch(url, { mode: "cors" });
      const blob = await res.blob();

      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();

      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  return (
    <main className="w-full text-(--text)">
      {/* Media */}
      <div
        className="mx-auto mt-10
    w-[70vw] max-w-350
    aspect-video
    rounded-xl
    overflow-hidden
    bg-(--surface)
    border border-(--border)
    shadow-lg "
      >
        {type === "photo" && raw && (
          <img src={raw} alt={title} className="w-full h-full object-cover" />
        )}

        {type === "video" && url && (
          <video
            src={url}
            autoPlay
            loop
            muted
            controls
            className="w-full h-full object-cover"
          />
        )}

        {type === "gif" && url && (
          <img src={url} alt={title} className="w-full h-full object-cover" />
        )}
      </div>

      {/* Info */}
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
        <div className="space-y-2">
          <h1 className="font-bold text-4xl capitalize">
            {title || "Untitled"}
          </h1>
          <p className="text-(--text-muted)">{author || "Unknown Author"}</p>
          {type === "gif" && url && (
            <p className="text-sm text-(--text-muted)">GIFs powered by Tenor</p>
          )}
        </div>

        <button
          onClick={() => {
            if (type === "photo") {
              downloadMedia(raw, `${title || "image"}.jpg`);
            }

            if (type === "gif") {
              downloadMedia(url, `${title || "gif"}.gif`);
            }

            if (type === "video") {
              downloadMedia(url, `${title || "video"}.mp4`);
            }
          }}
          className="
    px-6 py-3 rounded-lg
    bg-(--primary) text-black
    font-medium uppercase
    hover:opacity-90
    active:scale-95
    transition
  "
        >
          Download
        </button>
      </div>
    </main>
  );
};

export default DetailsSection;
