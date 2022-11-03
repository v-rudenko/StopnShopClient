import React from "react";
import NavRegularButton from "../UI/navigation/buttons/NavRegularButton";


const RefreshToken = () => {

  async function Refresh(refresh) {
    const response = await fetch("http://127.0.0.1:8000/account/api/token/refresh/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: refresh}),
    });
    // console.log("Response:", response);
    const data = await response.json();
    // console.log("Status:", data);
    return {
      data: data,
      status: response.status,
    };
  }

  const RefreshTokenHandler = async () => {
    const oldToken = localStorage.getItem("token");
    const refresh = localStorage.getItem("refresh");
    console.log(`Old token: ${oldToken}`);
    console.log(`Old Refresh: ${refresh}`);
    const newToken = await Refresh(refresh)
    localStorage.setItem("token", newToken.data.access);
    localStorage.setItem("refresh", newToken.data.refresh);
    // console.log(newToken);
    console.log('');
    console.log(`New token: ${newToken.data.access}`)
    console.log(`New refresh: ${newToken.data.refresh}`)
    // alert("hello")
  };

  return (
    <NavRegularButton onClick={RefreshTokenHandler} type="button">
      RefreshToken
    </NavRegularButton>
  );
};

export default RefreshToken;
