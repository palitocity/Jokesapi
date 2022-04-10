import React, { useContext } from "react";
import { datafeed } from "../jokes";
const Page = () => {
    const result = useContext(datafeed)
    console.log(result)
  return (
    <div id="mainpage">
      {result}
    </div>
  );
};
export default Page;
