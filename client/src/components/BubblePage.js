import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../tools/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    console.log('axios exists')
    axiosWithAuth()
      .get("http://localhost:5000/api/colors", localStorage.getItem('token'))
      .then(res => {
        // console.log(res);
        setColorList(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />

      {/* <p>i exist and im the bubbles page</p> */}
    </>
  );
};

export default BubblePage;
