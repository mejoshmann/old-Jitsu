// import { useEffect, useState } from "react";
// import axios from "axios";
import "./News.scss";
// const puppeteer = require('puppeteer');
//   const browserObject = require("./browsers/independentBrowser");
// const scraperController = require("./controllers/pageController");
// const pageScraper = require("./scraper/independentPageScraper");
//     // const browser = await puppeteer.launch({ headless: false });

// const kiwi = require("./scraper/josh");


function News() {


  


// console.log("pageScraper: ", pageScraper);

// const grapplingKiwi = require("./scraper/josh");

// async function runScraper() {
//   const websiteUrl = "https://grapplingindustries.smoothcomp.com/en/event/9408";
//   const extractedData = await grapplingKiwi.scrapeWebsite(websiteUrl);

//   // Use the extracted data as needed
//   console.log(extractedData);
// }

// runScraper();



  // const url = `https://grapplingindustries.smoothcomp.com/en/event/9408`
  // // const [eventDate, setEventDate] = useState("");
  // // const [event, setEvent] = useState("");

  // async function scrapeData() {
  //   const browser = await puppeteer.launch({ headless: false });
  //   const page = await browser.newPage();
  //   await page.goto(url);
  //   const result = await page.evaluate(() => {
  //     const upcomingEvents = [];
  //     const listOfEvents = document.querySelectorAll('div:nth-of-type(3) a.event-title div:nth-of-type(3) span:nth-of-type(n+2) div:nth-of-type(3) div.flex-grow-1, div:nth-of-type(3) .days span span');
  //     console.log("list of events",listOfEvents);
  //      listOfEvents.forEach((item) => upcomingEvents.push(item.textContent));
  //     return upcomingEvents;
  //   })
  //   await browser.close();
  //   return result;
  // }

  // scrapeData()
  // .then((returnVal) => {
  //   fs.writeFile('./data.json', returnVal.join(','), (err, data) => {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       console.log('Data written to data.json');
  //     }
  //   });
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  // });


  return (
    <>
     <div className="news">
     {/* <div className="news__comp--heading1">
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
     
        </div> */}
      </div>
    </>
  );
}

export default News;
