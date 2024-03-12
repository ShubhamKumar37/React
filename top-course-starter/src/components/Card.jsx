

export default function Card({Course})
{
    return (
        <div>
            <div>
                <img src={Course.image.url} className="relative h-[5rem] w-[5rem]"></img>
                <h1>{Course.title}</h1>
                <p>{Course.description}</p>
            </div>
        </div>
    );
}