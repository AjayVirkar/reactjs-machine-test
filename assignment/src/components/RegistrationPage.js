import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const baseURL = "https://reqres.in/api"
const RegistrationPage = () => {
  const [changeData, setchangeData] = useState({
    firstname: "",
    lastname: "",
    mobileno: "",
    email: "",
    pwd: "",
    pwdconf: "",

  });
  const [formdata, setformdata] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setchangeData({ ...changeData, [name]: value });

  };

  useEffect(() => {
    setformdata(changeData);
    console.log("asdf", formdata)
  }, [changeData])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    setFormErrors(validate(formdata));
    doRegistretion(formdata)
  };

  const doRegistretion = (restrationdata) => {
    axios.post(`${baseURL}/register`, restrationdata, {
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((res) => {
        console.log(res.data.massage)
      })
      .catch((res) => {
        console.log(res.response.data, "errrorrrrrrrrrrrrrrrrr")
      })

  }
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    console.log(values.firstname, "as")
    if (!values.firstname) {
      errors.firstname = "First Name is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Last Name is required!";
    }
    if (!values.mobileno) {
      errors.mobileno = "Mobile Number is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.pwd) {
      errors.pwd = "Password is required!";
    }
    if (!values.pwdconf) {
      errors.pwdconf = "Enter Password Again";
    }
    if (values.pwd != values.pwdconf) {
      errors.pwdconf = "Password Not Match";
    }

    return errors;
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20 mb-10">
      <h1 className="text-xl font-bold text-white capitalize">
        Registration Form
      </h1>
      <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="username"
            >
              First Name
            </label>
            <input
              id="email"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              name="firstname"
              onChange={handleChange}
              value={changeData.firstname}
            />
            <p className="text-red-500">{formErrors.firstname} </p>
          </div>
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="lastname"
            >
              Last Name
            </label>
            <input
              id="lastname"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              name="lastname"
              onChange={handleChange}
              value={changeData.lastname}
            />
            <p className="text-red-500">{formErrors.lastname} </p>
          </div>
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="username"
            >
              Mobile No.
            </label>
            <input
              id="mobile"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              name="mobileno"
              onChange={handleChange}
              value={changeData.mobileno}
            />
            <p className="text-red-500">{formErrors.mobileno} </p>
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="emailAddress"
            >
              Email Address
            </label>
            <input
              id="emailAddress"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              name="email"
              onChange={handleChange}
              value={changeData.email}
            />
            <p className="text-red-500">{formErrors.email} </p>
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              name="pwd"
              onChange={handleChange}
              value={changeData.pwd}
            />
            <p className="text-red-500">{formErrors.pwd} </p>
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="pwdconf"
            >
              Password Confirmation
            </label>
            <input
              id="pwdconf"
              type="password"
              name="pwdconf"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              onChange={handleChange}
              value={changeData.pwdconf}
            />
            <p className="text-red-500">{formErrors.pwdconf} </p>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="px-6 py-2 leading-5 text-gray-700 transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
            onClick={handleSubmit}
          >
            SignUp
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegistrationPage;
