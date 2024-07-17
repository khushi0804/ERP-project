import React from "react";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Employee from "./Components/Employee/Employee";
import Category from "./Components/Category/Category";
import Profile from "./Components/Profile/Profile";
import AddCategory from "./Components/AddCategory";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/adminlogin" />}></Route>
        {/* Redirect from root to /adminlogin */}
        <Route path="/adminlogin" element={<Login />}></Route> {/* Login route */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Dashboard route */}
        <Route path="/dashboard/employee" element={<Employee />}></Route>
        <Route path="/dashboard/category" element={<Category />}></Route>
        <Route path="/dashboard/profile" element={<Profile />}></Route>
        <Route path="/dashboard/add_category" element={<AddCategory />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

//-------------------------------
// import React from "react";
// import Login from "./Components/Login/Login";
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./Components/Dashboard/Dashboard";
// const App = () => {
//   return (
//     // <div className='login'>
//     //   <Login/>
//     // </div>

//     <BrowserRouter>
//       <Routes>
//         <Route classname="login" path="/adminlogin" element={<Login />}></Route>
//         <Route path="/dashboard" element={<Dashboard />}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
