import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Points.scss";
import axios from "axios";

function Joints() {
        const [jointData, setJointData] = useState([]);

        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get(
                "http://localhost:1080/api/knowledge/points"
              );
              setJointData(response.data[4].jointlocks);
              console.log(response.data[4])
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
            <h2 className="points__heading">Joint Locks</h2>
      
            {jointData.map((joint) => (
              <div className="points__container" key={joint.id}>
                <div className="points__headCont">
                  <h2 className="points__heading">{joint.heading}</h2>
                  <p className="points__point">{joint.points}</p>
                </div>
                <p className="point__info">{joint.info}</p>
              </div>
            ))}
          </div>
        );
      }
    


export default Joints;