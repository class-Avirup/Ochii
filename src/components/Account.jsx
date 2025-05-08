import Cart from "./newCart";
import Navbar from "./Navbar";
const Account = () => {
  const username = localStorage.getItem("username");
  return (
    <>
      <Navbar />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Coor.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Hello there👋{" "}
              <h1 className="mb-5 text-6xl font-bold text-gray-300 ">
                {username}
              </h1>
            </h1>
            <p className="mb-5">
              🔥 Limited-Time Offer: Enroll Today & Get 20% Off Your First
              Course!
            </p>
            <div className="avatar flex-col space-y-4 items-center">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="public\self.png" />
              </div>
              <a href="/courses"><button className="btn btn-primary">Get Started</button></a>
            </div>
            
          </div>
          
        </div>
       
      </div>
      <Cart />
     
    </>
  );
};

export default Account;
