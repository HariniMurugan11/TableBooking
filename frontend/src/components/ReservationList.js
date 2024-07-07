// src/components/ReservationList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const response = await axios.get('/api/reservations');
      setReservations(response.data);
    };
    fetchReservations();
  }, []);

  return (
    <ul>
      {reservations.map((reservation) => (
        <li key={reservation._id}>{reservation.name} - {reservation.date}</li>
      ))}
    </ul>
  );
};

export default ReservationList;
