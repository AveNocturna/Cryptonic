import React from 'react'
import {useNavigate} from 'react-router-dom';
const Coin = ({id,symbol,name,image,price,priceChange}) => {
   const navegate=useNavigate();
   
   const currencyFormat=(num)=> {
      return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
   }

   const negativeStyle={color:'white',backgroundColor:'#F36867'}
   const positiveStyle={color:'white',backgroundColor:'#42D0AB'}

   const openDetail=()=>{
        const to=`/detail/${id}`;
        navegate(to)
   }
    return (
            <div onClick={openDetail} className='CoinContainer'>
                <img src={image} alt="Coin img"/>
               <p>{name}</p>
               <p id='symbol'>{symbol}</p>
               <p>{currencyFormat(price)}</p>
               <p id='priceChange' style={priceChange>=0?positiveStyle:negativeStyle}>{priceChange+'%'}</p>
            </div>
    )
}

export default Coin;
