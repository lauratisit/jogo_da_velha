//constantes
const jogadorX = "X"
const jogadorO = "O"

//variáveis
var jogadorAtual = jogadorX //sempre inicia com o jogador "X"
var vencedor 
var ident
var inicia = false
var res = true
var v = 0

function botaoInicia() { /*altera o valor do botão*/
    let a
    a = document.getElementById('re-iniciar')
    if(a.value == "INICIAR"){
        indicaJogador()
        a.value = "REINICIAR"
        inicia = true //para liberar as jogadas só depois do botão "INICIAR" ser clicado
    } else {
        reiniciaJogo()
        a.value = "INICIAR"
    }
}

function jogada(ident){
    if(inicia && res){ //só permite que seja feita a jogada se o botão "INICIAR" já tiver sido clicado e se ainda não tiver um vencedor
        if(document.getElementById(ident).innerText == ""){
            document.getElementById(ident).innerText = jogadorAtual
            v++ //para verificar se deu velha
            resultado()
            if(res){
                trocaJogador()
            }
        }
    }
}

function resultado(){

    //obtem o conteúdo dos blocos
    var a1 = document.getElementById('a1').innerText
    var a2 = document.getElementById('a2').innerText
    var a3 = document.getElementById('a3').innerText

    var b1 = document.getElementById('b1').innerText
    var b2 = document.getElementById('b2').innerText
    var b3 = document.getElementById('b3').innerText

    var c1 = document.getElementById('c1').innerText
    var c2 = document.getElementById('c2').innerText
    var c3 = document.getElementById('c3').innerText

        //verifica se houve um vencedor
    if(a1 == jogadorAtual && ((a2 == jogadorAtual && a3 == jogadorAtual) || (b1 == jogadorAtual && c1 == jogadorAtual) ||(b2 == jogadorAtual && c3 == jogadorAtual))){
        res = false
        vencedor = jogadorAtual
    }else{
        if(b2 == jogadorAtual && ((b1 == jogadorAtual && b3 == jogadorAtual) || (a2 == jogadorAtual && c2 == jogadorAtual) || (a3 == jogadorAtual && c1 == jogadorAtual))){
            res = false
            vencedor = jogadorAtual
        }else{
            if(c3 ==jogadorAtual && ((a3 == jogadorAtual && b3 == jogadorAtual) || (c1 == jogadorAtual &&  c2 == jogadorAtual))){
                res = false
                vencedor = jogadorAtual
            }
            else{
                if(v==9){
                    window.alert(`Deu velha!`)
                }
            }
        }
    }

        

    if(!res){ //indica o vencedor
        window.alert(`O jogador ${jogadorAtual} é o vencedor`)
    }
}

function trocaJogador(){
    if(jogadorAtual == jogadorX){
        jogadorAtual = jogadorO 
    } else {
        jogadorAtual = jogadorX 
    }
    indicaJogador()
}

function reiniciaJogo(){ //recarrega a página
    window.alert('O jogo será reiniciado!')
    document.location.reload()
}

function indicaJogador(){ /*altera o estilo do botão do jogador atual*/
    let a, b

    if(jogadorAtual == jogadorX){
        a = document.getElementById('bX')
        b = document.getElementById('bO')
    } else {
        a = document.getElementById('bO')
        b = document.getElementById('bX')
    }

    //altera o style para indicar o jogador atual
    a.style.backgroundColor= "rgb(206, 220, 229)"
    a.style.color = "rgb(10, 63, 141)"
    a.style.border = "1px solid rgb(10, 63, 141)"

    //retorna ao style padrão o jogador anterior
    b.style.backgroundColor= "rgb(255, 255, 255)"
    b.style.color = "rgb(10, 63, 141)"
    b.style.border = "1px solid rgb(206, 220, 229)"
}
