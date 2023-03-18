import React, {useState} from "react";
import Data from "./Data.json";

const SignUp = () => {
    const [MyData, setMyData] = useState(Data);
    const [Myname, setMyname] = useState({name:"name"});
    const [Myemail, setMyemail] = useState({email:"email"});
    const [Mypass, setMypass] = useState({pass:"pass"});
    const [Mycpass, setMycpass] = useState({cpass:"cpass"});
const chname = (e)=>{
    setMyname({[e.target.name]:e.target.value})
}
const chemail = (e)=>{
    setMyemail({[e.target.name]:e.target.value})
}
const chpass = (e)=>{
    setMypass({[e.target.name]:e.target.value})
}
const chcpass = (e)=>{
    setMycpass({[e.target.name]:e.target.value})
}
const subbb = (es)=>{
    es.preventDefault();
    const newList = [{name:Myname.name,email:Myemail.email,pass:Mypass.pass,cpass:Mycpass.cpass}]
    setMyData([...MyData,...newList])
    console.log({...MyData,...newList})
}
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <form className="mx-1 mx-md-4" onSubmit={subbb}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="name"
                              onChange={chname}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              name="email"
                              onChange={chemail}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              name="pass"
                              onChange={chpass}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              name="cpass"
                              onChange={chcpass}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Repeat your password
                            </label>
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg mx-2"
                            
                          >
                            Register
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-lg mx-2"
                          >
                            Log in
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <h2>Striped Rows</h2>
        <p>The .table-striped class adds zebra-stripes to a table:</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>sr</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Confirm Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {MyData.map((ddd) => {
              return (
                <>
                  <tr key={ddd.sr}>
                    <td>{ddd.sr}</td>
                    <td>{ddd.name}</td>
                    <td>{ddd.email}</td>
                    <td>{ddd.pass}</td>
                    <td>{ddd.cpass} </td>
                    <td><i className="fa fa-pencil-square-o" aria-hidden="true"></i><i className="fa fa-trash-o  mx-5" aria-hidden="true"></i> </td>
      
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SignUp;
