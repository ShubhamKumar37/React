

export default function ProductCard({Post})
{
    return (
        <div>
            <div>{Post.title}</div>

            <div>{Post.description}</div>

            <div>
                <img src={Post.image}></img>
            </div>

            <div>
                <div>{Post.price}</div>

                <div>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}