export default function Navbar(){
    return(
        <div className="bg-white">
        <div className="w-11/12 py-4 flex gap-2 justify-between items-center mx-auto">
            
            <div className="font-bold">koinx</div>

            <div className="flex gap-6 font-semibold text-sm/[16px] items-center">
                <div>crypto taxes</div>
                <div>free tools</div>
                <div>resource center</div>
                <div className="bg-blue-600 rounded-md">
                    <button className="px-5 py-2 text-sm/[16px] font-semibold text-white">Get Started</button>
                </div>
            </div>
        </div>
        </div>
    )
}