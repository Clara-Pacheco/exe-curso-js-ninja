# Challenge 17

![Challenge 17](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/images/Curso%20JavaScript%20Ninja%20_%20Udemy%20-%20Google%20Chrome%2017_10_2022%2010_05_22.png)

/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/


/*
Em todos os exercícios desse desafio, nós vamos utilizar expressões
regulares! Para isso, iremos usar o texto abaixo. Coloque-o em uma
variável chamada `text`:
"Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro."
*/
// ?


/*
Vamos começar com umas brincadeiras fáceis :D
Troque o nome "Manuel Marques de Sousa" pelo seu nome, e mostre o resultado
no console:
*/
console.log( 'Adicionando seu nome no texto:' );
// ?


/*
Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
console.
Ex: Se você for da São Paulo, substitua por "paulista".
*/
console.log( '\nTrocando naturalidade:' );
// ?


/*
Substitua todos os números por um traço `-`. Cada caractere de número deve
ser um traço. Mostre o resultado no console:
*/
console.log( '\nTrocando números por -:' );
// ?


/*
Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
minúsculo por "0" (número zero). Mostre o resultado no console:
*/
console.log( '\nTrocando de "D" a "h" por "0":' );
// ?


/*
Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
Mostre o resultado no console:
*/
console.log( '\nTrocando "A" e "a" por "4":' );
// ?


/*
Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
o método `toUpperCase()`. Mostre o resultado no console:
*/
console.log( '\n"O Centauro de Luvas" em caixa alta:' );
// ?


/*
Agora iremos substituir as datas no formato "13 de junho de 1804" para
"13/06/1804". A primeira coisa a fazer é criar uma função chamada
`getMonthNumber`, que irá receber um parâmetro (será o nome do mês) e deverá
retornar o número correspondente a esse mês.
Ex: Se o usuário entrar com "março", deve retornar "03" (em string mesmo).
Números com menos de dois dígitos devem ter um zero na frente.
Crie então a função e mostre no console os retornos para os meses de março,
setembro e dezembro.
Use um console.log para cada mês, usando a frase:
"O mês de [NOME DO MÊS] é representado pelo número [NÚMERO DO MÊS]."
*/
console.log( '\nMeses representados por números:' );
// ?


/*
Agora, declare uma variável chamada `regexDate` que irá receber a expressão
regular que irá fazer o match com as datas. Crie grupos de captura para o
dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
meses que estão no texto, não precisa adicionar todos.
Com o que vimos até agora, você consegue fazer :D
Mostre a regex no console.
*/
console.log( '\nRegex que vai fazer o match com as datas do texto:' );
// ?


/*
Agora crie a função que irá fazer o replace dos dados. A função será chamada
de `replaceDate`. Ela deve retornar a data no formato:
"[DIA]/[MÊS]/[ANO]"
Após criar a função, faça o replace das datas no texto, mostrando no
console o resultado.
*/
console.log( '\nReplace de datas:' );
// ?

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/1.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/2.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/3.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/4%20(2).png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/4.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/5.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/6.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/7.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/8.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/9.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/10.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/11%20(2).png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/11.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/12.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/13.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/15.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/16.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/17.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/18.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/19.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/20.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/21.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/22.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/23.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/24.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/25.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/26.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/27.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/28.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/29.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/30.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/31.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/32.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/33.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/34.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/35.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/36.png)

![Explanation and examples](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2017%20-AULA%2017/37.png)