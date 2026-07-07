
const FoodDetailPage = async ({params}) => {

    const {foodId} = await params;
    
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const food = data.data;
    // console.log('food in food detail page', food);

    const {id, dish_name} = food;
    return (
        <div>
            <h2>Show Details of Food: {foodId}</h2>
            <h3 className="text-3xl">{dish_name}</h3>
        </div>
    );
};

export default FoodDetailPage;