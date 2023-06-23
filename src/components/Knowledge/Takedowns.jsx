import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Points.scss";
import axios from "axios";

function Takedowns() {
  const [takedownData, setTakedownData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1080/api/knowledge/points"
        );
        setTakedownData(response.data[1].takedowns);
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
      <h2 className="points__heading">Takedowns</h2>

      {takedownData.map((takedowns) => (
        <div className="points__container" key={takedowns.id}>
          <div className="points__headCont">
            <h2 className="points__heading">{takedowns.heading}</h2>
            <p className="points__point">{takedowns.points}</p>
          </div>
          <p className="point__info">{takedowns.info}</p>
        </div>
      ))}
    </div>
  );
}

export default Takedowns;