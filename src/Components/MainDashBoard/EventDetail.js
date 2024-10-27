import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EventDetail = () => {
  const { eventName } = useParams(); // Get event name from URL
  const navigate = useNavigate();

  const bookings = [
    { no: 1, id: 'A101', date: '2024-10-27', eventName: 'music-fest', location: 'New York', amount: 200, status: 'Active' },
    { no: 2, id: 'B202', date: '2024-11-05', eventName: 'art-show', location: 'Paris', amount: 150, status: 'On Delivery' },
    { no: 3, id: 'C303', date: '2024-12-12', eventName: 'tech-summit', location: 'San Francisco', amount: 300, status: 'Finished' }
  ];

  const booking = bookings.find(b => b.eventName === eventName);

  if (!booking) return <h2>Event not found</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate("/")}>Back to List</button>
      <h2>Event: {booking.eventName.replace("-", " ")}</h2>
      <p><strong>No:</strong> {booking.no}</p>
      <p><strong>Id:</strong> {booking.id}</p>
      <p><strong>Date:</strong> {booking.date}</p>
      <p><strong>Location:</strong> {booking.location}</p>
      <p><strong>Amount:</strong>$ {booking.amount}</p>
      <p><strong>Status:</strong> {booking.status}</p>
    </div>
  );
};

export default EventDetail;
