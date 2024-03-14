import SliderCard from "./SliderCard";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useState, useEffect } from "react";

export default function NewsSlider(Props)
{

    const [Index, SetIndex] = useState([0, 0, 0, 0, 0]);
    const [Ind, SetInd] = useState(0);

    function LeftNewsHandler()
    {
        if(Ind - 1 === -1)
        {
            SetInd(4);
        }
        else
        {
            SetInd(Ind - 1);
        }
        console.log(Ind);
    }   
    function RightNewsHandler()
    {
        if(Ind + 1 === 5)
        {
            SetInd(0);
        }   
        else
        {
            SetInd(Ind + 1);
        }
        console.log(Ind);
    }
    function RandomNewsHandler()
    {
        function getRandomArbitrary(min, max) {
            let Value = Math.floor(Math.random() * (max - min) + min);
            if (Index.includes(Value) === true) {
                Value = getRandomArbitrary(min, max);
            }
            
            return Value;
        }

        let Arr = [];
        for(let i = 0; i < 5; i++)
        {
            Arr.push((getRandomArbitrary(0, Props.News.length)));
        }
        console.log(Arr);
        SetIndex(Arr);
    }
    useEffect(() =>
    {
        RandomNewsHandler();
    }, []);

    return (
        <div className="fixed h-fit rounded-lg p-4 border-2 bg-red-600 text-white m-2 w-fit mx-auto">
            <div className="flex flex-row justify-between">
                <h2 className="font-bold text-2xl underline mb-3">Trending News</h2>
                <div className="flex flex-row gap-4">
                    <button onClick={LeftNewsHandler}>
                        <IoIosArrowBack></IoIosArrowBack>
                    </button>
                    <button onClick={RightNewsHandler}>
                        <IoIosArrowForward></IoIosArrowForward>
                    </button>
                </div>
            </div>
            <SliderCard News={Props.News[Index[Ind]]}></SliderCard>

            <div onClick={RandomNewsHandler}>
                <button className="bg-red-800 p-2 px-4 rounded-lg hover:scale-110 mt-2 transition-all duration-300">Next 5 News</button>
            </div>

        </div>
    );
}
