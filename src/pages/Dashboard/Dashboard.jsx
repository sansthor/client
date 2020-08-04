import React from "react";

import "../../assets/css/Profile.css";
function Dashboard() {
  return (
    <div>
      <div className="tabs">
        <ul>
          <li className="is-active">
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/myservices">My Services</a>
          </li>
          <li>
            <a href="/order">Order</a>
          </li>
        </ul>
      </div>

      <section className="section" id="services">
        <div className="section-heading">
          <h3 className="title is-2">Dashboard</h3>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="box">
                <div className="content" style={{ textAlign: "center" }}>
                  <h4 className="title is-5">Pekerjaan In Progress</h4>
                  Total: X
                </div>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <div className="content" style={{ textAlign: "center" }}>
                  <h4 className="title is-5">Pendapatan</h4>X{" "}
                  <strong>IDR</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
