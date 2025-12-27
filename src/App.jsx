import { fetchPhotos, fetchVideos, fetchGIF} from "./api/mediaApi"


function App() {

  return (
    <div className="w-full h-screen bg-gray-950 text-white">
      Kshitij Vijay Pawar 
      <button
        onClick={async () => {
          const photos = await fetchPhotos()
          console.log(photos.results)
        }}
        className="p-4 border-2 border-red-300"
      >Get Photos</button>

      <button
        onClick={async () => {
          const videos = await fetchVideos()
          console.log(videos.videos)
        }}
        className="p-4 border-2 border-red-300"
      >Get GIF</button>

      <button
        onClick={async () => {
          const gif = await fetchGIF()
          console.log(gif.data.results)
        }}
        className="p-4 border-2 border-red-300"
      >Get GIF</button>
    </div>
  )
}

export default App
