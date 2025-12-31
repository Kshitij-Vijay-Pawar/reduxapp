import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import EmptyState from "../components/state/EmptyState";
import { useEffect, useState } from "react";
import { setError } from "../redux/features/searchSlice";
import { fetchDetails } from "../api/fetchDetails";
import Navbar from "../components/Navbar";
import DetailsSection from "../components/Details/DetailsSection";
import SameData from "../components/Details/SameData";

const Details = () => {
  const { type, id } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  //Reset scroll on new image
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  useEffect(() => {
    if (!type || !id) return;

    const getData = async () => {
      try {
        const result = await fetchDetails(type, id);
        setData(result);
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    getData();
  }, [type, id, dispatch]);

  return (
    <div className="text-(--text) w-full min-h-screen bg-(--bg)">
      <Navbar />
      <DetailsSection data={data} />
      <SameData data={data} />
    </div>
  );
};

export default Details;
