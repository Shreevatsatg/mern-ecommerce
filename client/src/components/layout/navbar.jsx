



export default function Navbar() {


return (
    <div className="fixed top-0 bg-gray-800 text-white p-4 w-screen h-20">
    <div className="flex justify-between items-center max-w-7xl mx-auto ">

    {/* Left - Logo */}
    <div className="text-2xl font-bold">ecommerce</div>

    {/* Center - Search Bar with Dropdown */}
    <div className="flex items-center bg-gray-700 p-2 rounded-2xl space-x-1 w-1/2">
        <select className="bg-gray-700 text-white outline-none px-2">
        <option>All</option>
        <option>Electronics</option>
        <option>Clothing</option>
        <option>Books</option>
        </select>
        <input
        type="text"
        placeholder="Search..."
        className="bg-white text-white px-2 outline-none w-full rounded-sm"
        />
        <button className="bg-gray-600 hover:bg-gray-500 text-white text-xs p-1 rounded">
  🔍
</button>

    </div>

      {/* Right - Links */}
    <div className="flex space-x-4 items-center">
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="/profile" className="hover:text-gray-400">Account</a>
        <a href="/cart" className="hover:text-gray-400 relative">
        Cart
        <span className="absolute -top-1 -right-2 bg-red-600 text-xs px-1 rounded-full">3</span>
        </a>
    </div>

    </div>
</div>

)
}
