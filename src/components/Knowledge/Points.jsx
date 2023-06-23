import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Points.scss";

function Points() {
  const [pointsData, setPointsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1080/api/knowledge/points"
        );
        setPointsData(response.data[0].points);
        console.log(response.data[0].points);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="points">
      <Link to="/Knowledge" className="knowledge__back">
        Back
      </Link>

      {pointsData.map((point) => (
        <div className="points__container" key={point.id}>
            <h2 className="points__heading">Points Scoring</h2>
          <div className="points__headCont">
            <h2 className="points__heading">{point.heading}</h2>
            <p className="points__point">{point.points}</p>
          </div>
          <p className="point__info">{point.info}</p>
        </div>
      ))}
    </div>
  );
}

export default Points;
