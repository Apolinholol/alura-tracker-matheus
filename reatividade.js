const projeto ={
    id: 1,
    descricao:"Alura luba"
}

const proxy = new Proxy(projeto,{
            //A chave pode ser o id ou descricao no caso
    get(objetoAtual,chave){
        console.log(`Alguem pediu a chave ${chave} do projeto`)
        return objetoAtual[chave]
    },
    set(objetoAtual,chave,valor){
        console.log(
            `Alguém alterou a chave ${chave} do projeto para o valor ${valor}`
        )
        objetoAtual[chave] = valor
    }
})

proxy.descricao ="Reatividade é tenso"
console.log(proxy.descricao)