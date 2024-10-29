import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../Styles/EventDetail.css";
import backBtn from "../../Assets/Events/backBt.svg";
const EventDetail = () => {
  const getStatusColor = (status) => (status === "Active" ? "green" : "orange");

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
      <h2>Event : {booking.eventName.replace("-", " ")}</h2>
      <p>
        <strong>No : </strong> {booking.no}
      </p>
      <p>
        <strong>Id : </strong> {booking.id}
      </p>
      <p>
        <strong>Date :</strong> {booking.date}
      </p>
      <p>
        <strong>Location : </strong> {booking.location}
      </p>
      <p>
        <strong>Amount : </strong>${booking.amount}
      </p>
    </div>
  );
};

export default EventDetail;
