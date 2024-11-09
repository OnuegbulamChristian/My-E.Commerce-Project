import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import SignupLogo from "../ASSETS/Logo.png";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmpassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(phoneNumber);
  console.log(address);
  console.log(password);
  console.log(Confirmpassword);
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      address: address,
    };
    const headers: any = {
      "Content - Type": "application/json",
    };
    axios
      .post(
        "https://fullstack-student-backend.onrender.com/api/auth",

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
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="h-24 w-52 mx-auto w-full max-w-sm">
          <img
            alt="Your Company"
            src={SignupLogo}
            className="mx-auto h-14 w-44 object-cover"
          />
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-red-800">
            Sign Up
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
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-black"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  id="firstName"
                  name="firstName"
                  type="firstName"
                  required
                  autoComplete="firstName"
                  className="block w-full rounded-md border-2 border-black py-1.5 text-black  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-black"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  id="lastName"
                  name="lastName"
                  type="lastName"
                  required
                  autoComplete="lastName"
                  className="block w-full rounded-md border-2 border-black py-1.5 text-black  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

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
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium leading-6 text-black"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  id="phoneNumber"
                  name="phoneNumber"
                  type="phoneNumber"
                  required
                  autoComplete="phoneNumber"
                  className="block w-full rounded-md border-2 border-black py-1.5 text-black  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-black"
              >
                Address
              </label>
              <div className="mt-2">
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  id="address"
                  name="address"
                  type="address"
                  required
                  autoComplete="address"
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

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-black"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={Confirmpassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
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
                  Sign Up
                </button>
              </div>
            )}
            {errorMessage && (
              <div style={{ color: "white", backgroundColor: "red" }}>
                {errorMessage}
                {""}
              </div>
            )}
          </form>

          <p className="mt-10 text-center text-sm text-black">
            Already have an account?{" "}
            <a href="/Login" className="font-semibold leading-6 text-red-800">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
