import React, { useRef, useState, useEffect } from "react";
import ManageTable from "./manageTable";
import { v4 as uuidv4 } from 'uuid';

const Manger = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [pswdmanger, setPswdmanger] = useState([]);
  const ref = useRef();
  const passwordref = useRef();

  // Load saved passwords on component mount
  useEffect(() => {
    const savedPasswords = localStorage.getItem("managepswd");
    if (savedPasswords) {
      setPswdmanger(JSON.parse(savedPasswords));
    }
  }, []);

  const showpassword = () => {
    if (passwordref.current.type === "password") {
      passwordref.current.type = "text";
      ref.current.src = "icons/visible.svg";
    } else {
      passwordref.current.type = "password";
      ref.current.src = "icons/invisible.svg";
    }
  };

  const saveData = (e) => {
    e.preventDefault();
    if (!form.site || !form.username || !form.password) {
      alert("Please fill all fields");
      return;
    }
    
    const newPassword = { ...form, id: uuidv4() };
    const updatedPasswords = [...pswdmanger, newPassword];
    setPswdmanger(updatedPasswords);
    localStorage.setItem("managepswd", JSON.stringify(updatedPasswords));
    setForm({ site: "", username: "", password: "" });
  };

  return (
    <div className="min-h-screen bg-gray-400 py-10">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            <span className="text-green-400">&lt;</span>
            <span className="text-gray-100">Pass</span>
            <span className="text-green-400">OP/&gt;</span>
          </h1>
          <p className="text-gray-600 mt-2">Your own password Manager</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={saveData}>
            {/* Website URL */}
            <div className="mb-4">
              <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                type="text"
                placeholder="Enter website URL"
                value={form.site}
                onChange={(e) => setForm({ ...form, site: e.target.value })}
              />
            </div>

            {/* Username and Password Row */}
            <div className="flex flex-col md:flex-row md:gap-4 mb-6">
              {/* Username */}
              <div className="mb-4 md:mb-0 md:w-1/2">
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  type="text"
                  placeholder="Enter Username"
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                />
              </div>

              {/* Password with toggle */}
              <div className="relative md:w-1/2">
                <input
                  ref={passwordref}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 pr-10"
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 focus:outline-none"
                  onClick={showpassword}
                >
                  <img 
                    ref={ref} 
                    className="w-6 h-6" 
                    src="icons/visible.svg" 
                    alt="Toggle password visibility" 
                  />
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-400 hover:bg-green-500 text-white font-medium py-2 px-6 rounded-full transition duration-200"
              >
                Add Password
              </button>
            </div>
          </form>
        </div>

        {/* Password Table */}
        <div className="bg-white rounded-lg shadow-md p-6 overflow-x-auto">
          <ManageTable 
            pswdmanger={pswdmanger} 
            setPswdmanger={setPswdmanger} 
            setForm={setForm} 
          />
        </div>
      </div>
    </div>
  );
};

export default Manger;