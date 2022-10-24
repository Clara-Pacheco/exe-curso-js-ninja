#Challenge 18

![Challenge 18](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/images/Curso%20JavaScript%20Ninja%20_%20Udemy%20-%20Google%20Chrome%2021_10_2022%2016_54_25.png)


/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/

/*
Crie uma função chamada `cleanCPF`, que receba um CPF por parâmetro, e
retorne esse CPF limpo (somente os números).
Usando os CPFs abaixo, mostre no console que a limpeza funciona para todos
eles! Use um console.log para cada CPF.
- "049-214 3421-1"
- "210.458.522-05"
- "735 500 794 - 22"
- "101.123-131x32"
*/
console.log( 'Limpando CPFs:' );
// ?

![]()

/*
Usando os CPFs limpos acima, deixe-os com a formatação correta de CPF.
Ex.: "999.999.999-99"
Mostre o resultado no console.
*/
console.log( '\nFormatando CPFs corretamente:' );
// ?

/*
Crie uma expressão regular que faça match com as palavras "junho" ou "julho",
usando o mínimo de caracteres possíveis na regex.
Para garantir que a regex funciona, teste-a usando o método match. Se houver
o match, o método retorna um array com os matches. Caso contrário, ele
retornará null.
Mostre no console o resultado do match para a frase:
"Os meses de janeiro, junho e julho começam com a letra j."
O resultado deve ser:
["junho", "julho"]
*/
console.log( '\nMatch com as palavras "junho" ou "julho" para a frase "Os meses de janeiro, junho e julho começam com a letra j.":' );
// ?

/*
Crie uma expressão regular que faça o match com a abertura de uma tag
HTML qualquer.
Ex.: "<div>", "<section>", "<blockquote>".
Use o método match e faça o teste com a marcação abaixo:
"<div><section><blockquote>Texto <img /></blockquote></section></div>"
O resultado deve ser:
["<div>", "<section>", "<blockquote>"]
*/
console.log( '\nMatch com a abertura de uma tag HTML:' );
// ?

/*
Crie uma expressão regular que faça o match com uma tag HTML vazia, casando
com a abertura e fechamento da tag.
Ex.: "<div></div>", "<section></section>", "<blockquote></blockquote>".
Use o método match e faça o teste com a marcação abaixo:
"<div><ul><li></li><li></li><li><span></span></li></ul></div>"
O resultado deve ser:
["<li></li>", "<li></li>", "<span></span>"]
*/
console.log( '\nMatch com tags HTML vazias (abertura e fechamento da tag):' );
// ?

/*
Vamos complicar um pouco agora :D
Crie uma expressão regular que faça o match com um texto existente dentro de
uma tag HTML. O texto deve ser capturado e substituído por:
'O texto dentro da tag "[NOME DA TAG]" é "[TEXTO]"'
Use a marcação abaixo para fazer o replace:
"<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"
A marcação deve permanecer como está, somente o texto deve ser substituído.
No replace, utilize quebras de linha para deixar uma tag por linha.
O resultado deve ser esse:
<h1>O texto dentro da tag "h1" é "Título da página"</h1>
<p>O texto dentro da tag "p" é "Este é um parágrafo"</p>
<footer>O texto dentro da tag "footer" é "Rodapé"</footer>
Uma dica: faça o match aos poucos. Para facilitar o teste, use o site
https://regex101.com/#javascript e verifique se as capturas estão
corretas, para depois aplicar no código ;)
*/
console.log( '\nFazer replace dos textos das tags:' );
// ?



![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/1.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/2.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/3.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/4.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/5.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/6.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/7.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/8.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/9.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/10.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/11.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/12.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/13.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/14.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/15.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/16.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/17.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/18.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/19.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/20.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/21.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/22.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/23.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/25.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/26.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/27.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/28.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/29.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/30.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/31.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/32.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/33.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/34.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/35.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/36.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/37.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/38.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/39.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/40.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/41.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/42.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/43.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/44.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/45.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/46.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/47.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/48.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/49.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/50.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/51.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/52.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/53.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/54.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/55.png)

![Examples and explanations](https://github.com/Clara-Pacheco/exe-curso-js-ninja/blob/main/SECAO%2018%20-%20AULA%2018/56.png)

