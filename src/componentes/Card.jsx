export default function Card({objetos}) {
   return (
      <>
         <h1>{objetos.nome}</h1>
         <h2>{objetos.profissao}</h2>
         {objetos.idade !== undefined ? (<h2>{objetos.idade}</h2>) : null}
      </>
   )
}