

export default function FilterNav(Props)
{
    return (
        <div>
            {
                Props.filterData.map((Type) => 
                {
                    return (
                        <button key={Type.id}>{Type.title}</button>
                    )
                })
            }
        </div>
    );
}