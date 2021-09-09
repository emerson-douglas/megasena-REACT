//numeros sorteados
const estilo = {
    display: "flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    background: "#085705",
    margin:"5px",
    width: "50px",
    height:"50px",
    color: "#fff",
    borderRadius:"50px"
}
export default function Numero(props){
    return(
    <div style={estilo}>{props.num}</div>
    )
    
}