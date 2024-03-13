

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
            {
                Data_Arr && Data_Arr.map((Element))
            }
        </div>
    );
}