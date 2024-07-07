import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../images/bg.jpg';



const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    // time: '',
    numberOfGuests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/reservations', formData); // Ensure this URL matches your backend
      alert('Reservation made successfully');
    } catch (error) {
      console.error('Error making reservation:', error);
      alert('Failed to make reservation');
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
    backgroundImage: `url(${backgroundImage})`,
    
  };

  // const titleStyle = {
  //   fontSize: '2em',
  //   marginBottom: '20px',
  //   color: '#b80f0a'
  // };

  const formStyle = {
    marginTop: '140px',
    maxWidth: '400px',
    width: '100%',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '3px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <div style={containerStyle}>
      {/* <h1 style={titleStyle}>Welcome to Elite Dinings</h1>
      <h3 style={titleStyle}>Unleash Your Taste Sensations</h3> */}
      <form onSubmit={handleSubmit} style={formStyle}>
        <input type="text" name="name" onChange={handleChange} placeholder="Name" style={inputStyle} />
        <input type="email" name="email" onChange={handleChange} placeholder="Email" style={inputStyle} />
        <input type="phone" name="phone" onChange={handleChange} placeholder="Phone" style={inputStyle} />
        <input type="date" name="date" onChange={handleChange} placeholder="Date" style={inputStyle} />
        {/* <input type="time" name="time" onChange={handleChange} placeholder="Time" style={inputStyle} /> */}
        <input type="number" name="numberOfGuests" onChange={handleChange} placeholder="Number of Guests" style={inputStyle} />
        <button type="submit" style={buttonStyle}>Make Reservation</button>
      </form>
    </div>
  );
};

export default ReservationForm;
