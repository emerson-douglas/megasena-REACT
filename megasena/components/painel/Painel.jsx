export default function Painel(props){
    return(
                <div style={
                {display:"flex", 
                width:"fit-content", 
                minHeight:"60px"}
                }>
                    {props.child}
                </div>

    )
}