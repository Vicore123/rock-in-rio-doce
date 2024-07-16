import Cartao from "./Cartao.jsx";

import './ListaCartoes.css'

export default function ListaCartoes() {

   let pessoas = [{
      name: 'Ana',
      img: 'https://picsum.photos/153',
      description: 'Desenvolvedora'
   },
   {
      name: 'João',
      img: 'https://picsum.photos/154',
      description: 'Junior'
   }]

   return (
      <div className="pagina">

         {pessoas.map(pessoa => (
            <Cartao name={pessoa.name} img={pessoa.img} description={pessoa.description}/>
         ))}
         
      </div>
   )
}