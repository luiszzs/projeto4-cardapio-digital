let valor1 
let valor2 
let valor3 

let comida1 
let comida2 
let comida3 

alert(`Bem-vindo ao nosso restaurante`)
let nome = prompt(`Qual seu nome?`)
let estudante = prompt(`Você é estudante? Use [s/n]`).toLowerCase()

let pedido1 = parseInt(prompt(`
  Faça seu primeiro pedido  
    
    (1) Hambúrguer – R$ 20
    (2) Pizza – R$ 35
    (3) Refrigerante – R$ 5
    (4) Batata Frita – R$ 12
    (5) Sair do programa
    Use [1/2/3/4/5]
    `))
    
if (pedido1 == 5) {
    alert(`Obrigado pela visita, volte sempre.
           Finalizando programa...`)
} else {
    switch (pedido1) {
        case 1:
            comida1 = "Hambúrguer"
            valor1 = 20
            break
        case 2:
            comida1 = "Pizza"
            valor1 = 35
            break
        case 3:
            comida1 = "Refrigerante"
            valor1 = 5
            break
        case 4:
            comida1 = "Batata Frita"
            valor1 = 12
            break
    }
    let pedido2 = parseInt(prompt(`
    Faça seu segundo pedido  
    
    (1) Hambúrguer – R$ 20
    (2) Pizza – R$ 35
    (3) Refrigerante – R$ 5
    (4) Batata Frita – R$ 12
    (5) Sair do programa
    Use [1/2/3/4/5]
            `)) 
    if (pedido2 == 5) {
        alert(`Obrigado pela visita, volte sempre.
           Finalizando programa...`)
    } else {
        switch (pedido2) {
            case 1:
                comida2 = "Hambúrguer"
                valor2 = 20
                break
            case 2:
                comdia2 = "Pizza"
                valor2 = 35
                break
            case 3:
                comida2 = "Refrigerante"
                valor2 = 5
                break
            case 4:
                comida2 = "Batata Frita"
                valor2 = 12
                break
        }
        let pedido3 = parseInt(prompt(`
    Faça seu terceiro pedido  
    
    (1) Hambúrguer – R$ 20
    (2) Pizza – R$ 35
    (3) Refrigerante – R$ 5
    (4) Batata Frita – R$ 12
    (5) Sair do programa
    Use [1/2/3/4/5]
                `))
        if (pedido3 == 5) {
            alert(`Obrigado pela visita, volte sempre.
           Finalizando programa...`)
        } else {
            switch (pedido3) {
                case 1:
                    comida3 = "Hambúrguer"
                    valor3 = 20
                    break
                case 2:
                    comida3 = "Pizza"
                    valor3 = 35
                    break
                case 3:
                    comida3 = "Refrigerante"
                    valor3 = 5
                    break
                case 4:
                    comida3 = "Batata Frita"
                    valor3 = 12
                    break
            }
  let valorTotal = valor1 + valor2 + valor3
          
            if (estudante == "s" && valorTotal > 50) {
                // ajeitar os calculos, eles estão mostrando por extenso, nao estao sendo executados
                let calculoDesconto1 = valorTotal * 15 / 100
                let desconto1 = valorTotal - calculoDesconto1
                alert(`
Obrigado ${nome}!
Pratos escolhidos:
-  ${comida1} de R$ ${valor1}
-  ${comida2} de R$ ${valor2}
-  ${comida3} de R$ ${valor3}
Total sem desconto: R$ ${valorTotal}
Total com desconto: R$ ${desconto1}
                    `)
                    alert(`Pedido realizado, obrigado(A) pela prefenrência, volte sempre`)
            } else if (estudante == "s" && valorTotal < 50) {
                let calculoDesconto2 = valorTotal * 10 / 100
                let desconto2 = valorTotal - calculoDesconto2
                alert(`
Obrigado ${nome}!
Pratos escolhidos:
-  ${comida1} de R$ ${valor1}
-  ${comida2} de R$ ${valor2}
-  ${comida3} de R$ ${valor3}
Total sem desconto: R$ ${valorTotal}
Total com desconto: R$ ${desconto2}
                    `)
                    alert(`Pedido realizado, obrigado(A) pela prefenrência, volte sempre`)
            } else if (estudante == "n" && valorTotal > 50) {
                let calculoDesconto3 = valorTotal * 5 / 100
                let desconto3 = valorTotal - calculoDesconto3
                alert(`
Obrigado ${nome}!
Pratos escolhidos:
-  ${comida1} de R$ ${valor1}
-  ${comida2} de R$ ${valor2}
-  ${comida3} de R$ ${valor3}
Total sem desconto: R$ ${valorTotal}
Total com desconto: R$ ${desconto3}
                    `)
                    alert(`Pedido realizado, obrigado(A) pela prefenrência, volte sempre`)
            } else if (estudante == "n" && valorTotal < 50) {
                alert(`
Obrigado ${nome}!
Pratos escolhidos:
-  ${comida1} de R$ ${valor1}
-  ${comida2} de R$ ${valor2}
-  ${comida3} de R$ ${valor3}
Total sem desconto: R$ ${valorTotal}
Total com desconto: Você não possui desconto
                    `)
                    alert(`Pedido realizado, obrigado(A) pela prefenrência, volte sempre`)
            }
        }
    }
}
