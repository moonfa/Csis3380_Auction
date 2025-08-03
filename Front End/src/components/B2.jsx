import React, {useState} from 'react';
import axios from "axios"
import Navbar from './navbar';

export default function Auction(){
  const [count, setCount] = useState(0);

  return(
    <div>
        <h3>List of items</h3>
        <li>No items yet</li>
        <ul> Come back next time</ul>

        <button onClick={() => setCount((c) => c + 1)}>
          The current bid is ${count}
        </button>
    </div>
  )

}