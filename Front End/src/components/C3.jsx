import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin(){
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/tasks")
      .then((response) => setAuctions(response.data))
      .catch((error) => console.error("Error fetching autions: ", error));
  }, []);

    const remove = (id) => {
    axios
      .delete('http://localhost:3000/api/tasks/delete/' + id)
      .then((response) => {
        console.log(response.data);
        setAuctions(auctions.filter((el) => el._id !== id));
      })
      .catch((error) => console.error("Error deleting auction:",error));      
  };

  return(
    <div>
      <h3>C3 Component Loaded</h3>
      {auctions.length === 0 ? (
        <p>No auctions found.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Auction ID</th>
              <th>Auction</th>
            </tr>
          </thead>
          <tbody>
            {auctions.map((item) => (
              <tr key={item._id}>
                <td>{item.activity}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => remove(item._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
      
  )
}