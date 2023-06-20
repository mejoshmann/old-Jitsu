import { useEffect, useState } from "react";
import axios from "axios";
import "./News.scss";

function News() {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");

  const [secondDate, setSecondDate] = useState("");
  const [secondTitle, setSecondTitle] = useState("");

  const [thirdDate, setThirdDate] = useState("");
  const [thirdTitle, setThirdTitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://www.flograppling.com");
        const htmlContent = response.data;

        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, "text/html");

        const titleElement = doc.querySelector(".h6.text-line-clamp-2.title-max-width");
        const title = titleElement.textContent.trim();

        const dateElement = doc.querySelector(".fw-normal.align-middle.ng-star-inserted");
        const date = dateElement.textContent.trim();
        setEventDate(date);


        const secondDateElement = doc.querySelector(".fw-normal.align-middle.ng-star-inserted");
        const secondDate = secondDateElement.textContent.trim();
        setSecondDate(date);

        const secondTitleElement = doc.querySelector(`h6[data-test="event-ticker-title"].title-max-width`);
        const secondTitle = secondTitleElement.textContent.trim();
        setSecondTitle(secondTitle);

        const thirdTitleElement = doc.querySelector();
        const thirdTitle = thirdTitleElement.textContent.trim();
        setThirdTitle(thirdTitle);
        
        const thirdDateElement = doc.querySelector(`fw-normal align-middle ng-star-inserted`);
        const thirdDate = thirdDateElement.textContent.trim();
        setThirdDate(thirdDate);

        setEventTitle(title);
      } catch (error) {
        console.error("Error getting event data", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="news">
        <div className="news__comps">
          <div className="news__comp--container">
            <div className="news__comp--heading1">{eventTitle}</div>
            <div className="news__comp--local"></div>
            <div className="news__comp--date">{eventDate}</div>
            <div className="news__comp--link"></div>
          </div>

          <div className="news__comp--container">
      <div className="news__comp--heading2">{secondTitle}</div>
      <div className="news__comp--local"></div>
      <div className="news__comp--date">{secondDate}</div>
      <div className="news__comp--link"></div>
      </div>
      <div className="news__comp--container">
      <div className="news__comp--heading3"></div>
      <div className="news__comp--local"></div>
      <div className="news__comp--date"></div>
      <div className="news__comp--link"></div>
      </div>
        </div>
      </div>
    </>
  );
}

export default News;
