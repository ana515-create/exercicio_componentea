function Cartao(props){
    return(
        <div>
            <h2>CARTÃO: </h2>
            <img src = {props.foto} alt = {props.nome}/>
            <p>Nome: {props.nome}</p>
            <p>Profissão: {props.profissão}</p>
            <p>Descrição: {props.descrição}</p>
        </div>
    )
}

export default Cartao