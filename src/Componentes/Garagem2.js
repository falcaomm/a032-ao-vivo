import Carro from "./Carro";

function Garagem2(props) {
    const carro4 = {
        nome: "Fusca",
        ano: 1970,
        cor: "ROSA",
        flex: false
    }

    const carro5 = {
        nome: "Fusca",
        ano: 1970,
        cor: "VERDE",
        flex: false
    }

    return (
        <div>
            <h1>Garagem2 {props.nome}</h1>
            <span>essa foi feita de maneira errada pois não reaproveitei a estrutura eu fiz um outro js com as mesmas coisas a garagem meireles ela reutiliza o arquivo garagem.js passando diferentes carros mas nessa eu testei passar direto sem criar no app e foi a questão de criar no app é extamente poder reutilizar os templates</span>
            <button onClick={() => props.funcao(props.nome)}>Boas vindas</button>
            <Carro
                carro={carro4}
                addPor={props.nome}
            />
            <Carro
                carro={carro5}
                addPor={props.nome}
            />
        </div>
    );
}

export default Garagem2;
