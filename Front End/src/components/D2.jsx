import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function views(){
    const bandleBid =() => {
        console.log('Bid placed');
    }

    return (
        <div className="bids">
            <label>Items with Current Bids</label>
            <h3>No bids yet</h3>

            <label>Press the button to top a current bid</label>
            <button onClick={axios}>Bid</button>
        </div>

    );
   

    
}