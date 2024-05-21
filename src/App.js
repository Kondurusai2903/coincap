import React, { useState, useEffect } from "react";
import "./App.css";
const App = () => {
  const [coindata, setCoindata] = useState([]);
  const [first, setFirst] = useState(50);
  const fetchdata = async () => {
    const response = await fetch("https://api.coincap.io/v2/assets");
    const data = await response.json();
    setCoindata(data.data);
  };
  const handleChange = () => {
    setFirst(first + 50);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  function generatetable() {
    // const val = first ? 50 : 100;
    return coindata.map((item, ind) =>
      ind < first ? (
        <tr key={item.id}>
          <td>{item.rank}</td>
          <td>
            {
              <div className="img-section">
                <div className="img-wrapper">
                  <img
                    src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`}
                    alt={"hello"}
                    style={{ width: "30px", height: "30px" }}
                  />
                </div>

                <div>
                  <h4>{item.name}</h4>
                  <p style={{ marginTop: ".2rem" }}>{item.symbol}</p>
                </div>
              </div>
            }
          </td>
          <td>{`$${parseFloat(item.priceUsd).toFixed(2)}`}</td>
          <td>{`$${parseFloat(item.marketCapUsd).toFixed(2)}`}</td>
          <td>{`$${parseFloat(item.vwap24Hr).toFixed(2)}`}</td>
          <td>{parseFloat(item.supply).toFixed(2)}</td>
          <td>{`$${parseFloat(item.volumeUsd24Hr).toFixed(2)}`}</td>
          <td>{parseFloat(item.changePercent24Hr).toFixed(2)}</td>
        </tr>
      ) : (
        ""
      )
    );
  }
  return (
    <div className="container">
      <div className="box">
        <table style={{ borderCollapse: "collapse" }}>
          <thead>
            <td>Rank</td>
            <td style={{ textAlign: "left" }}>Name</td>
            <td>Price</td>
            <td>Market Cap</td>
            <td>VMAP(24HR)</td>
            <td>Supply</td>
            <td>Volume(24HR)</td>
            <td>Change(24HR)</td>
          </thead>
          <tbody>
            {coindata.length > 0 ? generatetable() : generatetable()}
          </tbody>
        </table>

        <center>
          <button onClick={handleChange}>Load More</button>
        </center>
      </div>
    </div>
  );
};
export default App;
