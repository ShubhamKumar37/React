import { useState, useEffect } from "react";
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function RandomGIF() {
  const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const [GIF, setGIF] = useState("");

  async function fetchGIF() {
    try {
      const {data} = await axios.get(URL);
      // console.log(response);
      const gifURL = data.data.images.downsized_large.url;
      console.log(gifURL);
      setGIF(gifURL);
    } catch (error) {
      console.error("Error fetching GIF:", error);
    }
  }

  useEffect(() => {
    fetchGIF();
  }, []);

  function generateHandler() {
    fetchGIF();
  }

  return (
    <div className="w-8/12 relative flex flex-col items-center bg-green-300 rounded-lg border border-black min-h-[10rem] justify-between p-2 text-xl font-bold underline text-[#415c3d] gap-3">
      <h1>A Random GIF</h1>
      <img src={GIF} width="450" alt="Random GIF" className="rounded-lg"></img>

      <button onClick={generateHandler} className="bg-blue-800 text-white font-bold text-xl w-7/12 rounded-lg hover:scale-110 transition-all duration-150 p-1">Generate a GIF</button>
    </div>
  );
}
