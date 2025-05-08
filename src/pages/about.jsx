
import Navbar from "../components/Navbar";
const About = () => {
  return (
    
    <>
      <Navbar />
      <script src="https://cdn.tailwindcss.com"></script>

      <div className="  bg-zinc-900" id="full">
        <div className="cursorcircle h-3 w-3 absolute z-50 rounded-full bg-white transition-all"></div>
        {/* implement the cursor later */}
        <div className="hero w-full h-screen bg-zinc-900">
          <div className="heading text-white text-9xl  font-medium pl-3 pt-24 w-screen">
            <div className="bounding bg-zinc-900 overflow-hidden w-fit">
              <h1 className="  text-white ">SOFTWARE</h1>
            </div>
            <div className="pattern inline-block">
              <div className="bounding bg-zinc-900 overflow-hidden w-fit">
                <h1 className="opacity-60 ml-24 ">DEVELOPER</h1>
              </div>
              <div className="bounding bg-zinc-900 overflow-hidden w-fit">
                <h5 className="text-lg opacity-90 translate-y-full text-right">
                  BASED IN KALYANI
                </h5>
              </div>
            </div>

            <div className="smallheadings text-sm mr-4 mt-5 text-right flex-col items-end">
              <div className="bounding bg-zinc-900 overflow-hidden w-fit">
                <h5 className="">AVAILABLE FOR JOB OFFER AND FREELANCE</h5>
              </div>
              <div className="bounding bg-zinc-900 overflow-hidden w-fit ">
                <h5 className="">WORK FROM MAY23</h5>
              </div>
            </div>

            <div className="footer text-sm flex justify-between text-white mt-52">
              <a href="#">
                AT NIT_Durgapur<i className="ri-arrow-right-up-line"></i>
              </a>
              <a href="#">
                AVIRUP DAS<i className="ri-arrow-right-up-line"></i>
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
        <div className="second h-screen pt-14 bg-zinc-900 ">
          <div className="elem w-10/12 border-zinc-100  border-t-2 text-white border-solid flex justify-between items-center relative ml-4">
            <img
              src="plug.png"
              className="absolute z-20 h-full hidden"
              alt="plug"
            />
            <h1 className="text-8xl mt-7 mb-8 opacity-80 font-medium">REACTJS</h1>
            <h5>FRONTEND</h5>
          </div>
          <div className="elem w-10/12 border-zinc-100  border-t-2 text-white border-solid flex justify-between items-center relative ml-4">
            <img
              src="ixperience.png"
              className="absolute z-20 h-full hidden"
              alt="ixperience"
            />
            <h1 className="text-8xl mt-7 mb-8 opacity-80 font-medium">
              EXPRESSJS
            </h1>
            <h5>BACKEND</h5>
          </div>
          <div className="elem w-10/12 border-zinc-100  border-t-2 text-white border-solid flex justify-between items-center relative ml-4">
            <img
              src="hudu.png"
              className="absolute z-20 h-full hidden"
              alt="hudu"
            />
            <h1 className="text-8xl mt-7 mb-8 opacity-80 font-medium">MONGO DB</h1>
            <h5>DATABASE</h5>
          </div>
          <div className="elem w-10/12 border-zinc-100  border-t-2 text-white border-solid  ml-4"></div>
        </div>
        <div className="third bg-zinc-900 h-1/2">
          <div className="about bg-zinc-900 px-11 flex items-center space-x-8 pl-16 justify-center pt-11">
            <img src="public\self.png" className="w-48 rounded-xl " alt="me" />
            <div className="textcontainer text-white w-96">
              <h6 className="opacity-70">(ABOUT ME)</h6>
              <p className="mb-5">
              A detail-oriented Software Developer with 2 years of experience in full-stack development, specializing in C++, JavaScript, and Golang. Skilled in frameworks like React.js and Express.js. Expertise in database management ( MySQL) and Operating Systems. Git, Docker, Jenkins and AWS  for real-time applications.
              </p>
              <a href="public\CV_Avirup_fin.pdf" download  
           className="inline-flex items-center justify-center bg-gray-600 hover:bg-gray-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            Download Resume (PDF)
        </a>
            </div>
          </div>
        </div>
        
        
        
        
        
        
            <i className="ri-arrow-right-up-line"></i>
          

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
              <a href="https://github.com/class-Avirup">GITHUB</a>
              <a href="https://www.linkedin.com/in/avirup-das-9a6177273/">LINKEDIN</a>
              <a href="#">TWITTER</a>
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
