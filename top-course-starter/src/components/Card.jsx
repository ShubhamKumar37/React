

export default function Card(Course)
{
    return (
        <div>
            <div>
                <img src={Course.image.url}></img>
            </div>
        </div>
    );
}