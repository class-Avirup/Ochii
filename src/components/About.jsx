const About = () => {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68]">
      <h1 className="textt text-black font-['Neue_ Montreal'] text-[2.5vw] leading-[3.3vw] tracking-tight px-32">
      🚀 Unlock Your Potential with Expert-Led Courses.
      At Ochi, we believe that knowledge should be accessible, actionable, and transformative. 
      </h1>
      <div className=" px-28 middle flex gap-64 border-t-[1px] border-[#a1b562] h-96 pt-44 text-xl font-['Neue_ Montreal '] text-slate-900 mt-12">
        <div>What you can expect:</div>
        <h1 className="pr-52">
          <span className="text-[#a1b562]" >Ochi</span> is a platform that offers a wide range of courses designed to help you unlock your potential and achieve your goals. Our expert instructors provide high-quality content and personalized support to ensure your success.
        </h1>
        
      </div>
      <div className="w-full border-t-[1px] pt-10 mt-20 border-[#a1b562] flex gap-10 pl-24">
        <div className="w-1/2">
          <h1 className="text-[3.5vw] text-zinc-900">Our approach:</h1>
          <button className="px-10 py-4 bg-zinc-900 rounded-full mt-10 text-white flex gap-4 items-center uppercase">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/3 h-[60vh] rounded-2xl    "><img src="\feature-courses-1.png"/></div>
      </div>
    </div>
  );
};

export default About;
