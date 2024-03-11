

export default function NewFilter({filterData})
{
    return (
        <div>
            {
                filterData.map((Value) => {
                    return (
                        <button>{Value.title}</button>
                    );
                })
            }
        </div>
    );
}