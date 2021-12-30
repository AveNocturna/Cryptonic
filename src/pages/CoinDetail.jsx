import React from 'react'
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import toCurrency from '../utils/convertToCurrency';

const CoinDetail = () => {
    const params=useParams();
    const coins=useSelector(state=>state.coins);
    const coin=coins.find(coin_=>coin_.id===params.id);

    const navigate=useNavigate();

    const goBack=()=>{
        navigate('/home');
    }
    return (
        <div className='coinDetailContainer'>
            <div className='coinDetailHeading'>
                <img src={coin.image} alt={coin.name}/>
                <h2>{coin.name}</h2>
            </div>
            <div className='coinDetailData'>
                <p className='title'>Price :</p>
                <p>{ toCurrency(coin.current_price)}</p>
                <p className='title'>Price Change 24h :</p>
                <p >{coin.price_change_percentage_24h+' %'}</p>
                <p className='title'>Market Cap :</p>
                <p>{coin.market_cap}</p>
                <p className='title'>Total Volume :</p>
                <p>{coin.total_volume}</p>
                <p className='title'>High 24h :</p>
                <p>{toCurrency(coin.high_24h)}</p>
                <p className='title'>Low 24h :</p>
                <p>{toCurrency(coin.low_24h)}</p>
            </div>
            <button onClick={goBack} className='btnBack'>Back</button>
        </div>
    )
}

export default CoinDetail
