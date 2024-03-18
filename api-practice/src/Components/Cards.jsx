import Card from './Card.jsx';
import BigCard from './BigCard.jsx';

export default function Cards(Props) {
    let Count = 3;
    let Num = 4;
    return (
        <div className='relative max-w-[850px] flex flex-col gap-[4rem] border-collapse '>
            {Props.News && Props.News.map((NewsContent, index) => {
                Count++;
                if (Count % Num === 0) {
                    return (
                        <BigCard key={index} NewsContent={NewsContent}></BigCard>
                    );
                }
                else {
                    return (
                        <Card key={index} NewsContent={NewsContent}></Card>
                    );
                }
            })}
        </div>
    );
}