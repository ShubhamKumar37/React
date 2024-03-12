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
      try
      {
        let Data = await fetch(apiUrl);
        let Obj = await Data.json();
        SetCourses(Obj.data);
      }
      catch(error)
      {
        console.log("Error occur hua han bhai");
      }
    }
    Fetch_Data();

  });

  function AddFilterHandler(Id)
  {
    if(Id == 1)
    {
      let All_Data_Arr = [];
      Object.values(Courses).forEach((Catagory) =>
      {
          Catagory.forEach((Main_Obj) =>
          { 
              All_Data_Arr.push(Main_Obj.id === Id);
          })
      })
      SetCourses(All_Data_Arr);
    }
  }

  return (
    <div>
      <NavBar></NavBar>

      <NavFilter Get_Id={AddFilterHandler} filterData={filterData}></NavFilter>

      {Courses && <Cards Courses={Courses}></Cards>}
    </div>
  );
};

export default App;
