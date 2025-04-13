import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/home.jsx";
import Cart from "./pages/cart.jsx";


export default function App() {
    return (
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    
</Routes>
</BrowserRouter>
    )
}