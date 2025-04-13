



export default function Navbar() {


return (
    <div className=" fixed top-0  bg-gray-800 text-white p-4 flex justify-between items-center m-2 ">
        <div className="text-2xl font-bold mr-50">ecommerce</div>
        <nav className="space-x-4">
            <input type="text" placeholder="search.." className="bg-gray-700 text-white p-2 rounded" />
            <a href="/" className="hover:text-gray-400 m-5">Home</a>
            <a href="/profile" className="hover:text-gray-400 m-5">account</a>
            <a href="/cart" className="hover:text-gray-400 m-5">cart</a>
        </nav>
    </div>
)
}
