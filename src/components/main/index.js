import React, { useState } from "react";
import Buttons from "../buttons";
import Jokes from "../jokes";
import Banner from "../banner";

const MainPage = (props) => {
  //   const buttons = ["daddy", "mummuy","childrenproof","daddy", "mummuy","childrenproof"];
  const [cardurl, setCardUrl] = useState(
    "https://api.chucknorris.io/jokes/search?query=all"
  );
  const displayData = (id) => {
    let link = id.target.getAttribute("data-url");
     setCardUrl(link)
    console.log(link);
  };
  const search =(e)=>{
   
    let link = "https://api.chucknorris.io/jokes/search?query="+ document.getElementById("search").value.toLowerCase();
    setCardUrl(link)
    console.log(link);
  }
  return (
    <><Banner {...{search}}/>
    <div id="mainpage">
      <Buttons displayData={displayData} />
      <hr />
      <Jokes cardurl={ cardurl } />
    </div>
    </>
  );
};

export default MainPage;
