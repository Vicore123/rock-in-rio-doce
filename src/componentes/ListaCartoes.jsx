import styled from "styled-components";
import Cartao from "./Cartao.jsx";
import { Cores } from "./Cores.jsx";


const StyledList = styled.div`
   display: flex;
   width: 500px;
   justify-content: space-between;

`

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
      <StyledList>
         {pessoas.map(pessoa => (
            <>
            <Cartao name={pessoa.name} img={pessoa.img} description={pessoa.description}/>
            </>
         ))}
      </StyledList>
      
   )
}