import React from "react";

const DataHeader = () => {
  return (
    <div className="dataHeader">
      <p></p>
      <p>Name</p>
      <p id="symbol">Symbol</p>
      <p>Price</p>
      <p id="priceChange">Price Change 24h</p>
    </div>
  );
};

export default DataHeader;
