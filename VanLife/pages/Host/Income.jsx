import React from "react"

export default function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '26", id: "1" },
    { amount: 560, date: "Oct 13, '25", id: "2" },
    { amount: 980, date: "Oct 25, '25", id: "3" },
  ]

  return (
    <section className="host-income">
      <h1>Income</h1>
      <p>
        Last <span>30 days</span>
      </p>
      <h2>$2,260</h2>
      <img
        className="graph"
        src="/img/income-graph.png"
        alt="Income graph"
      />

      <div className="info-header">
        <h3>Your transactions (3)</h3>
        <p>
          Lasy <span>30 days</span>
        </p>
      </div>
      <div className="transactions">
        {transactionsData.map((item) => (
          <div key={item.id} className="transaction">
            <h3>${item.amount}</h3>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}