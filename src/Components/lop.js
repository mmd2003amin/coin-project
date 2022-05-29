import React,{useEffect, useState} from 'react';
//API 
import { API } from '../services/API';
//Components
import Cards from './Cards';
import styled from "./lop.module.css"

const Lop = () => {
    const [ coins , setCoins ] = useState([]) ;
    const [ search , setSearch ] = useState("") ;
    useEffect(() => {
        const api = async() => {
            const get = await API() ;
            setCoins(get)
        }
        api()
    }, [])
    const searchHandler = event => {
        setSearch(event.target.value)

    }
    const searchCoins = coins.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className={styled.component}>
            <input className={styled.input} type="text" placeholder="Search" value={search} onChange={searchHandler}/>
            {
                coins.length ?<div className={styled.cards}>
                {searchCoins.map(item => <Cards id={item.id} data={item}/>)} </div>:
                <h1 className={styled.loading}>Loading...</h1>
            }
        </div>
    );
};

export default Lop;