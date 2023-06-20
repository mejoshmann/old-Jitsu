// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
import News from "../components/News/News";
import Chart from "../components/Chart/Chart";
import { PieChart } from "recharts";
import Pie from "../components/PieChart/Pie";

function Home() {
    return(
        <>
            <Chart/>
            <Pie/>
            <News/>
        </>
    )
}

export default Home;