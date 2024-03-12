export function criarPilha (tamanhoDaPilha = 0.25){
    return[...new Array(tamanhoDaPilha)]
}
export function inserirItem(pilha, livroX){
    const spacePosition = pilha.indexOf(undefined)
    if(spacePosition === -1)
    console.log("Não tem espaço")
return;
}
export function inserirItem(pilha, livroZ){
    const spacePosition = pilha.indexOf(undefined)
    if(spacePosition === -1)
    console.log("Não tem espaço")
return;
}
export function inserirItem(pilha, livroY){
    const spacePosition = pilha.indexOf(undefined)
    if(spacePosition === -1)
    console.log("Não tem espaço")
return;
}
export function retirarItem(pilha,livroZ){
    if(pilha[0] === undefined){
        console.log("Pilha vazia");
        return;
    }
}
export function retirarItem(pilha,livroY){
    if(pilha[0] === undefined){
        console.log("Pilha vazia");
        return;
    }
}
export function retirarItem(pilha,livroX){
    if(pilha[0] === undefined){
        console.log("Pilha vazia");
        return;
    }
}
export function verificarExistencia(pilha, titulo){
    for(let i = 0; i<pilha.titulo;i++){
        if(pilha[i].titulo === pilha.titulo){
            console.log("Achei o livro"+pilha.titulo)
            return;
        }
    }
    console.log("Não achei o livro"+ pilha.titulo)
}
