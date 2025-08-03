import React from 'react';
import Countdown from 'react-countdown';

const renderer = (days, hours, minutes, seconds, completed, props) => {
    if(completed){
        return null;
    }

    return (
     <div className ="col">
        <div className="cards">
          <div 
            style={{
                height: '300px', 
                backgroundImage: 'url', 
                backgroundSize: 'contain', 
                backgroundRepeat: 'no-repeat', 
                backgroundPosition: 'center'
                }}
                >

                <div className='card-b'>
                    <p className='lead 6'></p>
                    <div className="d-flex justify-content-between align-item-center">
                        <h5>
                            {days * 24 + hours} hr: {minutes} min: {seconds}
                        </h5>
                    </div>
                </div>
            </div>
        </div>
     </div>
    )
        
    
}

// export const Time = ({ item }) => {
//      let expiredDate = item.duration;
//     <Countdown date={expiredDate} item={item} renderer={renderer}/>    
// }
export default function B3() {
  const expiredDate = Date.now() + 1000 * 60 * 60 * 2; // 2小时后

  return <Countdown date={expiredDate} renderer={renderer} />;
}