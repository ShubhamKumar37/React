import Card from './Card.jsx';

export default function Cards(Props)
{

    return (
        <div className='relative max-w-[1080px] mx-auto flex flex-col gap-[4rem] border-collapse '>
            {Props.News && Props.News.map((NewsContent, index) =>
            {
                return (
                    <Card key={index} NewsContent={NewsContent}></Card>
                );
            })}
        </div>
    );
}