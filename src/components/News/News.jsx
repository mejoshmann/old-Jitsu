import { useEffect, useState } from "react";
import axios from "axios";
// import puppeteer from 'puppeteer';
import "./News.scss";
// const browser = await puppeteer.launch({ headless: "new" });


function News() {
  const [eventDate, setEventDate] = useState("");
  const [event, setEvent] = useState("");

  // async function scrapeData() {
  //   try {
  //     // Make a request to the back-end endpoint
  //     const response = await axios.get('/scrape');
  //     const data = response.data;
  
  //     // Update the state variables with the response data
  //     setEvent(data.title);
  //     setEventDate(data.info);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  
  // }

  // Invoke the scrapeData function when the page finishes loading
  // window.addEventListener('load', scrapeData);



  return (
    <>
     <div className="news">
     <div className="news__comp--heading1">
  <h1>{event}</h1>
</div>
<div className="news__comp--date">{eventDate}</div>
        <div className="news__comps">
          <div className="news__comp--container">
            <div className="news__comp--heading1">
              <h1>{event}</h1>
            </div>
            <div className="news__comp--local"></div>
            <div className="news__comp--date">{eventDate}</div>
            <div className="news__comp--link"></div>
          </div>
          {/* 
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
      </div> */}
        </div>
      </div>
    </>
  );
}

export default News;
