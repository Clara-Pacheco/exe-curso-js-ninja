(function(){
    /*
    Envolva todo o código desse desafio em uma IIFE.
    */

    /*
    Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
    elemento será um objeto no formato:
    { number: [NUMBER] }
    Os números devem ser de 1 a 10.
    Mostre esse array no console.
    */
    console.log( 'Number Objects Array:' );
    let numberObjects = [{number:1},
      {number:2},
      {number:3},
      {number:4},
      {number:5},
      {number:6},
      {number:7},
      {number:8},
      {number:9},
      {number:10}];

      console.log(numberObjects);

      // ou
      // let numberObjects = []
      // for(let i =1, i <=10, i++){
      // numberObjects.push({number:i});
      //}

    /*
    Crie um array chamado `justNumbers`, que terá como elementos somente os
    números do array criado acima. Mostre esse novo array no console.
    */
    console.log( '\nJust Numbers:' );

    
    let justNumbers = [];
    numberObjects.filter(function(item){ // o filter passa por todos os elementos do array filtrando pela condição
      justNumbers.push(item.number)      // estipulada na função passada como parâmetro pelo filter.
      return justNumbers;
    })

    console.log(justNumbers);

    //ou

    console.log( '\nJust Numbers:' );

    
    let justNumbers2 = numberObjects.map(function(item){  // o map passa por todos os elementos do array
       return item.number
      
    })

    console.log(justNumbers2);

    // No primeiro exercício, utilizamos o for para criação do objeto porque não tínhamos nenhum array para
    // nos basear. Criamos do 0 - também foi criado manualmente, ou seja, object literal. Já no segundo exercício,
    // tínhamos um array para nos basear, então podemos usar o map e o filter, que são métodos de array para criação de
    // um novo array.

    /*
    Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
    somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
    no console.
    */

    // Aqui iremos filtrar o array, e trazer somente alguns itens que precisamos - não precisamos usar todos,
    // por isso utilizamos o método filter --- para filtrar somente os elementos que precisamosm do array em questão.

    console.log( '\nJust module of division by 2 or 3:' );
    
    let justMod2Or3 = [];
    justNumbers.filter(function(item){
      if(item % 2 === 0 || item % 3 ===0){
        justMod2Or3.push(item);
        return justMod2Or3;
      }
    });

    /*
    Declare uma variável chamada operation que receba, do array criado acima,
    um valor reduzido pela seguinte operação:
    - Somar 1 ao último valor retornado;
    - Multiplicar o resultado pelo valor atual.
    O cálculo deve começar com zero.
    Mostre o resultado no console.
    */

    // justMod2Or3 = [2, 3, 4, 6, 8, 9, 10]

    console.log( '\nOperation:' );
    let operation = justMod2Or3.reduce(function(acumulado,atual,index,array){
      return (acumulado + 1) * atual;
      
    }, 0);

    console.log(operation);

    /*
    Faça o mesmo cálculo passado acima, mas começando do último item para o
    primeiro. O nome da variável deve ser operation2. Mostre o resultado no
    console.
    */
    console.log( '\nOperation 2:' );
    let operation2 = justMod2Or3.reduceRight(function(acumulado,atual,index,array){
      return (acumulado + 1) * atual
      
    },0);

    console.log(operation2);

    /*
    Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba
    do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando
    a "língua do P".
    PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira
    infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra
    falada, como se você estivesse falando em código xD
    */
    console.log( '\nSeu nome na língua do "P":' );
    let name = ['ma','ri','a',' ','cla','ra']

    let nameReducedWithP = name.reduce(function(acumulado,atual,index,array){
      
      return acumulado + 'P' + atual;
    }, '');

    console.log(nameReducedWithP);

    // Se iniciarmos com o 'P', ele dobrará o valor do 'P' no início - O valor acumulado será 'P' e iremos somar com
    //  o 'P' mais o valor atual, que é o primeiro item do array, e não é o que queremos. Mas, se começarmos com uma string
    // vazia, ele irá somar esse vazio com o 'P' mais o valor atual, já na segunda passada, irá somar o valor acumulado,
    // que agora será 'Pma' com o 'P' mais o valor atual, que agora é 'ri'.... e assim por diante, juntando todoas as 
    // sílabas com o 'P' antes de cada uma delas.

   

    /*
    Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
    e atribuirá o seu nome invertido (usando o array criado acima).
    */
    console.log( '\nInversed Name:' );
    
    let inversedName = name.reduce(function(acumulado,atual,index,array){
      return name.reverse().join('')

    });

    console.log(inversedName);

    //ou

    console.log( '\nInversed Name:' );
    
    let inversedName2 = name.reduceRight(function(acumulado,atual,index,array){
      return acumulado + atual;

    });

    console.log(inversedName2);

    /*
    Mostre no console o array `numberObjects`.
    */
    console.log( '\nNumber objects' );
    console.log(numberObjects);

    /*
    Verifique se existem em algum índice de numberObjects um objeto ìgual a
    { number: 2 }. Se houver, mostre no console:
    - "Existe um objeto { number: 2 } em numberObjects!"
    Senão, mostre a frase:
    - "Não existe um objeto { number: 2 } em numberObjects :("
    Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
    o que acontece ;)
    */
    console.log( '\nExiste um { number: 2 } em numberObjects?' );

    // Se o retorno do método indexOf ou lastIndexOf for -1, quer dizer que o item não encontra-se no array
    // passado como parâmetro.
    
    if (numberObjects.indexOf({number:2}) > -1){
      console.log("Existe um objeto { number: 2 } em numberObjects!")
    }else {
      console.log("Não existe um objeto { number: 2 } em numberObjects :(")
    }

    console.log(`O retorno é negativo porque o objeto que passamos como parâmetro - {number: 2}
    é um objeto diferente do objeto {number:2} presente no array numberObjects. NENHUM OBJETO
    EM JS É IGUAL AO OUTRO, PORQUE CADA OBJETO APONTA PARA UM ENDEREÇO DIFERENTE NA MEMÓRIA, POSSUEM
    REFERÊNCIAS DIFERENTES.`)

    // Para referenciarmos o mesmo objeto, precisamos atribuí-lo a uma variável e passar essa variável como
    // parâmetro. Quando atribuimos um objeto a uma variável, estamos dizendo que essa variável irá apontar
    // para o mesmo local na memória desse objeto, ou seja, irão possuir a mesma referência; ou chamar direto o 
    // objeto com o índice específico para que o método indexOf verifique se naquele índice existe o valor que
    // procuramos: if (numberObjects.indexOf(objectsNumber[1]) > -1){ . Aqui estariamos fazendo referência ao 
    // objeto ele mesmo, e não a um outro objeto - por isso que funciona. 
  
    /*
    Fazendo o mesmo do exercício acima, mas começando a buscar do último índice,
    será que obtemos um resultado diferente? Faça a busca a partir do índice 2.
    */
    console.log( '\nE buscando a partir do último índice, o { number: 2 } existe?' );
    
    if (numberObjects.lastIndexOf({number:2}, 2) > -1){
      console.log("Existe um objeto { number: 2 } em numberObjects!")
    }else {
      console.log("Não existe um objeto { number: 2 } em numberObjects :(")
    }

    /*
    Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
    formato de String.
    */
    console.log( '\njustMod2Or3 é um array? Se for, a representação dele em String é:' );
    if(Array.isArray(justMod2Or3)){
      console.log(justMod2Or3.toString());
    }

})();