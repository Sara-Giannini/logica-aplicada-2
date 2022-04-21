// | Exemplo 01 | Descrição |
// | --- | --- |
// | `For/Break/Continue` | Utilize a estrutura de repetição for para imprimir no console conforme instruções:
// a) números de 1 a 50
// b) quando chegar no número 25 interrompa a instrução e pare o loop
// c) quando chegar no número 10 pule a instrução|


//For

 for(let conta = 1; conta <= 50; conta = conta + 1) 
 console.log(conta)

//Break

  for(let quebra = 1; quebra <= 50;  quebra = quebra + 1) {
      console.log(quebra)
  
      if(quebra === 25) {
        break
      }  
    }

// Continue

 let continua = 0

 while(continua < 50) {
  continua++
   if(continua === 10) {
     console.log("continuar")
     continue
   }

   console.log(continua)
}