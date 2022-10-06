import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import PaginaBase from "../pages/PaginaBase"


const Rotas = () => {
    return (<Routes>
      <Route path='/' element={<PaginaBase />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>)
}

export default Rotas