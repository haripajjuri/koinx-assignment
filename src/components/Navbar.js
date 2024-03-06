export default function Navbar(){
    return(
        <div className="bg-white border-red-500 px-16 py-4 flex gap-2 justify-between items-center">

            <div className="font-bold">koinx</div>

            <div className="flex gap-6 items-center">
                <div>crypto taxes</div>
                <div>free tools</div>
                <div>resource center</div>
                <div className="bg-blue-600 rounded-md">
                    <button className="px-5 py-2 text-sm/[16px] font-semibold text-white">Get Started</button>
                </div>
            </div>
        </div>
    )
}