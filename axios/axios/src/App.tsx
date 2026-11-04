import { BrowserRouter, Route, Routes } from "react-router"
import { ProductPage } from "./pages/productPage"

export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" Component={ProductPage} />
        </Routes>
    </BrowserRouter>
}