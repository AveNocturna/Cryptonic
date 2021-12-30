import React, { useEffect, useState } from "react";
import { getCoins } from "../../services/Coins/getCoins";
import "./styles.css";
import Coin from "./Coin";
import { useSelector,useDispatch } from "react-redux";
import DataHeader from "./DataHeader";
import getCoinsAction from '../../store/actions/coins';

const CoinList = () => {
  const [Coins, SetCoins] = useState([]);
  const filter = useSelector((state) => state.filter);
  const dispatch=useDispatch();
//Getting the coins
  useEffect(() => {
    const getData = async () => {
      const data = await getCoins();
      SetCoins(data);
      dispatch(getCoinsAction(data));
    };
    getData();
  }, [dispatch]);


  return (
    <div className="CoinList">
      <DataHeader />
      {
      Coins.filter((coin) =>
        coin.name.toLowerCase().includes(filter.toLowerCase())//Filtering the coins by name
      ).map((filterCoin) => {
        return (
          <Coin
            key={filterCoin.id}
            id={filterCoin.id}
            symbol={filterCoin.symbol}
            name={filterCoin.name}
            image={filterCoin.image}
            price={filterCoin.current_price}
            priceChange={filterCoin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
};

export default CoinList;
