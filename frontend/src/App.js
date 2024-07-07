import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReservationForm from './components/ReservationForm';
import ReservationList from './components/ReservationList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/reservations" element={<ReservationList />} />
        <Route path="/" element={<ReservationForm />} />
      </Routes>
    </Router>
  );
};

export default App;
