// | Exemplo 02 | Descrição |
// | --- | --- |
// | `10 em 10` | Imprima na tela a partir de 20 e depois de 10 em 10 até o 100, 
// mas em vez dos numeros 60 e 90 imprima a palavra "CONTINUE".|

let dezEmDez = 10
while(dezEmDez < 100){
dezEmDez = dezEmDez + 10
if(dezEmDez === 60 || dezEmDez === 90){
    console.log('CONTINUE')
    continue
}
console.log(dezEmDez)
}

20
30
40
50
CONTINUE
70
80
CONTINUE
100
