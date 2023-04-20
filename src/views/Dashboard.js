import React, { useEffect, useState } from "react";
import Navbar from "components/Navbar.js";
import LineChart from "components/LineChart.js";
import BarChart from "components/BarChart.js";
import Box from "components/Box.js";
import PageVisits from "components/PageVisits";
import SocialTraffic from "components/SocialTraffic";
import Footer from "components/Footer";

var options = {  
  method: 'GET',
  mode: 'cors',
  headers: {
    'Authorization': 'Bearer 8fdbc181-afe1-39ad-ad0f-4f07a597e298',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Origin': '',
  }
}

export default function Dashboard() {

const [obj,setObj] = useState([]);
useEffect(() => {
  const fetchData = async () => {
  const res = await fetch('https://127.0.0.1:9443/api/am/publisher/v3/apis', options)
  const result = await res.json();
  console.log(result);
  setObj(result.list);
}; fetchData(); }, []);

  return (
    <>
        <div className="relative md:ml-64 bg-blueGray-100">
          <Navbar name="DASHBOARD" />
          <div className="relative bg-blue-600 md:pt-32 pb-32 pt-12">
            <div className="px-4 md:px-10 mx-auto w-full">
              <div>
                <div className="flex flex-wrap">
                  {obj.map((item, index) => (
                    <Box key={index} name={item.name} description={item.description} version={item.version} context={item.context} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <div className="flex flex-wrap">
              <LineChart />
              <BarChart />
            </div>
            <div className="flex flex-wrap mt-4">
              <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                {/*<PageVisits />*/}
              </div>
              <div className="w-full xl:w-4/12 px-4">
                {/*<SocialTraffic/>*/}
              </div>
            </div>
            <Footer />
          </div>
        </div>
    </>
  );
}
