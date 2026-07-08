
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [text, setText] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/add', { text });
      alert(res.data.message);
      setText('');
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div style={{ margin: '50px' }}>
      <h2>Easy Full Stack Demo</h2>
      <input type="text" value={text}  onChange={(e) => setText(e.target.value)}  placeholder="Enter text" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;

