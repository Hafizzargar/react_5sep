import React from "react";
import "./disp.css";

function Disp({ e, i }) {
  return (
    <div className="disp-container" key={i}>
      <img src={e.image} alt={e.name} />
      <div className="disp-info">
        <span>{e.name}</span>
        <span className="symbol">{e.symbol.toUpperCase()}</span>
      </div>
      <div className="disp-stats">
        <div className="market-cap">Market Cap: ${e.market_cap.toLocaleString()}</div>
        <div className="mkt-change">24h Change: ${e.market_cap_change_24h.toLocaleString()}</div>
        <div>ATH Change: {e.ath_change_percentage.toFixed(2)}%</div>
      </div>
    </div>
  );
}

export default Disp;

