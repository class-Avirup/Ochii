import toast from "react-hot-toast";
import PropTypes from "prop-types";
function Ecards({ item }) {
  const getUser = async (id) => {
    try {
      console.log(id);
      const response = await fetch(
        `http://localhost:4001/api/auth/cart/:${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        }
      );
      toast.success("Item added to cart!");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
     <div className="mt-4 my-3 p-3 w-full">
      <div className="card w-56 h-[420px] bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border flex flex-col">
        <figure className="h-32 w-full flex-shrink-0">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        </figure>
        <div className="card-body p-4 flex flex-col flex-grow overflow-hidden">
          <div className="flex flex-col space-y-2">
            <h2 className="card-title text-sm line-clamp-1">
              {item.name}
              <div className="badge badge-secondary ml-1">{item.category}</div>
            </h2>
            <p className="text-xs line-clamp-2">{item.title}</p>
          </div>
          <div className="card-actions justify-between mt-auto pt-2">
            <div className="badge badge-outline">${item.price}</div>
            <div className="flex space-x-1">
              <button
                className="btn btn-outline btn-accent rounded-3xl btn-sm"
                onClick={() => getUser(item._id)}
              >
                Add to Cart
              </button>
              <button className="btn btn-sm px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Ecards;
Ecards.propTypes = {
  item: PropTypes.node.isRequired
};