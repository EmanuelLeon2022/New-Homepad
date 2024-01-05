import React, { useState } from 'react';
import Header from './header/Header';

const MaintenanceRequest = () => {
  const [requestType, setRequestType] = useState('');
  const [description, setDescription] = useState('');

  const handleRequestTypeChange = (event) => {
    setRequestType(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Request Type:', requestType);
    console.log('Description:', description);
  };

  return (
    <div>
      <Header/>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div className='plumber' style={{gap:'50px', display:'flex', flexDirection:'column'}}>
      <h2>&nbsp;Maintenance Request</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <div style={{}}>
          Request Type:
          <select value={requestType} onChange={handleRequestTypeChange}>
            <option value="">Select Request Type</option>
            <option value="Electrical">Electrical</option>
            <option value="Heating/Cooling">Heating/Cooling</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Carpentry">Carpentry</option>
            <option value="Groundswork">Groundswork</option>
            <option value="Pest Control">Pest Control</option>
          </select>
          </div>
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            rows="4"
            cols="50"
          />
        </label>
        <br />
        <button type="submit">Submit Request</button>
      </form>
      </div>
    </div>
  );
};

export default MaintenanceRequest;