import React from "react"
import "./Income.css"

export default function Income() {
  return (
    <div className="income-container">
      
      <div className="income-header">
        <h1>Income</h1>
        <p>Last <span>30 days</span></p>
        <h2>$2,260</h2>
      </div>

      <div className="income-chart">
        <div className="bar" style={{ height: "70%" }}></div>
        <div className="bar" style={{ height: "25%" }}></div>
        <div className="bar" style={{ height: "55%" }}></div>
        <div className="bar" style={{ height: "45%" }}></div>
        <div className="bar active" style={{ height: "35%" }}></div>
        <div className="bar" style={{ height: "15%" }}></div>
      </div>

      <div className="transactions-header">
        <h3>Your transactions (3)</h3>
        <p>Last <span>30 days</span></p>
      </div>

      <div className="transaction-card">
        <h4>$720</h4>
        <span>1/12/22</span>
      </div>

      <div className="transaction-card">
        <h4>$560</h4>
        <span>10/11/22</span>
      </div>

      <div className="transaction-card">
        <h4>$980</h4>
        <span>23/11/22</span>
      </div>

    </div>
  )
}