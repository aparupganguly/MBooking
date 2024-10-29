import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../Styles/EventDetail.css";
import backBtn from "../../Assets/Events/backBt.svg";

import "../../Styles/Heading.css";

import NumericStats from "../../Components/MainDashBoard/NumericStats";
import Analytics from "../../Components/MainDashBoard/Analytics";
import List from "../../Components/MainDashBoard/List";
import SideBar from "../../Components/SideBar/Sidebar";

const EventDetail = () => {
  const getStatusColor = (status) =>
    status === "Active"
      ? "green"
      : "orange" && status === "Finished"
        ? "gray"
        : "orange";

  const { eventName } = useParams();
  const navigate = useNavigate();

  const bookings = [
    {
      no: 1,
      id: "A101",
      date: "2024-10-27",
      eventName: "music-fest",
      location: "New York",
      amount: 200,
      status: "Active",
    },
    {
      no: 2,
      id: "B202",
      date: "2024-11-05",
      eventName: "art-show",
      location: "Paris",
      amount: 150,
      status: "On Delivery",
    },
    {
      no: 3,
      id: "C303",
      date: "2024-12-12",
      eventName: "tech-summit",
      location: "San Francisco",
      amount: 400,
      status: "Finished",
    },
    {
      no: 4,
      id: "C303",
      date: "2024-12-12",
      eventName: "t-summit",
      location: "San Francisco",
      amount: 400,
      status: "Finished",
    },
  ];

  const booking = bookings.find((b) => b.eventName === eventName);

  if (!booking) return <h2>Event not found</h2>;

  return (
    <>
      <div style={{ padding: "20px" }}>

        <div className='eventTopBtns'>
          <button className='eventBackBtn' onClick={() => navigate("/")}>
            <img src={backBtn} />
          </button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: "8px",
              boxShadow: "0px 2px 10px 0px rgba(124, 141, 181, 0.12)",
              width: "fit-content",
              padding: "7px",
              border: "1px solid #0a0a0a",
            }}>
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: getStatusColor(booking.status),
                marginRight: "0.5rem",
              }}></span>
            {booking.status}
          </div>
        </div>
        <p className='userWelcome'>
          Event : {booking.eventName.replace("-", " ")}
        </p>
        <p className='userGuidelineText'>
          Here is the information about all your events
        </p>
        {/* <p>
        <strong>No : </strong> {booking.no}
      </p>
      <p>
        <strong>Id : </strong> {booking.id}
      </p> */}
        <p>
          <strong>Location :</strong> {booking.location}
        </p>
        <p>
          <strong>Date : </strong> {booking.date}
        </p>
        <p>
          <strong>Price : </strong>${booking.amount}
        </p>
        <NumericStats />
        <Analytics />
        <List />
      </div>
    </>

  );
};

export default EventDetail;
