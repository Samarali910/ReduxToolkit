import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const Profile = () => {
  const { isLoading, isError, data, error } = useQuery("profile", () => {
    return axios.get("http://localhost:4000/profile");
    {
       
    }
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error:{error.message}</h1>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <div>{data?.data.name}</div>
    </div>
  );
};

export default Profile;
