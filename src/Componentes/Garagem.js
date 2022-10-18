import Carro from "./Carro";

function Garagem(props) {
  return (
    <div>
      <h1>Garagem {props.nome}</h1>
      <button onClick={()=>props.funcao(props.nome)}>Boas vindas</button>
      <Carro
        carro={props.carro1}
        addPor={props.nome}
      />
      <Carro
        carro={props.carro2}
        addPor={props.nome}
      />
      <Carro
        carro={props.carro3}
        addPor={props.nome}
      />
    </div>
  );
}

export default Garagem;
