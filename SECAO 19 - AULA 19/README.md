# Challenge 19

![Challenge 19](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/images/Curso%20JavaScript%20Ninja%20_%20Udemy%20-%20Google%20Chrome%2024_10_2022%2016_02_53.png)

/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/

/*
Alguns detalhes importantes que faltou falar na aula:
1. O objeto RegExp() pode receber um segundo parâmetro, que são as flags:
- var justNumbersAndLetters = new RegExp( '[\\da-z]', 'gi' );
2. Como a expressão regular passada para o objeto RegExp() é uma string,
ela pode ser concatenada para gerar uma regex em tempo de execução,
diferente da regex literal, onde toda a regex precisa estar pronta antes
da utilização.
*/

/*
- Usando o construtor de Regex, crie uma regex que case somente com números
no início da string. O match precisa ser feito para todas as
correspondências de qualquer string, não somente para a primeira, ainda que
esta tenha muitas linhas, deve sempre casar com números no início de cada
linha, independente de quantos caracteres de número estiverem juntos.
- Atribua essa regex à uma variável chamada `justNumbersRegex` e mostre-a
no console:
*/
console.log( 'Regex para números usando o construtor:' );
// ?

/*
Verifique se a regex acima casa com o texto na variável `text`, mostrando o
resultado no console. O resultado deve ser:
"[ '10', '50' ]"
*/
var text = '10 anos.\n50 discos vendidos.\nE nem 10% dos meus amigos o conhece.';
console.log( '\nNúmeros no início da linha do texto:\n' + text, '\n' );
// ?

/*
- Crie uma regex que case com números no final de uma string. Atribua a
regex à uma variável chamada `numbersAtTheEnd`.
- A regex deve casar com todas as correspondências de qualquer string, ainda
que esta tenha muitas linhas, deve sempre casar com números no fim de cada
linha, independente de quantos caracteres de número estiverem juntos.
Mostre a regex no console:
*/
console.log( '\nRegex para números somente no final das linhas:' );
// ?

/*
Verifique se a regex acima casa com o texto na variável `otherText`,
mostrando o resultado no console.
O resultado deve ser:
"[ '12', '6' ]"
*/
var otherText = 'Silvio Santos, nome artístico de Senor Abravanel (Rio de Janeiro, 12\n de dezembro de 1930), é um apresentador de televisão e empresário brasileiro.\n Proprietário do Grupo Silvio Santos, que inclui empresas como a Liderança\n Capitalização (administradora da loteria Tele Sena), a Jequiti Cosméticos e o\n Sistema Brasileiro de Televisão (mais conhecido como SBT), Silvio Santos possui\n um patrimônio avaliado em aproximadamente 6\n bilhões de reais.';
console.log( '\nNúmeros no final da linha:\n\n', otherText, '\n' );
// ?

/*
Vamos criar um método que vai testar se uma classe CSS existe em uma
marcação HTML.
- Primeiro, crie uma função chamada `hasClass`;
- Essa função receberá dois parâmetros: o primeiro chamado `markup`, que
será a marcação HTML testada, e o segundo `cssClass`, que será a classe que
iremos testar;
- A função deve retornar `true` se a classe existir na marcação e `false`
caso contrário;
- A marcação usada para testar deve ser a que está na variável `markup`
abaixo;
- Não altere a marcação na variável markup!
- Faça o teste, mostrando no console o resultado para as seguintes classes:
- "container", "text", "date", "excerpt" e "main".
- O console deve exibir a frase:
"[RESULTADO] para a classe [CLASSE]"
- Ex. de resposta:
"true para a classe container"
- Teste uma classe por vez (um console.log por classe).
- Lembrando que a função deve funcionar para qualquer marcação HTML e para
qualquer classe que for testada. Os dados passados no exercício são somente
para exemplificar.
*/
var markup = '<main>\n  <div class="container">\n    <span class="text date"></span>\n    <p class=\'excerpt\'></p>\n  </div>\n</main>';
console.log( '\nQuais classes CSS existem na marcação abaixo?\n\n', markup, '\n' );
// ?

<br>
<br>

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/1.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/2.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/3.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/4.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/5.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/7.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/8.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/9.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/10.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/11.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/12.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/13.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/14.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/15.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/16.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/17.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/18.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/19.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/20.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/21.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/22.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/23.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/24.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/25.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/26.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/27.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/28.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/29.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/30.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/31.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/32.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/33.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/34.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/35.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/36.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2019%20-%20AULA%2019/37.png)
