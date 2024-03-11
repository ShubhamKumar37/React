import React from "react";
import { filterData, apiUrl } from "./data";
import NavBar from "./components/NavBar";
import NavFilter from "./components/NavFilter";
import Cards from "./components/Cards";
import {useState, useEffect } from "react";

const App = () => {
  const [Courses, SetCourses] = useState(null);

  useEffect(() =>{
    async function Fetch_Data()
    {
      let Data = await fetch(apiUrl);
      let Obj = await Data.json();
      SetCourses(Obj.data);

      // console.log(Obj);
    }

    Fetch_Data();
  })
  return (
    <div>
      <NavBar></NavBar>

      <NavFilter filterData={filterData}></NavFilter>

      <Cards Courses={Courses}></Cards>
    </div>
  );
};

export default App;
