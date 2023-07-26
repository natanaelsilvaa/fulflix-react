import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Detail } from './../pages/detail/Detail';
import { NotFounder } from "../pages/NotFounder";
import { Register } from './../pages/register/Register';



export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/Register" element={<Register/>} />
                <Route path="/Home" element={<Home/>} />
                <Route path="/Detail" element={<Detail/>} />
                <Route path="*" element={<NotFounder/>} />
            </Routes> 
        </BrowserRouter>
    )
}