import axios from 'axios';

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY;

const fetchPhotos = async (query="anime", page = 1, perPage = 20) => {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
            query: query,
            page: page,
            per_page: perPage
        },
        headers: {
            Authorization: `Client-ID ${UNSPLASH_KEY}`
        }
    })
    return res.data;
}

const fetchVideos = async (query="anime", page = 1, perPage = 20) => {
    const res = await axios.get("https://api.pexels.com/videos/search", {
        params: {
            query: query,
            page: page,
            per_page: perPage
        },
        headers: {
            Authorization: PEXELS_KEY
        }
    })
    return res.data;
};


const fetchGIF = async (query="anime", limit = 20, cursor = null) => {
  const res = await axios.get("https://tenor.googleapis.com/v2/search", {
    params: {
      q: query,
      key: TENOR_KEY,
      limit,
      pos: cursor, // ✅ THIS IS REQUIRED
    },
  });
  return res;
};

const fetchPhoto = async (id) => {
  const res = await axios.get(
    `https://api.unsplash.com/photos/${id}`,
    {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_KEY}`,
      },
    }
  );

  return res.data;
};

const fetchVideo = async (id) => {
  const res = await axios.get(
    `https://api.pexels.com/videos/videos/${id}`,
    {
      headers: {
        Authorization: PEXELS_KEY,
      },
    }
  );

  return res.data;
};

const fetchGIFById = async (id) => {
  const res = await axios.get(
    "https://tenor.googleapis.com/v2/posts",
    {
      params: {
        ids: id,        // 👈 IMPORTANT
        key: TENOR_KEY,
      },
    }
  );

  // Tenor always returns an array
  const gif = res.data.results?.[0];

  if (!gif) return null;

  return {
    id: gif.id,
    type: "gif",
    title: gif.content_description,
    url: gif.media_formats.gif.url,        // full GIF
    preview: gif.media_formats.tinygif.url, // preview
    width: gif.media_formats.gif.dims[0],
    height: gif.media_formats.gif.dims[1],
  };
};




export { fetchPhotos, fetchVideos, fetchGIF, fetchPhoto, fetchVideo, fetchGIFById };