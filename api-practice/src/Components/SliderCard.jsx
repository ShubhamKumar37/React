

export default function SliderCard(Props)
{
    return (
        <div className="border-2 border-[#b8b8b834] rounded-lg w-[22rem] p-3">
            <div>
                <img src={Props.News.urlToImage} className="w-[10rem] rounded-lg mx-auto object-cover aspect-square" loading="lazy"></img>
            </div>
            <div>
                <h2 className="font-bold text-xls">{Props.News.title && Props.News.title.substring(0, 50)}..</h2>
            </div>
            <div>
                <p className="text-sm">{Props.News.description && Props.News.description.substring(0,100)}...<span><a href={Props.News.url} target="_blank" className="underline-none text-blue-500 cursor-pointer">ReadMore</a></span></p>
            </div>
        </div>
    );
}

