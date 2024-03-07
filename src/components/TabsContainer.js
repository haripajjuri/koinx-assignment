import { useState } from "react";
import Overview from "../tab _components/Overview";
export default function TabsContainer(){
    const [toggle,setToggle] = useState(1);
    const updateToggle=(id)=>{
        setToggle(id);
    }

    return(
        <div className="h-screen">
        <div className="flex gap-6 pt-4 border-red-400 pl-4">
            <p onClick={()=>updateToggle(1)} className={toggle===1?'active-tab cursor-pointer':'tab cursor-pointer'}>overview</p>
            <p onClick={()=>updateToggle(2)} className={toggle===2?'active-tab cursor-pointer':'tab cursor-pointer'}>fundamentals</p>
            <p onClick={()=>updateToggle(3)} className={toggle===3?'active-tab cursor-pointer':'tab cursor-pointer'}>new insights</p>
            <p onClick={()=>updateToggle(4)} className={toggle===4?'active-tab cursor-pointer':'tab cursor-pointer'}>sentiments</p>
            <p onClick={()=>updateToggle(5)} className={toggle===5?'active-tab cursor-pointer':'tab cursor-pointer'}>Team</p>
            <p onClick={()=>updateToggle(6)} className={toggle===6?'active-tab cursor-pointer':'tab cursor-pointer'}>technicals</p>
            <p onClick={()=>updateToggle(7)} className={toggle===7?'active-tab cursor-pointer':'tab cursor-pointer'}>tokenomics</p>
        </div>
        <div className=" p-4 mt-4 rounded-lg h-[88%]">
            <div className={toggle===1?'':'hidden'}>
                <Overview />
            </div>
            <div className={toggle===2?'':'hidden'}>this is fundamentals</div>
            <div className={toggle===3?'':'hidden'}>this is new insights</div>
            {/* <div>this is sentiments</div>
            <div>this is Team</div>
            <div>this is Technicals</div>
            <div>this is Tokenomics</div> */}
        </div>
        </div>
    )
}