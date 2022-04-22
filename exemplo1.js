// | Exemplo 01 | Descrição |
// | --- | --- |
// | `For/Break/Continue` | Utilize a estrutura de repetição for para imprimir no console conforme instruções:
// a) números de 1 a 50
// b) quando chegar no número 25 interrompa a instrução e pare o loop
// c) quando chegar no número 10 pule a instrução|

--- | --- |---|
//For

 for(let conta = 1; conta <= 50; conta = conta + 1) 
 console.log(conta)
    
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 
26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50

--- | --- |---|
//Break

  for(let quebra = 1; quebra <= 50;  quebra = quebra + 1) {
      console.log(quebra)
  
      if(quebra === 25) {
        break
      }  
    }

1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

--- | --- |---|
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

1 2 3 4 5 6 7 8 9 continuar 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 
26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50

