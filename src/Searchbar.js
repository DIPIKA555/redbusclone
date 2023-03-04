import React, {  useEffect, useState } from 'react'

import "./Searchbar.css"
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import Bus from './Bus';

function Searchbar() {

     

 const [busdata,setBusdata]=useState([]);
 const [fromstation,setFromstation]=useState('');
 const  [tostation,setTostation]=useState('')
 


    const fetchdata= async ()=>{
          let res=await fetch("https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses")
           res=await res.json();
           setBusdata(res)
      }
    useEffect(()=>{
    
     
fetchdata();
   
      
    },[])

const sortByprice=()=>{
   const sortprice=[...busdata].sort((a,b)=>{
      const a1=parseInt(a.ticketPrice);
      const b1=parseInt(b.ticketPrice);
      return a1-b1;
   })
    setBusdata(sortprice);   
}
   
function getTime(timing) {
  const timeParts = timing.split(":");
  let hour = parseInt(timeParts[0]);
  let minute = parseInt(timeParts[1].substr(0, 2));
  const period = timeParts[1].substr(2);

  if (period === "PM" && hour !== 12) {
    hour += 12;
  } else if (period === "AM" && hour === 12) {
    hour = 0;
  }

  return hour * 60 + minute;
}

const sortbyDeparture=()=>{
   const sortDeparture=[...busdata].sort((a,b)=>{

      const a1=getTime(a.departureTime);
      const b1=getTime(b.departureTime);
      return a1-b1

   })
   setBusdata(sortDeparture);
}

const sortbyArrivaltime=()=>{
    const sortArrival=[...busdata].sort((a,b)=>{

      const a1=getTime(a.arrivalTime);
      const b1=getTime(b.arrivalTime);
      return a1-b1

   })
   setBusdata(sortArrival);
   
}
const  handlesubmit=(e)=>{
     e.preventDefault()
     const filterbus=[...busdata].filter((bus)=>{
     return bus.source===fromstation && bus.destination===tostation
     })
     if(filterbus.length===0)
     {
      alert("no match found , enter the valid source and destination")
     }
     setBusdata(filterbus);

     }

  
   return (
    <>
      
    <div class="Search_Form_Container">
      <form  onSubmit={handlesubmit}>
        <div class="search">
        <label for="from">From</label><br/>
        <input type="text" id="from" placeholder="FROM STATION" onChange={(e)=>setFromstation(e.target.value)}/>
        </div>
        <div class="search">
        <label for="to">To</label><br />
        <input type="text" id="to" placeholder="TO STATION" onChange={(e)=>setTostation(e.target.value)}/>
        </div>
        <div class="search">
        <label for="date">DATE</label><br />
        <input type="date" id="from"/>
        </div>
        <button type="submit"  onSubmit={handlesubmit}>SEARCH BUS</button>
        </form>
    </div>
    <div class="busicon">
      <h2>BOOK YOUR BUSES WITH REDBUS  <DirectionsBusFilledIcon fontSize='large' style={{color:"red",fontSize:'40px'}}/></h2>
    </div>
    <div class="booking_container">
       <div class="sortby_container">
             <h3>SORT BY:</h3>
             <ul>
                <li><button  onClick={sortbyDeparture}>DEPARTURE</button></li>
                <li><button onClick={sortbyArrivaltime} >ARRIVAL</button></li>
                <li><button>RATING</button></li>
                <li><button onClick={sortByprice}>PRICE</button></li>

            </ul>
          
           
        
       </div>
       {
        busdata.map((data,index)=>{
           return(
            <div key={index}>
            <Bus   busName={data.busName} departureTime={data.departureTime} 
            arrivalTime={data.arrivalTime} ticketPrice={data.ticketPrice} busid={data.id}
            source={data.source} destination={data.destination}

               
            />
            </div>  
           )
        })
       }
       
    </div>
      
    </>
  )
}

export default Searchbar
