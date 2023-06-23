    import axios from "axios";
    import { useState, useEffect } from "react";
    import { Link } from "react-router-dom";
    import "./Points.scss";
    
    function Positions() {
      const [positionData, setPositionData] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              "http://localhost:1080/api/knowledge/points"
            );
            setPositionData(response.data[2].positions);
            console.log(response.data[2].positions);
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
          <h2 className="points__heading">Points Scoring</h2>

          {positionData.map((position) => (
            <div className="points__container" key={position.id}>
              <div className="points__headCont">
                <h2 className="points__heading">{position.heading}</h2>
                <p className="points__point">{position.points}</p>
              </div>
              <p className="point__info">{position.info}</p>
            </div>
          ))}
        </div>
      );
    }
    
export default Positions;