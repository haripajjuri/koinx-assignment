import { useEffect,useState } from "react";
import axios from "axios";
import TrendingItem from "./TrendingItem";
export default function TrendingCard(){
    const [coins,setCoins] = useState([]);

    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/search/trending').then(res=>{
            setCoins(res.data.coins)
        })
    },[])
    console.log(coins)
    return(
        <div className="m-5 bg-white h-60 px-6 py-4 rounded-2xl">
            <div className="font-semibold text-xl">Trending Coins (24h)</div>
            
            <div className="flex flex-col gap-2 py-2 h-[90%] mt-2 ">
            <TrendingItem name={coins[0]?.item.name} symbol={coins[0]?.item.symbol} img={coins[0]?.item.thumb} change={coins[0]?.item.data.price_change_percentage_24h.usd.toFixed(2)}/>
            <TrendingItem name={coins[1]?.item.name} symbol={coins[1]?.item.symbol} img={coins[1]?.item.thumb} change={coins[1]?.item.data.price_change_percentage_24h.usd.toFixed(2)}/>
            <TrendingItem name={coins[2]?.item.name} symbol={coins[2]?.item.symbol} img={coins[2]?.item.thumb} change={coins[2]?.item.data.price_change_percentage_24h.usd.toFixed(2)}/>
            </div>
        </div>
    )
}