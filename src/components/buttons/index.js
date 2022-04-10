import React, { useState, useEffect } from "react";
import axios from "axios";
const Buttons = ({displayData}) => {
  const [buttons, setButtons] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((respond) => {
        setButtons(respond.data);
        console.log("i came with data", respond);
      })
      .catch((err) => console.log("What the fuck", err));
  }, []);
  
  const listButtons = buttons.map((but, index) => (
    <button
      key={index}
      id={"button" + index}
      className={"button button" + index}
      onClick={displayData}
      data-url={"https://api.chucknorris.io/jokes/search?query=" + but}
    >
      {(but + " jokes").toUpperCase()}
    </button>
  ));
  return <div className="button_session"> {listButtons} </div>;
};

export default Buttons;
