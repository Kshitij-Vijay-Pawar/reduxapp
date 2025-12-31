import { fetchGIFById, fetchPhoto, fetchVideo } from "./mediaApi";

export const fetchDetails = async (type, id) => {
  let data = null;

  if (type === "photo") {
    const response = await fetchPhoto(id);
    console.log(response);
    data = {
      id: response.id,
      type: "photo",
      title: response.description,
      description: response.alt_description,
      url: response.urls.regular,
      raw: response.urls.raw,
      author: response.user.name,
    };
  }
  if (type === "video") {
    const response = await fetchVideo(id);

    data = {
      id: response.id,
      type: "video",
      title: response.user?.name || "Video",
      author: response.user?.name,
      url: response.video_files?.[0]?.link,
    };
  }
  if (type === "gif") {
    data = await fetchGIFById(id);
  }

  return data;
};
