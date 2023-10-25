import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Detail } from '../pages/detail/Detail';
import { NotFounder } from "../pages/notFounder/NotFounder";
import { Register } from './../pages/register/Register';
import Abount from "../pages/abount/Abount";
import NavBar from "../componentes/navBar/NavBar";
import { Footer } from "../componentes/footer/Footer";




 function Router(){
    return(
        <BrowserRouter>
        < NavBar />
        {/* <div className="container"> */}
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/detail" element={<Detail/>} />
                <Route path="/abount" element={<Abount/>} />
                <Route path="*" element={<NotFounder/>} />
            </Routes> 
            {/* </div> */}
           <Footer />
        </BrowserRouter>
    )
}

export default Router;