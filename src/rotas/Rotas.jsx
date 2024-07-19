import { Route,Routes } from "react-router-dom";

import Home from "../paginas/Home";
import SobreNos from "../paginas/SobreNos";
import PaginaNaoEncontrada from "../paginas/PaginaNaoEncontrada";

export default function Rotas() {
   return(
      
      <Routes>
         <Route path="/" element={<Home/>} exact />
         <Route path="/sobre" element={<SobreNos/>} />
         <Route path="*" element={<PaginaNaoEncontrada/>} />
      </Routes>
   )
}