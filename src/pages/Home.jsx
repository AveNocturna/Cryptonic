import React from 'react'
import CoinList from '../components/coin/CoinList';
import SearchBar from '../components/search/SearchBar';
import Heading from '../components/home/Heading';

const Home = () => {
    return (
        <div>
            <Heading/>
            <SearchBar/>
            <CoinList/>
        </div>
    )
}

export default Home;