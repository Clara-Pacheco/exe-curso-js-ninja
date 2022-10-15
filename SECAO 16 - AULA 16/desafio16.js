(function (){
  'use strict'
    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE.

    2. Adicione a diretiva 'use strict';

    3. Crie um arquivo index.html e adicione esse script à ele.
    */

    /*
    Declare uma variável chamada `name` que receba seu primeiro nome.
    Mostre no console todas as letras do seu nome separadas, com a frase:
    - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
    Ex: no caso do nome ser "Fernando", deve mostrar as frases:
    - "F é a 1ª letra do meu nome."
    - "e é a 2ª letra do meu nome."
    E assim por diante, até a última.
    */
    console.log( 'As letras do seu nome:' );
    
    let name = 'clara'

    for(let c = 0; c < name.length; c++){
      console.log(`${name[c]} é a ${c+1}o do meu nome`);
    }

    /*
    - Declare uma variável chamada `fullName`, que receba seu nome completo,
    escrito no formato de slug (caixa baixa e palavras separadas por um traço).
    Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
    - Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
    por um espaço.
    - Detalhe: o código que você escrever abaixo deve funcionar para qualquer
    nome, então fique à vontade para usar as artimanhas que já viu até agora no
    curso para fazer isso funcionar corretamente :)
    - Mostre no console o nome no formato slug, e o resultado final. Use um
    console.log para cada formato.
    */
    console.log( '\nNome convertido à partir de um slug:' );
    
    let fullName = 'clara-pacheco'

    let newFullName = '';

    // let newFirstName = fullName.charAt(0).toUpperCase() + fullName.slice(1,5).replace('-',' ');

    // let newLastName = fullName.charAt(6).toUpperCase() + fullName.slice(7);

    // console.log(fullName);
    // console.log(newFirstName + ' ' + newLastName);

    // 1- Para pegarmos as primeiras letras de cada palavra e trocarmos para letra maiúscula, precisamos ter
    // as palavras separadas;
    // 2 - Para isso, podemos usar o método split( ) 
    // 3 - O método split( ) quebra a string no separador que for passado como parâmetro e a transforma em um array de itens
    // 4 - split('-') ---> fará a quebra no '-'

    // newFullName = fullName.split('-')

    // 5 - Ao fazermos isso, iremos ter um array com 2 itens: 'clara' e 'pacheco'
    // 6 -Como temos um array, podemos usar o método de ARRAY map( ). que varre todo o array e faz o que foi
    // definido dentro da função passada como parâmetro no método map( )  

    // newFullName = fullName.split('-').map()

    // Precisamos passar por cada um dos itens do array e deixar a primeira letra do item maiúscula

    newFullName = fullName.split('-').map(function(name,index,array){ 
        return name[0].toUpperCase() + name.slice(1);

    });

    console.log(`Formato slug: ${fullName}`);
    console.log(`Resultado final: ${newFullName.join(' ')}`)

    // os parâmetros do método map são o item do array, o índice de cada ítem e o array próprio.

    // 7 - Como retorno, pedimos o item do array ( cada nome presente nele) com índice 0, ou seja, a primeira letra
    // de cada nome para ser transformada em letra maiúscula - através do método .toUpperCase(). Isso irá retornar
    // somente a primeira letra em maiúsculo.
    // 8 - e somamos ao restante do nome sem a primeira letra, por isso usamos o método .slice(1) - vai fatiar a 
    // partir do caracter de índice 1.
    // 9 - Por fim, usamos o método .join(' ') para juntar todos os nomes novamente em um string.



    /*
    - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
    cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
    ser um "e". No final, concatene com a frase: " são meus amigos.".
    O resultado final deve ficar mais ou menos assim:
    - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
    - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
    5 nomes foi somente uma sugestão ;)
    */
    console.log( '\nMeus amigos:' );
    
    let nameArray = ['Clara','Lara','Paulo','Lauro','João'];

    // 1- Como queremos reduzir, utilizaremos o método reduce( ) para reduzir esse array em uma única string.
    // Os parâmetros do reduce são o valor acumulado, o item do array(atual), o índice e o array próprio;
    // Só passamos os parâmetros que iremos utilizar, mas, se passarmos todos, não alterará em nada no resultado final.
    // Se não passarmos um segundo parâmetro para o método reduce(), para ser o início do valor acumulado,
    // o valor acumulado será o primeiro item do array e o valor atual será o segundo item do array.

    let phrase = nameArray.reduce(function(acumulado,atual,index,array){
        let separator;
        if(nameArray.length-1 === index){
          separator = ' e ';
          return acumulado + separator +  atual;
        }else{
          return acumulado + ' , ' + atual;
        }
        

    });

    console.log(phrase.concat(' são meus amigos'));

    // 1 -  Primeiro usamos o método reduce( ) para reduzir o array em uma única string
    // 2 -  Começamos com o valor acumulado sendo o primeiro nome e somamos com
    // o separador vírgula mais o valor atual, que é o segundo nome;
    // 3 - Na segunda passada no array, ele irá somar o valor acumulado, que agora
    // será o primeiro nome do array + ',' + o segundo nome do array, com 
    // a vírgula novamente mais o terceiro nome do array e assim por diante, até
    // varrer todo o array.
    // 4 - Para trocarmos o último separador de vírgula para a letra 'e', verificamos 
    // se o índice da varrida do array é o último, através do tamanho do array -1
    // 5 - Se o tamanho do array - 1, que nos retorna o último índice do array,
    // for igual ao último index que está sendo varrido no array, significa que
    // estamos no ponto de fazer a substituição, então no retorno trocamos o 
    // separador de vírgula para 'e'. Nos demais, mantemos a vírgula.
    // 6- No momento de mostrar no console. concatenamos com a string fornecida no
    // enunciado, usando o método concat().



    /*
    Usando o replace(), faça a string "Roberto" virar "Roberta".
    Mostre o resultado no console.
    */
    let nameReplace = 'Roberto'
    let newNameReplace = nameReplace.replace('o','a');
    let againNewNameReplace = newNameReplace.replace('o','a')
    let lastTimeNewNameReplace = againNewNameReplace.replace('a','o')

    console.log(lastTimeNewNameReplace)


    
    console.log( `\nEra "${nameReplace}", agora é: ${lastTimeNewNameReplace}.`);

    // ou 

    console.log('Roberto'.replace('to','ta'));
    

    /*
    Mostre no console a parte "nando" da string "Fernando". Use o método que
    faz a busca do final para o início da string.
    */
    console.log( '\nParte de uma string:' );
    
    let nameFernando = 'Fernando';
    let partFernando = nameFernando.substring(8,3)  // conta os índices na ordem decrescente 8-7-6-5-4-3-2-1-0 

    console.log(partFernando)

    /*
    Declare uma variável chamada `myName`, que receba o seu primeiro nome,
    escrito de forma natural.
    Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
    e minúsculas.
    - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
    de qualquer tamanho, escrito de qualquer forma.
    Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
    */
    console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
    
    // let myName = 'Clara'; //escrita de forma natural: primeira letra maiúscula e segunda minúscula;

    // let nameUpperLowerLetters = myName.split().map(function(acumulado,atual,index){
    //   console.log(index)
    //   if(index % 2 === 0){
    //     return acumulado.toUpperCase() + atual
    //   }else{
    //     return acumulado.toLowerCase() + atual
    //   }
      
    // });

    // console.log(nameUpperLowerLetters.toString())

    // Não é possível fazer com map - método de array- porque, mesmo se transformarmos a string em array utilizando
    // o método .split() sem passar nenhum parâmetro - ele vai transformar a string 'Clara' no array ['Clara'],
    // o novo array ['Clara'] terá somente um item : Clara - de índice 0.... ele não percorrerá cada caracter, como 
    // necessário. Então precisamos fazer com o laço 'for', que não é somente para array, mas para string também e irá
    // percorrer cada caracter do nome fornecido.

    let myName = 'Clara'; //escrita de forma natural: primeira letra maiúscula e segunda minúscula;

    let nameUpperLowerLetters = [];

    for(let c = 0; c < myName.length; c++){
      if(c % 2 === 0){
        nameUpperLowerLetters.push(myName[c].toUpperCase());
      }else{
       nameUpperLowerLetters.push(myName[c].toLowerCase());
    }
  }
    console.log(nameUpperLowerLetters.join(' '));

})();