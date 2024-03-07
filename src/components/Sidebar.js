import TrendingCard from "./TrendingCard"
export default function Sidebar(){
    return(
        <div className="h-screen">
            <div className="rounded-2xl m-5 bg-blue-600 p-12  h-[55%] flex flex-col items-center gap-4">
                <div className="font-[600] leading-10 text-2xl text-white tracking-wide text-center px-5">Get Started with Koinx for FREE</div>
                <div className="text-white text-center text-sm tracking-wide mx-3">with our range of features that you can equip for free, koinx allows you to be more educated and aware of your tax reports</div>
                <div>
                    <button className="bg-white px-4 py-2 rounded-lg font-semibold text-sm">Get Started for FREE</button>
                </div>
            </div>

            <TrendingCard/>
        </div>
    )
}