// | Exemplo 05 | Descrição |
// | --- | --- |
// | `Fatorial` | Crie uma função que irá receber um número e retornar
//  o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6 |

function fatorial(n){
    let num = 1
    for(let i = 1; i <= n; i++){
        num = num * i
    } return `${n}! = ${n} * ${n-1} * ${n-2} = ${num}`
}
console.log(fatorial(3))  

3! = 3 * 2 * 1 = 6
