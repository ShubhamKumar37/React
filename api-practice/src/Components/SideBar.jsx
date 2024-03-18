import { FaCrown } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { FaGlassMartini } from "react-icons/fa";
import { GiIndiaGate } from "react-icons/gi";
import { MdTempleHindu } from "react-icons/md";
import { RiGlobeLine } from "react-icons/ri";
import { MdAutoGraph } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md";
import { GiOnTarget } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { useState } from "react";

export default function SideBar() {
    
    const [Mode, SetMode] = useState(false);

    function ModeHandler()
    {
        SetMode(!Mode);
        if(Mode === true)
        {
            document.body.style.color = "black";
            document.body.style.backgroundColor = "white";
        }
        else
        {
            document.body.style.color = "white";
            document.body.style.backgroundColor = "black";
        }
    }
    
    return (
        <div>
            <div>
                <div></div>
                <button></button>
            </div>

            <label class="inline-flex items-center mb-5 cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" onChange={ModeHandler} />
                <div class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark mode</span>
            </label>

            <div>
                Edition

                <select>
                    <option>IN</option>
                    <option>US</option>
                </select>
            </div>

            <div>
                <div className="bg-[#CC0000] text-white flex flex-row "><FaCrown /> Subscribe</div>
                <ul className="flex flex-col gap-2 ml-4">
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <FaHome /> Home
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <MdLiveTv />TV
                        {/* <select>
                            <option> </option>
                            <option>Live TV</option>
                            <option>Primetv</option>
                        </select> */}
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <FaBook />Magzine
                        {/* <select className="absolute">
                            <option> </option>
                            <option>Latest <br/>  Edition</option>
                            <option>Insight</option>
                        </select> */}
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <FaGlassMartini />Life+Style
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <GiIndiaGate />India
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <MdTempleHindu />South
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <RiGlobeLine />World
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <MdAutoGraph />Business
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <FaRegLightbulb />Technology
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <MdFreeBreakfast />Entertairment
                        {/* <select>
                            <option></option>
                            <option>Show Buzz</option>
                            <option>Bollywood</option>
                            <option>Hollywood</option>
                            <option>OTT</option>
                            <option>Latest<br/> Reviews</option>
                        </select> */}
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <GiOnTarget />Sports
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <BiSolidOffer />Special
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <IoLogoYoutube />Videos
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <TbWorld />Other News
                    </li>
                </ul>
            </div>
        </div>
    );
}