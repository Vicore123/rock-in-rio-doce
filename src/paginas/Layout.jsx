import { BrowserRouter } from 'react-router-dom'

import Footer from '../componentes/Footer.jsx'
import Header from '../componentes/Header.jsx'
import Rotas from '../rotas/Rotas.jsx'



export default function Layout() {
   return (
      <>
         <BrowserRouter>
            <Header/>
               <Rotas/>
            <Footer/>
         </BrowserRouter>
      </>
   )
}