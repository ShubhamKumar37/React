

export default function NewFilter({filterData, AddFilterHandler})
{

    function AddFilterHandler(Event)
    {
        AddFilterHandler.AddFilterHandler(Event.target.value.id);
    }
    
    return (
        <div>
            {
                filterData.map((Value) => {
                    return (
                        <button onClick={AddFilterHandler} key={Value.id}>{Value.title}</button>
                    );
                })
            }
        </div>
    );
}