import React from 'react';
import './App.css';
import { DatePicker, Form } from 'antd';
export default function App() {
  const [formData, setFormData] = React.useState(
      {
          Name: "", 
          PhoneNumber: "", 
          ProdType: "", 
          Varient: "",
          ServType: "",
          DeadLine: ""
          
      }
  )
  
  function handleChange(event) {
    if (event.target) {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    } else {
        setFormData(prevFormData => ({
            ...prevFormData,
            DeadLine: event.format("YYYY-MM-DD")
        }));
    }
}

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
}
  
  return (
      <form onSubmit={handleSubmit}>
          <label htmlFor="Full_name">Full Name</label>
          <input
              id="Full_name"
              type="text"
              placeholder="Name"
              rules={[
                {
                  required: true,
                },
              ]}
              onChange={handleChange}
              name="Name"
              value={formData.Name}
          />
          <label htmlFor="Phone_number">Phone Number</label>
          <input
              id="Phone_number"
              type="tel"
              placeholder="Phone Number"
              onChange={handleChange}
              name="PhoneNumber"
              value={formData.PhoneNumber}
          />
          
          <label htmlFor="Prod_type">Product Type</label>
          <br />
          <select 
              id="Prod_type" 
              value={formData.ProdType}
              onChange={handleChange}
              name="ProdType"
          >
              <option value="select">-- Select --</option>
              <option value="magazine">Magazine</option>
              <option value="photo">PhotoFrame</option>
              <option value="poster">Poster</option>
              <option value="collage">Collage</option>
          </select>
          <br />
          <label htmlFor="Var_type">Varient</label>
          <br />
          <select 
              id="Var_type" 
              value={formData.Varient}
              onChange={handleChange}
              name="Varient"
          >
              <option value="select">-- Select --</option>
              <option value="14*20">14x20</option>
              <option value="16*24">16x24</option>
              <option value="18*30">18x30</option>
              <option value="20*30">20x30</option>
          </select>
          <br />
          <label htmlFor="Ser_type">Service type</label>
          <br />
          <select 
              id="Ser_type" 
              value={formData.ServType}
              onChange={handleChange}
              name="ServType"
          >
              <option value="select">-- Select --</option>
              <option value="Self">Self Designed</option>
              <option value="Design_by_us">Designed by us</option>
              <option value="Design_and_Print">Design and Print</option>
          </select>
          <br />
          <Form.Item label="Deadline">
          <DatePicker onChange={(date, dateString)=>handleChange(date)}/>
          </Form.Item>
          <button>Submit</button>
      </form>
  )
}