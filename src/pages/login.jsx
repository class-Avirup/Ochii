import { useState } from "react";
import { useNavigate} from "react-router-dom";

import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
const from = location.state?.from?.pathname || "/";
const Login = () => {
  
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("user");
      const response = await fetch(`https://ochii-3.onrender.com/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        const res_data = await response.json();
        console.log("server", res_data);
        localStorage.setItem("user", res_data.msg.isAdmin);
        localStorage.setItem("email", res_data.msg.email);
        localStorage.setItem("username", res_data.msg.username);

        localStorage.setItem("token", res_data.token); //make use of contextapi to use it anywhere in the codebase later
        setUser({ email: "", password: "" });
        toast.success("login successful!");
        navigate(from, { replace: true });
      } else {
        console.log("invalid credentials");
      }
      console.log(response);
    } catch (error) {
      toast.error("Internal server error");
    }
  };

  return (
    <>
      <Navbar />
      {/* <section>
        <main>
          <div className="section-login bg-black h-screen text-white flex w-full">
            <div className="container flex  justify-around items-center ">
              <div className="registration-image  ">
                <img
                  src="https://i.pinimg.com/564x/df/86/a7/df86a70a498bae00a6a91e104c2162ce.jpg"
                  alt="login"
                ></img>
              </div>
              <div className="login-form">
                <h1 className="main heading mb-3">login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div className="flex-col gap-6">
                    <div>
                      {" "}
                      <input
                        type="email"
                        name="email"
                        placeholder="email"
                        id="email"
                        required
                        autoComplete="off"
                        value={user.email}
                        onChange={handleinput}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="password"
                        placeholder="password"
                        id="password"
                        required
                        autoComplete="off"
                        value={user.password}
                        onChange={handleinput}
                      />
                    </div>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section> */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left px-32">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label>
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                 
                  className="input input-bordered"
                  required
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={user.email}
                  onChange={handleinput}
                />
              </div>
              <div className="form-control">
                <label>
                  <span className="label-text ">Password</span>
                </label>
                <input
                  className="input input-bordered"
                  type="password"
                  name="password"
                  
                  id="password"
                  required
                  autoComplete="off"
                  value={user.password}
                  onChange={handleinput}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
