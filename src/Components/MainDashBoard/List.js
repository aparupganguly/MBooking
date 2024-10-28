import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../Styles/List.css";

const List = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([
    { no: 1, id: 'A101', date: '2024-10-27', eventName: 'Music Fest', location: 'New York', amount: 200, status: 'Active' },
    { no: 3, id: 'C303', date: '2024-12-12', eventName: 'Tech Summit', location: 'San Francisco', amount: 300, status: 'Finished' },
    { no: 2, id: 'B202', date: '2024-11-05', eventName: 'Art Show', location: 'Paris', amount: 150, status: 'On Delivery' },

  ]);

  const [dropdownOpen, setDropdownOpen] = useState({}); // Manage dropdown state for each booking

  const handleRowClick = (eventName) => {
    const route = eventName.toLowerCase().replace(/ /g, "-");
    navigate(`/event/${route}`); // Navigate to event detail page
  };

  const handleDelete = (id) => {
    const updatedBookings = bookings.filter(booking => booking.id !== id);
    setBookings(updatedBookings); // Update the state
  };

  const toggleDropdown = (id) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id] // Toggle dropdown for the specific booking
    }));
  };

  const getStatusColor = (status) => (status === "Active" ? "green" : "orange");

  return (
    <div className="list-component">
      <h3>Bookings</h3>
      {bookings.length === 0 ? (
        <p>No bookings to show.</p> // Message when there are no bookings
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
                <td>{booking.no}</td>
                <td>{booking.id}</td>
                <td>{booking.date}</td>
                <td onClick={() => handleRowClick(booking.eventName)} style={{ cursor: "pointer", color: "blue" }}>
                  {booking.eventName}
                </td>
                <td>{booking.location}</td>
                <td>${booking.amount}</td>
                <td>
                  <div style={{
                    display: "flex", alignItems: "center", borderRadius: "8px",
                    boxShadow: '0px 2px 10px 0px rgba(124, 141, 181, 0.12)',
                    width: 'fit-content',
                    padding: "7px",
                  }}>
                    <span
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: getStatusColor(booking.status),
                        marginRight: "0.5rem",

                      }}
                    ></span>
                    {booking.status}
                  </div>
                </td>
                <td>
                  <div style={{ position: "relative" }}>
                    <button onClick={() => toggleDropdown(booking.id)}>⋮</button>
                    {dropdownOpen[booking.id] && (
                      <div className="dropdown">
                        <button onClick={() => handleDelete(booking.id)}>Delete</button>
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
