import React, { useState, useEffect } from 'react';
import axios from 'axios';

new Notification('Email to this user', {
    body: 'Congrats! You win an item',
})

export default function lists(){
    return(
        <div>
           <h3>New Winners</h3> 
           <ul>
            No Winners Yet
           </ul>
        </div>
        
    
    )


}