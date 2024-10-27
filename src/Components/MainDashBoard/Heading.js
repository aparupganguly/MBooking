import React from "react";
import "../../Styles/Heading.css";
const users = {
  User1: {
    name: "Marci",
    age: 21,
  },
  User2: {
    name: "John Doe",
    age: 25,
  },
};

const Heading = () => {
  return (
    <div className='HeadingContainer'>
      <p className='userWelcome'>Welcome, {users.User1.name}</p>
      <p className='userGuidelineText'>
        Here is the information about all your events
      </p>
    </div>
  );
};

export default Heading;
