import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageCard from "../../Components/PageCard/PageCard";
import classes from "./Home.module.css";
import axios from "axios";

const Home = () => {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const [message, setmessage] = useState("");

  const change = (e) => {
    const temp = { ...data };
    temp[e.target.name] = e.target.value;
    setdata(temp);
  };

  const submit = async () => {
    try {
      const apiData = await axios.post(
        "http://localhost:8080/user/login",
        data
      );
      setmessage(apiData.data.data.message);
      console.log(apiData.data.data.message);
    } catch (error) {
      console.log(error.response);
      setmessage(error.response.data.error);
    }
  };

  return (
    <div>
      <Navbar />
      <PageCard
        title={"Home Page"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
      />
      <div className={classes.inputContainer}>
        <input
          className={classes.Input}
          name="email"
          type="email"
          placeholder="harvey@pearsonspecter.com"
          value={data.email}
          onChange={change}
        />
        <input
          password="*******"
          type="password"
          className={classes.Input}
          name="password"
          placeholder="Enter Password"
          value={data.password}
          onChange={change}
        />
        <button onClick={submit} className={classes.Submit}>
          Submit
        </button>
        <br />
        <div>{message}</div>
      </div>
    </div>
  );
};

export default Home;
