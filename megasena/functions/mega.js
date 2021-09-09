export default function mega(){
    const numeros = []

    while(numeros.length<6){
        let rand = parseInt((Math.random()*60)+1)
        if(!numeros.includes(rand))
            numeros.push(rand)
    }
    return numeros
}
mega()