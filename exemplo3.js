// | Exemplo 03 | Descrição |
// | --- | --- |
// | `Tabuada` | Faça um programa que dado um número, imprime no 
// (console.log) a tabuada do mesmo de 1 a 10. |
  
  
function tabuada(n){
    for(let i = 1; i <= 10; i++){
        console.log(`${n} x ${n}=`, i * n)
    }
}
console.log(tabuada(7))