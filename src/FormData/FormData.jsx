import React, { useState } from 'react';
import { setUserData } from '../feature/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useMutation } from 'react-query';

const UserForm = () => {
  const mydata = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const PostData = async (data) => {
    try {
       return axios.post('http://localhost:6000/profile',data)
    } catch (error) {
      throw new Error('Error posting data');
    }
  };

  const mutation = useMutation(PostData, {
    onSuccess: (data) => {
      console.log("Success: Data submitted successfully", data);
     
      alert("Data submitted successfully");
    },
    onError: (err) => {
      console.error("Error submitting data", err);
      // Show error feedback to the user
      alert('Error submitting data');
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setUserData({
      ...mydata,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(mydata);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">User Form</h2>

        {["id", "name", "address", "city", "nationality", "phone", "email"].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {field.charAt(0).toUpperCase() + field.slice(1)}:
            </label>
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              value={mydata[field]}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        ))}

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
