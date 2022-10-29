  (function(){
    /*
    Crie dois objetos, que serão duas pessoas. Cada um deve ter as propriedades
    `name` e `lastName`, preenchidos com o nome e sobrenome da pessoa.
    */

    function Person(name,lastName){
      this.name = name,
      this.lastName = lastName
    }
    
    let person1 = new Person('Lara','Barros');
    let person2 = new Person('Paulo', 'Tarso');
     

    /*
    Agora crie uma função chamada `getFullName` que retorne as propriedades
    `name` e `lastName` dos objetos acima, formando um nome completo.
    A função não deve receber nenhum parâmetro, mas as propriedades `name` e
    `lastName` devem ser dinâmicas.
    A mesma função deve servir para as duas pessoas (ou qualquer outra que for
    criada).
    Depois disso, invoque essa função, mostrando no console o nome completo das
    pessoas que foram criadas anteriormente, passando as pessoas acima como
    contexto da função. Use um console.log por pessoa.
    */
    console.log( 'O nome das pessoas é:' );

    //propriedades name e lastName são dinâmicas, porque irão referenciar o objeto referenciado
    // pelo 'this'.
   
    Person.prototype.fullName = function getFullName(){
      return this.name + ' ' + this.lastName
    }

    console.log(person1.fullName());
    console.log(person2.fullName());

    // Poderíamos ter criado os objetos literais acima e uma função nomeada
    // getFullName, com o mesmo retorno: 'return this.name + ' ' + this.lastName'
    // mas, ao invokar a função, ivocaríamos com o método call(), porque ele
    // permite a passagem do 'this', ou seja, do objeto
    // getFullName.call(person1) e getFullName.call(person2)

    // Método call() é um método de FUNÇÃO. Invokar uma função com o call é muito poderoso,
    // porque podemos passar quem será o 'this' daquela função, ou seja, quem será o 
    // objeto da função.


    /*
    Crie uma função chamada `sum`. Essa função pode receber uma lista de
    parâmetros variável, e deverá retornar a soma de todos eles.
    Não use estruturas de repetição para somar os argumentos.
    Na primeira linha, dentro da função, deixe um console.log para mostrar todos
    os parâmetros passados para essa função.
    */
    
    function sum(){
      console.log(arguments);
      return Array.prototype.reduce.call(arguments,function(acumulated,actual, index){
        return +acumulated + +actual;
      });
    }

    // É possível também fazer : return Number(acumulated) + Number(actual); para converter
    // as strings de números - '1' -  em números - 1 - ;

    console.log(sum(1,2,3,4,5));

    // Quando usamos o sinal de + como unário, ele irá converter o valor em questão
    // para número.

    // A função sum() retorna Array.prototype.reduce.call() e a função de callback
    // passada como parâmetro para o método reduce retorna a soma de todos os 
    // valores do arguments. 
    /*
    Mostre no console que a função acima funciona, invocando-a em 3 console.log
    diferentes, com quantidades variáveis de parâmetros passados.
    */
    console.log( '\nSomar alguns números:' );
    
    console.log(sum(1,2,3,4,5));
    console.log(sum(4,5));
    console.log(sum(1,2));

    /*
    Declare uma variável chamada `userEntry`, que irá receber alguns valores
    entrados pelo usuário. Mostre para o usuário a seguinte frase:
    "Entre com alguns números que serão somados:"
    */

    const numberInput = document.querySelector('[data-js="number"]');
    const button = document.querySelector('[data-js="button"]');

    let userEntry = [];

    alert('Entre com alguns números que serão somandos: ')

    button.addEventListener('click', function(){
      userEntry.push(numberInput.value);
      numberInput.value = ' ';
    })
     
    console.log(userEntry);
    
    /*
    Mostre no console o valor entrado pelo usuário:
    */
    console.log( '\nEntrada do usuário:' );
    console.log(userEntry);

    /*
    Crie uma função chamada `justNumbers`, que recebe por parâmetro uma string
    e remove tudo o que não for número, retornando um array somente com os números
    da string. Mostre a representação em string dessa função no console.
    */
    console.log( '\nFunção que limpa entrada do usuário (somente números):' );
    
    let justNumbers = function(string){
      return string.match(/\d/g);
    }

    console.log(justNumbers.toString());

    /*
    Usando a função acima, faça a limpeza dos valores entrados pelo usuário,
    atribuindo o resultado à uma variável `numbers`.
    */
    console.log( '\nEntrada do usuário limpa. Somente números:' );
    
    console.log(userEntry.toString());

    let numbers = justNumbers(userEntry.toString());

    console.log(numbers);

    /*
    Agora com o array de números, utilize a função `sum` para somar todos os
    números desse array e mostre o resultado no console.
    */
    console.log( '\nSomar números entrados pelo usuário:' );
    
    console.log(sum.apply('', numbers));
    
    // A função sum() não recebe nenhum parâmetro; ela pega o 'arguments',
    // e passa para o reduce, através da invokação da função reduce pelo
    // método call(), para ser somado seus valores. Só que o call não recebe, 
    // como parâmetro, arrays, ele recebe os argumentos 1 a 1.
    // Como fazer para passar o array 'numbers' então como parâmetro para
    // a função sum()?
    // Com o MÉTODO APPLY, que, ao invés de passar os argumentos 1 a 1, passa
    // um array como argumentos para a função.

    // Como não existe o 'this', podemos passar como valor vazio ''
    // Quando somamos pela primeira vez, o JS fez uma concatenação dos números,
    // e não uma soma, ou seja, o array numbers é composto de strings '1','2','3' etc...
    // Como fazer para garantir que os valores do array numbers serão numéricos?
    // Quando usamos o sinal + como unário, garantimos que o valor será número, então
    // na função sum(), usamos o sinal unário juntamente com os valores de acumulado e atual, 
    // antes de serem somados. Dessa forma garantimos que estamos lidando com numéricos de números
    // e não strings de números.

  })();