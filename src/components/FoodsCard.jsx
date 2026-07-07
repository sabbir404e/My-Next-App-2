import Image from "next/image";
import Link from "next/link";


const FoodsCard = ({food}) => {

    const {dish_name, category, image_link, price, cuisine, id} = food;
    return (
       <div className="card bg-base-100 shadow-sm">
  <figure>
    <Image src={image_link} width={200} height={200} alt={dish_name}></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {dish_name}
      <div className="badge badge-secondary">{category}</div>
    </h2>
    <p>Price: ${price}</p>
    <p>{cuisine}</p>
    <p></p>
    <div className="card-actions justify-end">
        <button className="btn btn-primary">Add to Cart</button>

      <Link href={`/foods/${id}`}>
         <button className="btn btn-ghost">Show Details</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default FoodsCard;