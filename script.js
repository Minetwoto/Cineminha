// Função que será chamada quando clicar no botão
// Função: um bloco de código reutilizável que executa uma tarefa específica
function calcular(){
    // ============================================================================
    // 1. PEGAR OS ELEMENTOS DA TELA
    // ============================================================================

    // Aqui pegamos cada checkbox pelo Id
    let freira = document.getElementById("freira") 
    let it = document.getElementById("it")
    let mj = document.getElementById("mj")
    let countmontecristo = document.getElementById("countmontecristo")
    let meninopijamalistrado = document.getElementById("meninopijamalistrado")
    let rango = document.getElementById("rango")
    let scarymovie = document.getElementById("scarymovie")


    //INGRESSOS

    let ingressoInteiro = document.getElementById("ingressoInteiro")
    let ingressoMeio = document.getElementById("ingressoMeio")
    let ingressoIdoso = document.getElementById("ingressoIdoso")
    // ============================================================================
    // 2. VARIÁVEIS INICIAIS
    // ============================================================================

    // Total começa com 0
    let total = 0
    // String para guardar os itens escolhidos
    let itens = ""

    // ============================================================================
    // 3. VERIFICAR CADA PRODUTO
    // ============================================================================
    // Se o checkbox estiver marcado  (true)
    if(freira.checked){ // Soma o valor do hambúrguer
        itens = itens + "A Freira<br>" // Adiciona ao texto dos produtos
    }
    if(it.checked){
        itens = itens + "It, A Coisa<br>"
    }
    if(mj.checked){
        itens = itens + "Michael<br>"
    }
    if(countmontecristo.checked){
        itens = itens + "O Conde de Monte Cristo<br>"
    }
    if(meninopijamalistrado.checked){
        itens = itens + "O Menino do Pijama Listrado<br>"
    }
    if(rango.checked){
        itens = itens + "Rango<br>"
    }
    if(scarymovie.checked){
        itens = itens + "Todo Mundo Em Pânico<br>"
    }

/* preços */

    if(ingressoInteiro.checked){
        total = total + 30
        itens = itens + "Ingresso Inteiro<br>"
    }
    if(ingressoMeio.checked){
        total = total + 15
        itens = itens + "Meio ingresso<br>"
    }
    
    if(ingressoIdoso.checked){
        total = total + 20
        itens = itens + "Ingresso geriatrico<br>"
    }
    // ============================================================================
    // 4. PEGAR DIV DO RESULTADO
    // ============================================================================
    let resultado = document.getElementById("resultado")

    // ============================================================================
    // 5. VALIDAÇÃO
    // ============================================================================
    // Se não escolheu nada
    if(total === 0){
        resultado.innerHTML = "Escolha pelo menos 1 item."
        return // Para função aqui
    }

    // ============================================================================
    // 6. DESCONTO
    // ============================================================================
    let subtotal = total
    let desconto = 0
    // Se o valor dor maior ou igual a 30, aplicamos o desconto de 10%
    if(subtotal >= 30){
        desconto = subtotal * 0.05 // 5%
    }

    // ============================================================================
    // 7. ENTREGA 
    // ============================================================================

    // ============================================================================
    // 8. TOTAL FINAL
    // ============================================================================
    let totalFinal = subtotal - desconto

    // ============================================================================
    // 9. MOSTRAR O RESULTADO
    // ============================================================================
    resultado.innerHTML =
    "<strong>Itens:</strong><br>" + itens + 
    "<br> Subtotal: R$" + subtotal.toFixed(2) +
    "<br> Desconto: R$" + desconto.toFixed(2) +
    "<br><strong> Total: R$" + totalFinal.toFixed(2) +
    "</strong>"
}