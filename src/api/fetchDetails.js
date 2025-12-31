import { fetchPhoto } from "./mediaApi";

export const fetchDetails = async (type, id) => {
  let data = null;

  if (type === "photo") {
    const response = await fetchPhoto(id);
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


  return data;
};
