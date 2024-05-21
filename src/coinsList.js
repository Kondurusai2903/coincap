import React, { useState, useEffect } from "react";

function CoinList() {
  const [coins, setCoins] = useState([]); // State variable to store fetched coins

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.coincap.io/v2/assets");
        const data = await response.json();
        setCoins(data.data); // Update state with fetched coins
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors gracefully, e.g., display an error message
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once on component mount

  return (
    <div>
      <h2>Coin List</h2>
      {coins.length > 0 ? (
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              {coin.name} ({coin.symbol})
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading coins...</p>
      )}
    </div>
  );
}

export default CoinList;
