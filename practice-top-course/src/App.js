import React from "react";
import NavBar from "./Components/NavBar";
import FilterNav from "./Components/FilterNav";
import Cards from "./Components/Cards";
import { filterData, apiUrl } from "./data";
import { useState, useEffect } from "react";

const App = () => {

  const [Courses, SetCourses] = useState(null);

  async function Fetch_Data()
  {
    let Response = await fetch(apiUrl);
    let Data = await Response.json();

    SetCourses(Data.data);
  }

  useEffect(() => {
    Fetch_Data();
  });

  return (
    <div>
      <div>
        <NavBar></NavBar>

        <FilterNav filterData={filterData}></FilterNav>

        {Courses && <Cards Courses={Courses}></Cards>}
      </div>
    </div>
  );
};

export default App;
