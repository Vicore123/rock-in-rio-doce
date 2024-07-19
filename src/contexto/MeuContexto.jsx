import React from "react"
import { createContext } from "react"
import { CreateContext, useState} from "react"

let MeuContexto = createContext();

function MeuContextoProvider({props}) {
   let [pessoas, setpessoas] = useState(
      [
         { nome: "João", profissao: "Engenheiro" },
         { nome: "Maria", profissao: "Médica" },
         { nome: "Carlos", profissao: "Professor" }
      ]
   )

   return (
      <MeuContexto.Provider value ={{ pessoas, setpessoas }}>
         {props}
      </MeuContexto.Provider>
   )
}

export { MeuContexto, MeuContextoProvider }