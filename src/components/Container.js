import axios from "axios";
import { useEffect,useState } from "react";
import TradingViewWdiget from "./TradingViewWdiget";
export default function Container(){
    const [coin,setCoin] = useState(null)
    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/simple/price',{
            params:{
                ids:'bitcoin',
                vs_currencies:'inr,usd',
                include_24hr_change:true
            }
        }).then(res=>{
            setCoin(res.data)
        })
    },[])
    console.log(coin)
    return(
    
        <TradingViewWdiget/>
    )
}