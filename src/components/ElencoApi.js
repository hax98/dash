import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Navbar from "components/Navbar.js";
import Box from "components/Box.js";
import PageVisits from "components/PageVisits";
import SocialTraffic from "components/SocialTraffic";
import Footer from "components/Footer";
import { fetchData } from "./chiamate";


export default function Dashboard() {

const [apis,setApis] = useState([]);
useEffect(() => {
  fetchData().then(setApis);
}, []);

const history = useHistory();
  return (
        <div className="relative md:ml-64 bg-blueGray-100">
          <Navbar name="ELENCO API" />
          <div className="relative bg-blue-600 md:pt-32 pb-32 pt-12">
            <div className="px-4 md:px-10 mx-auto w-full">
              <div>
                <div className="flex flex-wrap">
                  {apis.map((item, index) => (
                    <Box key={index} name={item.name}  version={item.version} context={item.context}
                    onClick={() => history.push(`/api/${item.id}`)}
                     />
                  ))}
                  {apis.map((item, index) => (
                    <Box key={index} name={item.name}  version={item.version} context={item.context}
                    onClick={() => history.push(`/api/${item.id}`)}
                     />
                  ))}
                  {apis.map((item, index) => (
                    <Box key={index} name={item.name}  version={item.version} context={item.context}
                    onClick={() => history.push(`/api/${item.id}`)}
                     />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}


/*<div className="relative md:ml-64 bg-blueGray-100">
  <Navbar name="ELENCO API" />
  <div className="relative bg-blue-600 md:pt-32 pb-32 pt-12">
    <div className="px-4 md:px-10 mx-auto w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {apis.map((item, index) => (
          <Box
            key={index}
            name={item.name}
            version={item.version}
            context={item.context}
            onClick={() => history.push(`/api/${item.id}`)}
          />
        ))}
      </div>
    </div>
  </div>
</div>
 */