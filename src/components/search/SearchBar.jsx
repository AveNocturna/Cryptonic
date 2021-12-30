import React from 'react'
import './styles.css';
import {useSelector,useDispatch} from 'react-redux';
import filterAction from '../../store/actions/filter';

const SearchBar = () => {
    const filter=useSelector(state=>state.filter);
    const dispatch=useDispatch(); 
    return (
        <div className='searchContainer'>
            <input onChange={(e)=>dispatch(filterAction(e.target.value))} value={filter} placeholder='Search' type="text" name="search" id="search"  />
        </div>
    )
}

export default SearchBar