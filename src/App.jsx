// 1. importação
// 2. código do componente
import { useEffect, useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  // const nome = 'Silvia'

  // function retornaNome() {
  //   return nome;
  // }

  // const pessoa = {
  //   nome: "Maria",
  // }

  // let estaDeDia = true;

  return(
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario/>
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
    // // <>
    // {/* <h1>Olá, {pessoa.nome}</h1>
    // <h2>Subtitulo</h2>
    // {estaDeDia ? 'Bom dia!' : 'Boa tarde!'}
    // </> */}
  )
}

export default App
