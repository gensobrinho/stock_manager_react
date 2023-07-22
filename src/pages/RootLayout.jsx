import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function RootLayout(){
    return(
        <>
            <header>
                <Link to="/" className="logo">REACT STOCK</Link>
                <nav>
                    <Link to="/" >Home</Link>
                    <Link to="/items" >Items</Link>
                </nav>
            </header>
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}