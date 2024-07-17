import React, { useState } from "react";
import "./Category/Category.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [category, setCategory] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:2025/auth/add_category", { category })
      .then(result => {
        if (result.data.Status) {
          navigate("/dashboard/category");
        }else{
          alert(result.data.Error)  
        }
      })
      .catch(err => console.log(err))
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="wound p-3 rounded w-25 border">
        <h3 className="mb-4">Add Category</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="category">
              <strong>Category:</strong>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter Category"
              onChange={(e)=> setCategory(e.target.value)}
              className="form-control rounded-0 mt-4"
            />
          </div>
          <button className="btn btn-primary w-100 rounded-0 mb-2">
            Add category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
