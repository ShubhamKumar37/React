import React from "react";
import { API } from "./data.js";
import { useState, useEffect } from "react";
import Cards from "./Components/Cards.jsx";
import NewsSlider from "./Components/NewsSlider.jsx";



const App = () => {

  const [News, SetNews] = useState(null);

  async function Fetch_Data() {
    try {
      let Raw = await fetch(API);
      let Jobj = await Raw.json();

      console.log(Jobj.articles[0]);
      SetNews(Jobj.articles);

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
        <nav className="bg-red-600 relative text-center text-white font-bold text-6xl underline py-3">Todays News</nav>

        <div className="flex">

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
