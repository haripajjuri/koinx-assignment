import axios from "axios";
import { useEffect,useState } from "react";
import TradingViewWdiget from "./TradingViewWdiget";
import bitcoin from '../bitcoin.png'
import upward from '../upward.png'
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
        <div className=" bg-white my-6 rounded-xl h-screen ">
            <div className="flex gap-4 items-center m-5 pt-6">
                <div className="w-10 pt-1">
                    <img src={bitcoin} alt="bitcoin" />
                </div>
                <div className="flex items-center gap-2">
                    <p className="font-bold text-2xl tracking-normal">Bitcoin</p>
                    <p className="font-bold text-md text-gray-600">( BTC )</p>
                </div>
                <div>
                    <button className="bg-gray-500 mx-3 px-4 py-[6px] rounded-md text-md text-white">Rank #1</button>
                </div>
            </div>

            <div className="pl-3 mx-5 flex gap-3 items-center">
                <div>
                    <p className="font-[500] text-[32px]">${coin?.bitcoin.usd.toLocaleString()}</p>
                </div>

                <div className="w-[100px] flex items-center justify-center gap-2 bg-green-50 py-1 rounded-md ">
                    <div className='w-3'>
                        <img src={upward} alt="" />
                    </div>
                    <p className="font-medium text-[13.5px] text-green-600">{coin?.bitcoin.usd_24h_change.toFixed(2)} %</p>
                </div>

                <p className="font-bold text-xs text-gray-500">( 24H )</p>
            </div>

            <p className="font-semibold ml-6 mt-2 text-gray-700 pl-3 text-md">₹{coin?.bitcoin.inr.toLocaleString()}</p>

            <div className="m-5 px-2 h-[60%]">
                <TradingViewWdiget/>
            </div>
            
        </div>
    )
}