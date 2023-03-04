import React from "react";
import { Link } from "react-router-dom";

import "./Bus.css";

function Bus({
  busName,
  departureTime,
  arrivalTime,
  ticketPrice,
  busid,
  source,
  destination,
}) {
  return (
    <>
      <div class="bus_data">
        <ul>
          <li>
            <h3>{busName}</h3>
          </li>
          <li>
            DEPARTURE
            <h3>{departureTime}</h3>
          </li>
          <li>
            ARRIVAL
            <h3>{arrivalTime}</h3>
          </li>
          <li className="rating">
            Rating<h2>9/10</h2>
          </li>
          <li>
            <h3>{ticketPrice} /-</h3>
          </li>
          <li>
            <Link to={`/bus/${busid}/${source}/${destination}/${busName}`}>
              <button className="booknow">Book Now</button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Bus;
