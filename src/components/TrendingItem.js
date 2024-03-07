import upward from '../upward.png'
export default function TrendingItem(props){
    return(
        <div className="flex justify-between ml-1 mr-4 py-2">
        <div className="flex items-center justify-center gap-2">
            <div className="w-[28px]">
                <img src={props.img} alt="" />
            </div>
            <div className="font-semibold text-[14.5px]">{props.name}</div>
            <div className="font-semibold text-sm">({props.symbol})</div>
        </div>
        <div className="w-[100px] flex items-center justify-center gap-2 bg-green-50 py-1 rounded-lg ">
            <div className='w-3'>
                <img src={upward} alt="" />
            </div>
            <p className="font-medium text-[13.5px] text-green-600">{props.change} %</p>
        </div>

        </div>
    )
}