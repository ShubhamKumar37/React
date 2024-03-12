import Card from './Card';

export default function Cards({Courses})
{
    
    const Get_Courses = () =>
    {
        let All_Data_Arr = [];
        Object.values(Courses).forEach((Catagory) =>
        {
            Catagory.forEach((Main_Obj) =>
            { 
                All_Data_Arr.push(Main_Obj);
            })
        })

        return All_Data_Arr;
    }
    Get_Courses();

    return (
        <div>
            {
                Get_Courses().map((Course) => {
                    return (<Card key={Course.id} Course={Course}></Card>);
                })
            }
        </div>
    );
}