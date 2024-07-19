import Card from "./Card";


export default function ListaCards(objeto) {
   return(
      <div>
         {ListaPessoas.map((objeto, index) => <Card key={index} objetos={objeto}/>)}
      </div>
      
   )
}