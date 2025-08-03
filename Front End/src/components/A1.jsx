import React, {useState} from 'react';
import axios from "axios"
import Navbar from './navbar';

export default function Roles(){
  const [userId, setUserId] = useState(``);
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      id: Number(userId),
      password: password,
    };
    // const activityvar = { activity: activity };

    axios
      .post('http://localhost:3000/api/tasks/add', userData)
      .then(() => {
        window.location = '/';
      });
  };

  return(
    <div>
        <Navbar />

        <h3>Add a User</h3>
        <form onSubmit={onSubmit}>
            <div className= "form-user">
                <label>Enter Your ID and Password</label>
                <input 
                type = "number"
                required
                className='form-id'
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                />
                <input 
                type = "text"
                required
                className='form-pass'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
           </div>

           <div className='form-person'>
            <input 
             type = "submit"
             value = "Create"
             className="primary"
             />
           </div>
           <div>
            <label>Click the button for bids</label>
            <button>Enable Bids</button>
           

           </div>
        </form>
    </div>
  )
}