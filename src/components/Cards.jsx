import React from "react";

const Cards = () => {
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 flex items-center gap-5 px-32 z-[999]">
        <div className="cardContainer h-[52vh] w-1/2 ">
          <div className="card w-full h-full bg-[#004D43]  rounded-xl flex items-center justify-center relative">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              className="w-32"
            />
            <button className="absolute left-10 bottom-10 border-2 rounded-full  px-5 py-1 border-yellow-500 text-yellow-500">
              ©2019–2022
            </button>
          </div>
        </div>
        <div className="cardContainer h-[52vh] w-1/2 flex gap-5">
          <div className="card w-1/2 h-full bg-[#0b302b] rounded-xl relative flex justify-center items-center">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              className="w-32"
            />
            <button className="absolute left-10 bottom-10 border-2 rounded-full  px-5 py-1 border-yellow-500 text-yellow-500">
              ©2019–2022
            </button>
          </div>
          <div className="card w-1/2 h-full bg-[#0b302b] rounded-xl relative flex justify-center items-center">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              className="w-32"
            />
            <button className="absolute left-10 bottom-10 border-2 rounded-full  px-5 py-1 border-yellow-500 text-yellow-500">
              ©2019–2022
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
