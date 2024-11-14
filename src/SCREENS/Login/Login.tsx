import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginLogo from "../../ASSETS/Logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmpassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(email);
  console.log(password);
  console.log(Confirmpassword);
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email: email,
      password: password,
    };
    const headers: any = {
      "Content - Type": "application/json",
    };
    axios
      .post(
        "https://fullstack-student-backend.onrender.com/api/auth/login",

        data,
        headers
      )
      .then((response: any) => {
        console.log(response.data);
        localStorage.setItem("userId.", response.data._id);
        localStorage.setItem("firstName.", response.data.firstName);
        navigate("/Dashboard");
        // navigate("/Comments");
        // navigate("/Results");
        setLoading(false);
        if (response.data) {
          setSuccessMessage("Signup Successful");
        } else {
        }
      })
      .catch((error: any) => {
        setLoading(false);
        setErrorMessage("Invalid user credentials, failed to create user");
      });
  };
  return (
    <div>
      <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src={LoginLogo}
              className="mx-auto h-14 w-44 object-cover"
            />
            <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-red-800">
              Login
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              action="#"
              method="POST"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-black"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-2 border-black py-1.5 text-black  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-black"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-red-800">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-2 border-black py-1.5 text-black  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {loading ? (
                <div className="flex w-full justify-center rounded-md bg-red-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Loading.....
                </div>
              ) : (
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-red-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Login
                  </button>
                </div>
              )}
              {errorMessage && (
                <div style={{ color: "white", backgroundColor: "red" }}>
                  {errorMessage}{" "}
                </div>
              )}
            </form>

            <p className="mt-10 text-center text-sm text-red-800">
              Don't have an account?{" "}
              <Link to={"/SignUp"}>
                <a
                  href="#"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Create account
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
