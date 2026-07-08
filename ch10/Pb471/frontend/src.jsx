

import React,{useState} from 'react';
import axios from 'axios';

function App(){
    const[form,setForm]=useState({name:"",rollno:"",totalmarks:""});

   async function christ(e){
    const res=await axios.post("http://localhost:5000/add",form);
    alert(res.data.Message);
   }

   return(
    <div style={{ margin: '50px' }}>
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter Name"
          required
        /><br /><br />

        <input
          type="number"
          name="rollno"
          value={form.rollno}
          onChange={handleChange}
          placeholder="Enter Roll No"
          required
        /><br /><br />

        <input
          type="number"
          name="totalmarks"
          value={form.totalmarks}
          onChange={christ}
          placeholder="Enter Total Marks"
          required
        /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
   );
}

export default App;