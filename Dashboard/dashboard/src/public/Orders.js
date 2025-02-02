import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allorders, setAllorders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allorders").then((res) => {
      setAllorders(res.data);
    });
  }, []);
  const labels = allorders.map((subArray) => subArray["name"]);
  if (allorders.length == 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="text-center">
        <div className="row pb-4 mb-5 border-bottom">
          <div className="col-3 border">Name</div>
          <div className="col-3 border">Qty</div>
          <div className="col-3 border">Price</div>
          <div className="col-3 border">Date</div>
        </div>
        {allorders.map((order, index) => {
          return (
            <div className="row mt-0" key={index}>
              <div className="col-3 border">{order.name}</div>
              <div className="col-3 border">{order.qty}</div>
              <div className="col-3 border">{order.price}</div>
              <div className="col-3 border">{order.Date}</div>
            </div>
          )
        })}

      </div>
    )
  }
}



export default Orders;
