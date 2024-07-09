import React from "react";
const[user,setUser]=useState({
    username:"",
    email:"",
    name:"",
    password:""
})
const handleinput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setUser({
        ...user,
        [name]:value,
    })

}
const handleSubmit=(e)=>{
    e.preventDefault();
    alert(user);
}
const Register = () => {
  return (
    <>
      <section>
        <main>
          <div className="section-register">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img src="./public/images/register.jpeg" alt="register"></img>
              </div>
              <div className="registration-form">
                <h1 className="main heading mb-3">registration form</h1>
                <br/>
                <form onsubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">username</label>
                        <input type="text" name="name"  placeholder="name" id="name" required autocomplete="off" value={user.name} onchange={handleinput}/>
                        <input type="text" name="username"  placeholder="username" id="username" required autocomplete="off" value={user.username} onchange={handleinput}/>
                        <input type="text" name="email"  placeholder="email" id="email" required autocomplete="off" value={user.email} onchange={handleinput}/>
                        <input type="text" name="password"  placeholder="password" id="password" required autocomplete="off" value={user.password} onchange={handleinput}/>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-submit">
                        Register Now
                    </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;
