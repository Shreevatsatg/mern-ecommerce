



export default function Navbar() {


return (
    <div className=" fixed top-0  bg-gray-800 text-white p-4 flex justify-between items-center m-2 ">
        <div className="text-2xl font-bold mr-280">ecommerce</div>
        <nav className="space-x-4">
            <a href="" className="hover:text-gray-400 m-5">Home</a>
            <a href="" className="hover:text-gray-400 m-5">cart</a>
            <a href="#" className="hover:text-gray-400 m-5">account </a>
        </nav>
    </div>
)
}
