import { useParams } from "react-router";
import { useSelector } from "react-redux";
import EmptyState from '../components/state/EmptyState';

const Details = () => {
  const { type, id } = useParams();

  // assuming all saved/fetched media are here
//   const items = useSelector((state) => state.media.items);

//   const item = items.find((el) => el.id === id);

//   if (!item) {
//     return (
//       <div className="p-10 text-center text-(--text-muted)">
//         <EmptyState />
//       </div>
//     );
//   }

  return (
    <div className="min-h-screen bg-(--bg) text-(--text) p-8">
      <div className="max-w-5xl mx-auto">
        {/* {type === "photo" && <PhotoDetails item={item} />}
        {type === "video" && <VideoDetails item={item} />}
        {type === "gif" && <GifDetails item={item} />} */}
        {type}
        {id}
      </div>
    </div>
  );
};

export default Details;
