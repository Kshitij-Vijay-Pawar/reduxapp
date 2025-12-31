import { fetchPhotos, fetchVideos, fetchGIF } from "./mediaApi.js";

/**
 * SAME return shape (array only)
 * Just adds pageNo support
 */
export const fetchMedia = async (query, activeTab, pageNo = 1) => {
  let data = [];

  if (activeTab === "photos") {
    const response = await fetchPhotos(query, pageNo);
    data = response.results.map((item) => ({
      id: item.id,
      type: "photo",
      title: item.alt_description,
      thumbnail: item.urls.small,
      url: item.urls.regular,
      raw: item.urls.raw,
      download: item.links.download_location,
    }));
  }

  if (activeTab === "videos") {
    const response = await fetchVideos(query, pageNo);
    data = response.videos.map((item) => ({
      id: item.id,
      type: "video",
      title: item.user.name || "video",
      thumbnail: item.image,
      url: item.video_files[0]?.link,
    }));
  }

  if (activeTab === "gifs") {
    // Tenor API doesn't support page properly, keep it simple
    const response = await fetchGIF(query);
    data = response.data.results.map((item) => ({
      id: item.id,
      type: "gif",
      title: item.content_description || "gif",
      thumbnail: item.media_formats.tinygif.url,
      url: item.media_formats.gif.url,
    }));
  }

  return data;
};
