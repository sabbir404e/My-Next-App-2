import FoodsCard from "@/components/FoodsCard";


const FoodsPage = async () => {

    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods');
    const foods = await res.json();

    // console.log(foods.data);
    return (
        <div>
            <h2>Foods: {foods.data.length}</h2>

            <div className="grid grid-cols-4 gap-4">

            {
                foods.data.map(food => <FoodsCard food={food} key={food.id}></FoodsCard>)
            }

            </div>
        </div>
    );
};

export default FoodsPage;