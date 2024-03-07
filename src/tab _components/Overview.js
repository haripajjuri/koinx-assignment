import axios from "axios";
import { useEffect,useState } from "react";
import { Divider } from "@material-ui/core";

export default function Overview(){

    const [coin,setCoin] = useState(null);
    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/bitcoin',{
            params:{
                id:'bitcoin'
            }
        }).then(res=>{
            setCoin(res.data);
        })
    },[])
    console.log(coin);

    return(
        <div className="bg-white p-4 rounded-lg">
            <div className="font-bold text-2xl mt-2 ml-2">Performance</div>
            
            <div className="flex justify-between items-center px-3 mt-6">
                <div >
                    <p className="text-sm">Today's Low</p>
                    <p className="font-semibold m-1">$ {coin?.market_data.low_24h.usd.toLocaleString()}</p>
                </div>

                <div>progressbar</div>

                <div>
                    <p className="text-sm">Today's High</p>
                    <p className="font-semibold m-1">$ {coin?.market_data.high_24h.usd.toLocaleString()}</p>
                </div>
            </div>

            <div className="flex  justify-between items-center px-3 mt-6">
                <div >
                    <p className="text-sm">52W Low</p>
                    <p className="font-semibold">12342783</p>
                </div>

                <div>progressbar</div>

                <div>
                    <p className="text-sm">52W High</p>
                    <p className="font-semibold">1312434</p>
                </div>
            </div>

            <div className="font-semibold text-xl mt- mb-5 ml-3">Fundamentals</div>

            <div className="grid grid-cols-2 pb-8">
                <div className=" mx-8 flex flex-col gap-3">

                    <div className="flex justify-between py-1">
                        <p className="font-semibold text-gray-500">Bitcoin Price</p>
                        <p className="font-semibold text-gray-700 text-sm">$ {coin?.market_data.current_price.usd.toLocaleString()}</p>
                    </div>
                    <Divider/>
                    <div className="flex justify-between py-1">
                        <p className="font-semibold text-gray-500">24h low / high</p>
                        <p className="font-semibold text-gray-700 text-sm">$ {coin?.market_data.low_24h.usd.toLocaleString()} / $ {coin?.market_data.high_24h.usd.toLocaleString()}</p>
                    </div>
                    <Divider/>
                    <div className="flex justify-between py-1">
                        <p className="font-semibold text-gray-500">7day low / high</p>
                        <p className="font-semibold text-gray-700 text-sm">$ {coin?.market_data.low_24h.usd.toLocaleString()} / $ {coin?.market_data.high_24h.usd.toLocaleString()}</p>
                    </div>
                    <Divider/>
                    <div className="flex justify-between py-1">
                        <p className="font-semibold text-gray-500">Trading Volume</p>
                        <p className="font-semibold text-gray-700 text-sm">$ {coin?.market_data.circulating_supply.toLocaleString()}</p>
                    </div>
                    <Divider/>
                    <div className="flex justify-between py-1">
                        <p className="font-semibold text-gray-500">Market cap rank</p>
                        <p className="font-semibold text-gray-700 text-sm">#{coin?.market_cap_rank}</p>
                    </div>
                </div>
                
                <div className=" mx-8 flex flex-col gap-3 ">

                    <div className="flex justify-between py-1">
                        <p className="font-semibold text-gray-500">Market Cap</p>
                        <p className="font-semibold text-gray-700 text-sm">$ {coin?.market_data.market_cap.usd.toLocaleString()}</p>
                    </div>
                    <Divider/>
                    <div className="flex justify-between py-1">
                        <p className="font-semibold text-gray-500">Market Cap Dominance</p>
                        <p className="font-semibold text-gray-700 text-sm">{coin?.market_data.market_cap_change_percentage_24h_in_currency
.usd.toLocaleString()} %</p>
                    </div>
                    <Divider/>
                    <div className="flex justify-between py-1">
                        <p className="font-semibold text-gray-500">Volume / Market Cap</p>
                        <p className="font-semibold text-gray-700 text-sm">$ {coin?.market_data.market_cap.usd.toLocaleString()}</p>
                    </div>
                    <Divider/>
                    <div className="flex justify-between py-1">
                        <p className="font-semibold text-gray-500">All-time High</p>
                        <div className="font-semibold text-gray-700 text-sm flex">$ {coin?.market_data.ath.usd.toLocaleString()}  (<p className="text-red-600">{coin?.market_data.ath_change_percentage.usd.toFixed(2)} %)</p></div>
                    </div>
                    <Divider/>
                    <div className="flex justify-between py-1">
                        <p className="font-semibold text-gray-500">All-time Low</p>
                        <div className="font-semibold text-gray-700 text-sm flex">$ {coin?.market_data.atl.usd.toLocaleString()}  (<p className="text-green-600">+ {coin?.market_data.atl_change_percentage.usd.toFixed(2)} %)</p></div>
                    </div>
                </div>

            </div>
        </div>
    )
}