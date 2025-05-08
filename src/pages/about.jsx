
import Navbar from "../components/Navbar";
const About = () => {
  return (
    <>
      <Navbar />
      <script src="https://cdn.tailwindcss.com"></script>

      <div className="  bg-black" id="full">
        <div className="cursorcircle h-3 w-3 absolute z-50 rounded-full bg-white transition-all"></div>
        {/* implement the cursor later */}
        <div className="hero w-full h-screen bg-black">
          <div className="heading text-white text-9xl  font-medium pl-3 pt-24 w-screen">
            <div className="bounding bg-black overflow-hidden w-fit">
              <h1 className="  text-white ">PRODUCT</h1>
            </div>
            <div className="pattern inline-block">
              <div className="bounding bg-black overflow-hidden w-fit">
                <h1 className="opacity-60 ml-24 ">DESIGNER</h1>
              </div>
              <div className="bounding bg-black overflow-hidden w-fit">
                <h5 className="text-lg opacity-90 translate-y-full text-right">
                  BASED IN TORONTO
                </h5>
              </div>
            </div>

            <div className="smallheadings text-sm mr-4 mt-5 text-right flex-col items-end">
              <div className="bounding bg-black overflow-hidden w-fit">
                <h5 className="">AVAILABLE FOR FREELANCE</h5>
              </div>
              <div className="bounding bg-black overflow-hidden w-fit ">
                <h5 className="">WORK FROM MAY23</h5>
              </div>
            </div>

            <div className="footer text-sm flex justify-between text-white mt-52">
              <a href="#">
                PREVIOUSLY WORKED AT YML<i className="ri-arrow-right-up-line"></i>
              </a>
              <a href="#">
                PROTOPIE AMBASSADOR<i className="ri-arrow-right-up-line"></i>
              </a>
              <div className="flex gap-2 mr-1">
                {" "}
                <button className="bg-slate-400 rounded-full w-5 h-5">
                  <i className="ri-arrow-down-fill"></i>
                </button>
                <button className="bg-slate-400 rounded-full w-5 h-5">
                  <i className="ri-arrow-down-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="second h-screen pt-14 bg-black ">
          <div className="elem w-10/12 border-zinc-100  border-t-2 text-white border-solid flex justify-between items-center relative ml-4">
            <img
              src="plug.png"
              className="absolute z-20 h-full hidden"
              alt="plug"
            />
            <h1 className="text-8xl mt-7 mb-8 opacity-80 font-medium">THE PLUG</h1>
            <h5>2022</h5>
          </div>
          <div className="elem w-10/12 border-zinc-100  border-t-2 text-white border-solid flex justify-between items-center relative ml-4">
            <img
              src="ixperience.png"
              className="absolute z-20 h-full hidden"
              alt="ixperience"
            />
            <h1 className="text-8xl mt-7 mb-8 opacity-80 font-medium">
              IXPERIENCE
            </h1>
            <h5>2022</h5>
          </div>
          <div className="elem w-10/12 border-zinc-100  border-t-2 text-white border-solid flex justify-between items-center relative ml-4">
            <img
              src="hudu.png"
              className="absolute z-20 h-full hidden"
              alt="hudu"
            />
            <h1 className="text-8xl mt-7 mb-8 opacity-80 font-medium">HUDU</h1>
            <h5>2022</h5>
          </div>
          <div className="elem w-10/12 border-zinc-100  border-t-2 text-white border-solid  ml-4"></div>
        </div>
        <div className="third bg-black h-1/2">
          <div className="about bg-black px-11 flex items-center space-x-8 pl-16 justify-center pt-11">
            <img src="cynthia.png" className="w-48 " alt="me" />
            <div className="textcontainer text-white w-96">
              <h6 className="opacity-70">(ABOUT ME)</h6>
              <p className="mb-5">
                Im a product designer with a passion for creating products that
                not only look good but also solve real problems. When Im not
                sketching ideas on paper, you can find me binge-watching a
                Netflix series or playing video games. My design philosophy is
                simple: make it visually appealing, functional, and bring a
                smile to peoples faces. Im the designer you want on your team
                if you want to make people say I need that in my life!.
              </p>
              <a href="#" className="border-2 rounded-xl  p-1">
                Lets talk
              </a>
            </div>
          </div>
        </div>
        <div className="fourth bg-black h-1/2 pt-28">
          <p className="opacity-60 text-white">(FORGOT TO MENTION)</p>
          <a className="pt-4 text-white" href="#">
            SUBSCRIBE TO MY YOUTUBE CHANNEL
            <i className="ri-arrow-right-up-line"></i>
          </a>

          <div
            id="footer"
            className="text-white flex justify-between px-6 mt-96 pb-9"
          >
            <div id="footerleft" className="flex space-x-4">
              <p>2023 &copy;</p>
              <p>0:35 AM EST</p>
            </div>

            <div id="footerright" className="flex space-x-8">
              <a href="#">DRIBBBLE</a>
              <a href="#">INSTAGRAM</a>
              <a href="#">LINKEDIN</a>
              <a href="#">TWITTER</a>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

      <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.min.js"></script>
      <script src="script.js"></script>
    </>
  );
};

export default About;
