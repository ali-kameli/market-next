import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { signup } from "../../services/userServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [, forceUpdate] = useState();

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "this field is required",
        min: "this field must more 5 character",
        email: "the email entered is not valid ",
      },
      element: (message) => (
        <div
          style={{
            color: "red",
            position: "absolute",
            fontWeight: "lighter",
            margin: "9px",
          }}
        >
          {message}
        </div>
      ),
    })
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { fullname, email, password };

    try {
      if (validator.current.allValid()) {
        const { status, data } = await signup(user);
        if (status === 201) {
          toast.success("User created successfully", {
            position: "top-right",
            closeOnClick: true,
          });
          localStorage.setItem("token", data.token);
        }
      } else {
        validator.current.showMessages();

        forceUpdate(1);
      }
    } catch (ex) {
      console.log(ex);
      toast.error("Error in create user", {
        position: "top-right",
        closeOnClick: true,
      });
    }
  };

  return (
    <div className="container-fluid container-sign-up py-5">
      <div className="cover-signup"></div>
      <div className="row py-5">
        <div className="col-12 col-md-4  div-form-signup">
          <form
            onSubmit={handleSubmit}
            className="form-contorol forms-in-sign p-5"
          >
            <h2>Sign up</h2>
            {/* fullname input group  */}
            <div class="input-group mb-2 div-signup-form">
              <i className="fa fa-user"></i>
              <input
                type="text"
                placeholder="fullname"
                value={fullname}
                name="fullname"
                onChange={(e) => {
                  setFullname(e.target.value);
                  validator.current.showMessageFor("fullname");
                }}
              />
              <div>
                {validator.current.message(
                  "fullname",
                  fullname,
                  "required|min:5"
                )}
              </div>
            </div>
            {/* End fullname / */}
            {/* Email input group  */}
            <div className="input-group mb-2 div-signup-form">
              <i className="fa fa-envelope"></i>
              <input
                type="text"
                aria-describedby="email-address"
                placeholder="email"
                value={email}
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  validator.current.showMessageFor("email");
                }}
              />

              <div>
                {validator.current.message("email", email, "required|email")}
              </div>
            </div>
            {/*End Email input group  */}

            {/*password input group  */}
            <div className="input-group  mb-2 div-signup-form">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                placeholder=" password"
                name="password"
                aria-describedby="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validator.current.showMessageFor("password");
                }}
              />

              <div>
                {validator.current.message(
                  "password",
                  password,
                  "required|min:5"
                )}
              </div>
            </div>
            <div className="helper-signin my-4">
              <Link>forget password</Link>
              <Link to="/login">login</Link>
            </div>
            {/*End password input group  */}
            <button type="" className="btn-sign-up  btn btn-primary ">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
