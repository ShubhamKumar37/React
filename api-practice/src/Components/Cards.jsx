import Card from './Card.jsx';

export default function Cards(Props)
{
    return (
        <div className='relative max-w-[900px] ml-9 flex flex-col gap-[4rem] border-collapse '>
            {Props.News && Props.News.map((NewsContent, index) =>
            {
                return (
                    <Card key={index} NewsContent={NewsContent}></Card>
                );
            })}
        </div>
    );
}