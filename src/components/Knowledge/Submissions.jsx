import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Points.scss";
import axios from "axios";

function Submissions() {
  const [submissionData, setSubmissionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1080/knowledge/page"
        );
        setSubmissionData(response.data[3].submissions);
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
      <h2 className="points__heading">Submissions</h2>

      {submissionData.map((submission) => (
        <div className="points__container" key={submission.id}>
          <div className="points__headCont">
            <h2 className="points__heading">{submission.heading}</h2>
            <p className="points__point">{submission.points}</p>
          </div>
          <p className="point__info">{submission.info}</p>
        </div>
      ))}
    </div>
  );
}

export default Submissions;