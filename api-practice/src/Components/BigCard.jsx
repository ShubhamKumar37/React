

export default function Card(Props) {
    return (
        <div className="relative border-4 border-gray-900 p-3 py-5 rounded-lg m-2 flex flex-col justify-evenly">
            <div className="w-full flex flex-col justify-between">
                <span className="font-bold text-red-600 text-xl">Normal news</span>
                {/* Published on */}
                <p className="text-sm text-gray-500">{Props.NewsContent.publishedAt.substring(0, 10)}</p>


                <div className="relative flex flex-col gap-4">

                    {/* Title of Card*/}
                    <a className="font-bold text-xl text-black no-underline cursor-pointer" href={Props.NewsContent.urlToImage} target="_blank">{Props.NewsContent.title}</a>

                    {/* Description of the news and publish by whom */}
                    <div className="">
                        <p className="relative opacity-80 italic">{Props.NewsContent.author}-</p>
                        <p className="text-sm">{Props.NewsContent.description && Props.NewsContent.description.substring(0, 160)}...<span><a href={Props.NewsContent.url} target="_blank" className="underline-none text-blue-500 cursor-pointer">ReadMore</a></span></p>
                    </div>
                </div>

            </div>
            <div className="relative mx-auto">
                {/* Image of Card */}
                <a href={Props.NewsContent.url} target="_blank" className=" mt-4 p-2 rounded-lg "><img src={Props.NewsContent.urlToImage}  className=" object-cover rounded-lg" loading="lazy"></img></a>
                
            </div>
        </div>
    );
}