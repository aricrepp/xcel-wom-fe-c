import React, { useState } from 'react';
//import {useHistory} from "react-redux"

function WorkOrder() {
  //const history = useHistory();
  const [formValues, setFormValues] = useState({
    fullName: '',
    unit: '',
    email: '',
    date: '',
    phoneNumber: '',
    location: '',
    description: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    //props.workorderAction(formValues)
    //history.push('/landing')
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            required
            type="text"
            value={formValues.value}
            onChange={handleChange}
          />
        </label>
        <label>
          Unit:
          <input
            required
            type="text"
            value={formValues.value}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            required
            type="text"
            value={formValues.value}
            onChange={handleChange}
          />
        </label>
        <label>
          Date:
          <input
            required
            type="text"
            value={formValues.value}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            required
            type="text"
            value={formValues.value}
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            required
            type="text"
            value={formValues.value}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            required
            type="text"
            value={formValues.value}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default WorkOrder;
