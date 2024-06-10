import React, { useState } from 'react';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allentry, setEntry] = useState([]);

  const submitform = (e) => {
    e.preventDefault();
    const newentry = { email: email, password: password };
    setEntry([...allentry, newentry]);
    console.log("All entry is", allentry);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm mb-6" onSubmit={submitform}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(event) => { setEmail(event.target.value) }}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(event) => { setPassword(event.target.value) }}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </div>
      </form>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        {
          allentry.map((entries, ind) => {
            return (
              <div key={ind} className="flex justify-between mb-2">
                <p className="w-1/2 text-left">{entries.email}</p>
                <p className="w-1/2 text-right">{entries.password}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Login;
