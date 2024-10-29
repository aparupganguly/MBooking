import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/List.css";

const List = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([
    {
      no: 1,
      id: "A101",
      date: "2024-10-27",
      eventName: "Music Fest",
      location: "New York",
      amount: 200,
      status: "Active",
    },
    {
      no: 2,
      id: "B202",
      date: "2024-11-05",
      eventName: "Art Show",
      location: "Paris",
      amount: 150,
      status: "On Delivery",
    },
    {
      no: 3,
      id: "C303",
      date: "2024-12-12",
      eventName: "Tech Summit",
      location: "San Francisco",
      amount: 300,
      status: "Finished",
    },
    {
      no: 4,
      id: "D304",
      date: "2024-12-12",
      eventName: "t-Summit",
      location: "Romania",
      amount: 500,
      status: "Active",
    },
  ]);

  const [dropdownOpen, setDropdownOpen] = useState({});

  const handleRowClick = (eventName) => {
    const route = eventName.toLowerCase().replace(/ /g, "-");
    navigate(`/event/${route}`);
  };

  const handleDelete = (id) => {
    const updatedBookings = bookings.filter((booking) => booking.id !== id);
    setBookings(updatedBookings);
  };

  const toggleDropdown = (id) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "green";
      case "On Delivery":
        return "orange";
      case "Finished":
        return "grey";
      default:
        return "black";
    }
  };

  return (
    <div className='list-component'>
      <div className='listHeader'>
        <h3>Bookings</h3>
        <div className='period-selector'>
          <select>
            <option>Monthly</option>
            <option>Weekly</option>
            <option>Daily</option>
          </select>
        </div>
      </div>
      {bookings.length === 0 ? (
        <p>No bookings to show.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Id</th>
              <th>Date</th>
              <th>Event Name</th>
              <th>Location</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td onClick={() => handleRowClick(booking.eventName)}>{booking.no}</td>
                <td onClick={() => handleRowClick(booking.eventName)}>{booking.id}</td>
                <td onClick={() => handleRowClick(booking.eventName)}>{booking.date}</td>
                <td onClick={() => handleRowClick(booking.eventName)}>{booking.eventName}</td>
                <td onClick={() => handleRowClick(booking.eventName)}>{booking.location}</td>
                <td onClick={() => handleRowClick(booking.eventName)}>${booking.amount}</td>
                <td>
                  <div className='status-indicator'>
                    <span
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor: getStatusColor(booking.status),
                        // marginRight: "0.5rem",
                      }}></span>
                    {booking.status}
                  </div>
                </td>
                <td>
                  <div style={{ position: "relative" }}>
                    <button className='listActionBtn' onClick={() => toggleDropdown(booking.id)}>
                      •••
                    </button>
                    {dropdownOpen[booking.id] && (
                      <div className='dropdown'>
                        <button className='deleteBtn' onClick={() => handleDelete(booking.id)}>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default List;
