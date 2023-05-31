import { Home } from "../pages/home/Home";
import Detail from "../pages/detail/Detail";
import NotFounder from "../pages/NotFounder";
import { BrowserRouter, Routes, Route } from "react-router-dom"



export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Detail" element={<Detail/>}></Route>
                <Route path="*" element={<NotFounder/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}