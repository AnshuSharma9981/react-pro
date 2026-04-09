export default function Navbar(){
    return (
        <div className="text-gray-700 flex justify-between px-20 py-6 items-center font-semibold ">
            <h1 className="text-2xl font-bold">Airtel</h1>
            <div className="flex justify-between gap-15 text-lg">
                <h2>Home</h2>
                <h2>Mobile</h2>
                <h2>Business</h2>
                <h2>Customer Care</h2>
            </div>
        </div>
    )
}