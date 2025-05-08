

const Featured = () => {
  

  return (
    <div data-scroll data-scroll-speed="" className=" w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-2 mb-20">
        <h1 className="text-6xl font-[] font-thin tracking-tight mb-12">
          Featured courses
        </h1>
      </div>
      <div className="px-20 ">
        <div className="cards w-full flex gap-10 ">
          <div className=" relative card rounded-xl  w-1/2 h-[60vh]  ">
            
            <div className=" rounded-xl w-full h-full">
              <div className="topic flex gap-6 ">
                <div className="h-3 w-3 bg-white rounded-full mb-16 "></div>
                <div>FYDE</div>
              </div>
              <img
                src=" https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                className="w-full h-full bg-cover"
              />
              <div className="buttons gap-3 mt-6 flex">
                <button className="rounded-3xl border-[1px] p-2 border-zinc-200 w-24 uppercase">
                  AUDIT
                </button>
                <button className="rounded-3xl border-[1px] p-2 border-zinc-200 w-32 uppercase">
                  copywriting
                </button>
                <button className="rounded-3xl border-[1px] p-2 border-zinc-200 w-32 uppercase">
                  sales deck
                </button>
                <button className="rounded-3xl border-[1px] p-2 border-zinc-200 w-32 uppercase">
                  slide design
                </button>
              </div>
            </div>
          </div>

          <div className="card rounded-xl relative w-1/2 h-[60vh] ">
            
            <div className=" rounded-xl w-full h-full ">
              <div className="topic flex gap-6 ">
                <div className="h-3 w-3 bg-white rounded-full mb-16 "></div>
                <div>VISE</div>
              </div>
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                className="w-full h-full bg-cover"
              />
              <div className="buttons gap-3 mt-6 flex">
                <button className="rounded-full border-[1px] p-2 border-zinc-200 w-32 uppercase">
                  agency
                </button>
                <button className="rounded-3xl border-[1px] p-2 border-zinc-200 w-60 uppercase">
                  company presentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-20 mt-40">
        <div className="cards w-full flex gap-10">
          <div className=" relative card rounded-xl  w-1/2 h-[60vh]  ">
            
            <div className=" rounded-xl w-full h-full">
              <div className="topic flex gap-6 ">
                <div className="h-3 w-3 bg-white rounded-full mb-16"></div>
                <div>FYDE</div>
              </div>
              <img
                src=" https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                className="w-full h-full bg-cover"
              />
              <div className="buttons gap-3 mt-6 flex">
                <button className="rounded-3xl border-[1px] p-2 border-zinc-200 w-54 uppercase">
                  brand identity
                </button>
                <button className="rounded-3xl border-[1px] p-2 border-zinc-200 w-54 uppercase">
                  design research
                </button>
                <button className="rounded-3xl border-[1px] p-2 border-zinc-200 w-54 uppercase">
                  investor deck
                </button>
              </div>
            </div>
          </div>

          <div className="card rounded-xl relative w-1/2 h-[60vh] ">
            
            <div className=" rounded-xl w-full h-full">
              <div className="topic flex gap-6 ">
                <div className="h-3 w-3 bg-white rounded-full mb-16"></div>
                <div>VISE</div>
              </div>
              <img
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                className="w-full h-full bg-cover"
              />
              <div className="buttons gap-3 mt-6 flex">
                <button className="rounded-full border-[1px] p-2 border-zinc-200 w-54 uppercase">
                  branded template
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="border-[1px] border-zinc-100 uppercase ">
          view all case studies
          <div className="circle h-2 w-2"></div>
        </button>
      </div>
    </div>
  );
};

export default Featured;
