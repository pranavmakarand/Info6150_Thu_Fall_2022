import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageCard from "../../Components/PageCard/PageCard";
import axios from "axios";
import classes from "./About.module.css";

const About = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:8080/user/getAll");
      console.log(data.data.data);
      setusers(data.data.data);
    };
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <PageCard
        title={"About Page"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
      />
      <div className={classes.cardContainer}>
        {users.map((element) => (
          <UserCard email={element.email} />
        ))}
      </div>
    </div>
  );
};

const UserCard = ({ email }) => {
  return <div className={classes.card}>{email}</div>;
};

export default About;
