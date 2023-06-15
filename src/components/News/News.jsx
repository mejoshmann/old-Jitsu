import { useEffect, useState } from "react";
import axios from "axios";
import "./News.scss";

function News() {
  const [eventTitle, setEventTitle] = useState("");

  useEffect(() => {
    async function eventData() {
      try {
        const response = await axios.get(
          '<img src="https://smoothcomp.com/pictures/t/2430662-53rg/compnet-british-columbia-provincial-championship-2023.jpg" alt="Compnet British Columbia Spring Championship 2023 " width="343" loading="lazy" height="127" class="full-width img-rounded">'
        );
        const htmlContent = response.data;
        console.log("response.data:", title);
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, "text/html");
        const eventTitleElement = doc.querySelector(".event-title");
        const title = eventTitleElement.textContent;
        setEventTitle(title);
      } catch (error) {
        console.error("Error getting event data", error);
      }
    }

    eventData();
  }, []);

  return (
    <>
      <div className="news">
        <div className="news__comps">
          <div className="news__comp--container">
            <div className="news__comp--heading1"></div>
            <div className="news__comp--local"></div>
            <div className="news__comp--date"></div>
            <div className="news__comp--link"></div>
          </div>
          {/* <div className="news__comp--container">
      <div className="news__comp--heading2"></div>
      <div className="news__comp--local"></div>
      <div className="news__comp--date"></div>
      <div className="news__comp--link"></div>
      </div>
      <div className="news__comp--container">
      <div className="news__comp--heading3"></div>
      <div className="news__comp--local"></div>
      <div className="news__comp--date"></div>
      <div className="news__comp--link"></div>
      </div> */}
        </div>
      </div>
    </>
  );
}

export default News;
