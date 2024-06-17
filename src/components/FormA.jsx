import React, { useState } from 'react';
import axios from 'axios';

const FormA = () => {
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [countryCode, setCountryCode] = useState(localStorage.getItem('countryCode') || '');
  const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('phoneNumber') || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.match(/^[A-Za-z]+$/) || !countryCode || !phoneNumber.match(/^[0-9]+$/)) {
      alert('Invalid input');
      return;
    }

    try {
      await axios.post('/api/forms/submit', {
        type: 'A',
        name,
        countryCode,
        phoneNumber
      });
      localStorage.setItem('name', name);
      localStorage.setItem('countryCode', countryCode);
      localStorage.setItem('phoneNumber', phoneNumber);
      alert('Form submitted successfully');
    } catch (error) {
      alert('Error submitting form');
    }
  }

  return (
    <div className="form">
      <h1>Form A</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Country Code:
          <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)} required>
            <option value="">Select</option>
            <option value="+1">+1</option>
            <option value="+91">+91</option>
          </select>
        </label>
        <label>
          Phone Number:
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormA;
