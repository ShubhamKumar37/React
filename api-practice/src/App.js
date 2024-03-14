import React from "react";
import {API} from "./data.js";
import { useState, useEffect } from "react";
import Cards from "./Components/Cards.jsx";



const App = () => {

  const [News, SetNews] = useState(null);

  async function Fetch_Data()
  {
    try
    {
      let Raw = await fetch(API);
      let Jobj= await Raw.json();
      
      console.log(Jobj.articles[0]);
      SetNews(Jobj.articles);

    }
    catch(e)
    {
      console.log("Error a gaya bhai");
    }
  }
  
  useEffect(() =>
  {
    Fetch_Data();
  }, []);

  return (
    <div>
      <div>
        <nav className="bg-red-600 relative text-center text-white font-bold text-6xl underline">Todays News</nav>

        

        {News && <Cards News={News}></Cards>}
      </div>
    </div>
  );
};

export default App;
