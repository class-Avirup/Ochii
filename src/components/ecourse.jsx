import  { useEffect, useState } from "react";
import Ecard from "./ecard";
import axios from "axios";
import { Link } from "react-router-dom";
import list from "../assets/list.json";
function Ecourse() {
  const filterdata = list.filter((data) => data.category === "paid");
  console.log(filterdata);

   
     const [course, setCourse] = useState([]);
     useEffect(() => {
  const getBook = async () => {
    try {
      const res = await axios.get("https://ochii-3.onrender.com/api/auth/course", {
        withCredentials: true // Include if your API uses cookies/session
      });
      console.log(res.data);
      setCourse(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  getBook();
}, []);
    
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-lime-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          Start, switch, or advance your career with more than 10,000 courses, Professional Certificates, and degrees from world-class universities and companies
          </p>
          <Link to="/">
            <button className="mt-6 bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {course.map((item) => (
            <Ecard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Ecourse;
