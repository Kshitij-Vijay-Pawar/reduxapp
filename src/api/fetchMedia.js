import { fetchPhotos, fetchVideos, fetchGIF } from "./mediaApi";

export const fetchMedia = async (query, activeTab, pageNo = 1) => {
  let data = [];
  let totalPages = 1;

  if (activeTab === "photos") {
    const response = await fetchPhotos(query, pageNo);
    totalPages = response.total_pages;

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
    totalPages = Math.ceil(response.total_results / 20);

    data = response.videos.map((item) => ({
      id: item.id,
      type: "video",
      title: item.user.name || "video",
      thumbnail: item.image,
      url: item.video_files[0]?.link,
    }));
  }

  if (activeTab === "gifs") {
    const response = await fetchGIF(query);
    totalPages = 1;

    data = response.data.results.map((item) => ({
      id: item.id,
      type: "gif",
      title: item.content_description || "gif",
      thumbnail: item.media_formats.tinygif.url,
      url: item.media_formats.gif.url,
    }));
  }

  return { data, totalPages };
};
