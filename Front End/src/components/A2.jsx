import React, {useEffect, useState} from 'react';
import axios from "axios"
import Navbar from './navbar';

export default function Roles2(){
    const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const [activity, setOnChangeActivity] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/tasks/${id}`)
      .then((response) => {
        setOnChangeActivity(response.data.activity);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();
    const activityvar = { activity: activity };
    console.log(activityvar);

    console.log(`http://localhost:3000/api/tasks/update/${id}`);

    axios
      .put(`http://localhost:3000/api/tasks/update/${id}`, activityvar)
      .then(() => {
        window.location = '/';
      });
  };

  return(
    <div>
    <Navbar />
    <h3>List of auctions</h3>
    <table>
      <thead>
          <tr>
            <th>Auction 1</th>
            <th>Auction 2</th>
            <th>Auction 3</th>
            <th>Auction 4</th>
            <th>Auction 5</th>
         </tr> 
      </thead>
      <tbody>

      </tbody>
    </table>

    <h3>List of Winners</h3>
    <table>
      <tbody>
          <tr>
              <th>No winners yet</th>
          </tr>
      </tbody>
    </table>

    <h3>Email List</h3>
    <table>
      <tbody>
            <tr>
                <th>No Emails</th>
            </tr>
      </tbody>
    </table>
    </div>
  )

}