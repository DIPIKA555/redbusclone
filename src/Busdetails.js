import React from 'react'
import { useParams } from 'react-router-dom'
import "./Busdetails.css"
function Busdetails() {
    const {busid,source,deatination,busName}=useParams();
  return (
    <div className='detailscontainer'>
      <div className="busdetail">
     


       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLcgOP8zi9GAHbvklHscI-AzSwreoWMhQsA&usqp=CAU' alt='busimg'/>
        <ul>
            <li>Bus Name :<span className='namecolor'>{busName}</span></li>
             <li>From :<span className='namecolor'>{source}</span></li>
              <li>To :<span className='namecolor'>{deatination}</span></li>
        </ul>
      </div>

      <div className="booktemplate"><h2>Book Your Sheet Here</h2></div>
      
      <div className="booksheet">
        
        <ul>
  { 
    Array.from({ length: 14 }).map((_, index) => (
      <li key={index}>
        <input type="checkbox" id={`vehicle${index}`} name={`vehicle${index}`} value="i+1" />
      </li>
    ))
  }
</ul>
  <ul>
  { 
    Array.from({ length: 14 }).map((_, index) => (
      <li key={index}>
        <input type="checkbox" id={`vehicle${index}`} name={`vehicle${index}`} value="i+1" />
      </li>
    ))
  }
</ul>  <ul>
  { 
    Array.from({ length: 14}).map((_, index) => (
      <li key={index}>
        <input type="checkbox" id={`vehicle${index}`} name={`vehicle${index}`} value="i+1" />
      </li>
    ))
  }

</ul>
<br/>
<br/>
  <ul>
  { 
    Array.from({ length: 14 }).map((_, index) => (
      <li key={index}>
        <input type="checkbox" id={`vehicle${index}`} name={`vehicle${index}`} value="i+1" />
      </li>
    ))
  }
</ul>
  <ul>
  { 
    Array.from({ length: 14 }).map((_, index) => (
      <li key={index}>
        <input type="checkbox" id={`vehicle${index}`} name={`vehicle${index}`} value="i+1" />
      </li>
    ))
  }
</ul>

       
      </div>

      <div className="book_ticket">
        <button onClick={()=>{alert("Thank you for choosing Red Bus! Your seats have been booked successfully. We hope you have a great journey.")}}>Book Ticket</button>
      </div>
     
    </div>
  )
}

export default Busdetails
