import "./Home.css";
import { allSetThunk } from "../../store/sets";
import { useDispatch } from "react-redux";
import useAllSets from "../../hooks/useAllSets";
import { useEffect } from "react";
import SetWrapper from "../SetWrapper";
import Achievements from "../Achievements";
import useSession from "../../hooks/useSession";
import useRecommened from "../../hooks/useRecommened";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  let allSets = useAllSets();
  let recommened = useRecommened();
  const user = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(allSetThunk());
  }, [dispatch]);

  if (!allSets || !recommened) return null;
  allSets = Object.values(allSets);
  recommened = Object.values(recommened);
  return (
    <div className="Home">
      <div className="Home-achievements">Achievements</div>
      <Achievements />
      <div className="home-studySet-wrapper">
        <div className="Home-achievements">Study Sets</div>
        {user && (
          <div
            className="home-studySet-createNewSet"
            onClick={() => navigate("/sets/new")}
          >
            Create new set
          </div>
        )}
      </div>
      <SetWrapper allSets={allSets} />
      <div className="Home-achievements">Recommended</div>
      <SetWrapper allSets={recommened} color="#25284A" />
    </div>
  );
}