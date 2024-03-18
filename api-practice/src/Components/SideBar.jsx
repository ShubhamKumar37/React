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

export default function SideBar() {
    return (
        <div>
            <div>
                <div></div>
                <button></button>
            </div>

            <div className="flex flex-row justify-between items-baseline">
                Dark Mode
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox"  />
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                </label>
            </div>

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