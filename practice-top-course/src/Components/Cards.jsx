

export default function Cards(Props)
{
    let Data_Arr = [];

    function Extracting_Data()
    {
        Object.values(Props.Courses).forEach((Element) =>
        {
            Element.forEach((Val) =>
            {
                Data_Arr.push(Val);
            })
        })
    }
    Extracting_Data();
    return (
        <div>
            <p>this is me </p>
        </div>
    );
}