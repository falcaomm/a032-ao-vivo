import Garagem from "./Componentes/Garagem";
import Garagem2 from "./Componentes/Garagem2"
import "./styles.css";

export default function App() {
  const nome = "Falcão"
  const nome2 = "meireles"

  const carro1 = {
    nome: "Fusca",
    ano: 1970,
    cor: "Vermelho",
    flex: false
  }

  const carro2 = {
    nome: "Fusca",
    ano: 1970,
    cor: "azul",
    flex: false
  }

  const carro3 = {
    nome: "Fusca",
    ano: 1970,
    cor: "amarelo",
    flex: false
  }

  const carro8 = {
    nome: "um carro",
    ano: 2022,
    cor: "azul escuro",
    flex: true
  }

  const carro9 = {
    nome: "outro carro",
    ano: 1999,
    cor: "branco",
    flex: false
  }

  const carro10 = {
    nome: "mais um carro",
    ano: 2010,
    cor: "prata",
    flex: false
  }

  function apresentacao(parametroNome) {
    alert(`Bem vindos a garagem de ${parametroNome}`)

  }

  return (
    <div>
      <Garagem
        nome={nome}
        carro1={carro1}
        carro2={carro2}
        carro3={carro3}
        funcao={apresentacao}
      />

      <Garagem
        nome={nome2}
        carro1={carro8}
        carro2={carro9}
        carro3={carro10}
        funcao={apresentacao}
      />
      <Garagem2
        nome={nome}
        funcao={apresentacao}
      />
    </div>
  );
}

//o pai manda as propriedades/chaves pro props(objeto) criado no seu filho direto 