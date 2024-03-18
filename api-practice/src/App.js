import React from "react";
import { Obj } from "./data.js";
import { useState, useEffect } from "react";
import Cards from "./Components/Cards.jsx";
import NewsSlider from "./Components/NewsSlider.jsx";
import MainNav from "./Components/MainNav.jsx";
import SideBar from "./Components/SideBar.jsx";



const App = () => {

  const [News, SetNews] = useState(null);

  async function Fetch_Data() {
    try {
      // let Raw = await fetch(API);
      // let Jobj = await Raw.json();

      // console.log(Jobj.articles[0]);
      SetNews(Obj.articles);
      console.log(Obj.articles);

    }
    catch (e) {
      console.log("Error a gaya bhai");
    }
  }

  useEffect(() => {
    Fetch_Data();
  }, []);

  // console.log(News);

  return (
    <div>
      <div className="relative">
        <MainNav></MainNav>
        <div className="flex justify-evenly">
          <SideBar></SideBar>
          {
          News && <Cards News={News}></Cards>
          }

          <div className="relative right-0">
            {
              News && <NewsSlider News={News}></NewsSlider>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
