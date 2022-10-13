(function() {

    /*
    Envolva todo o código desse desafio em uma IIFE.
    Crie um arquivo chamado index.html e adicione esse script ao HTML.
    */


    /*
    Crie uma função construtora chamada "Person". Esse construtor deve ter
    as seguintes características:
    - Deve receber 3 parâmetros: `name`, `lastName` e `age`;
    - Deverá ter 3 propriedades:
      - `name` - que receberá o valor do parâmetro `name`;
      - `lastName` - que receberá o valor do parâmetro `lastName`;
      - `age` - que receberá o valor do parâmetro `age`;
    - Deverá ter 3 métodos:
      - `getFullName` - que deve retornar o nome completo do objeto criado,
      no formato:
        - "[NAME] [LASTNAME]"
      - `getAge` - que deverá retornar a idade (age);
      - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
      iremos passar um único argumento, que é a quantidade de anos que devem ser
      adicionados à idade original (age). Esse método deverá retornar o objeto
      que será instanciado.
    */
        function Person(name,lastName,age){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.getFullName = function getFullName(){   //estamos atribuindo uma função
          return this.name + ' ' + this.lastName;    //para uma propriedade de um objeto.
        };
        this.getAge = function getAge() {
          return this.age;
        };
        this.addAge = function addAge() {
          this.age += arguments[0];
          return this;

          /* Como não estamos passando nenhum parâmetro, como podemos pegar o 
          único argumento que será passado na chamada do método? Através do
          objeto arguments, que é um array-like - que é um objeto no formato de um
          array - a diferença é que o arguments não tem métodos e propriedades
          de um array de verdade - mas conseguimos usar a mesma notação de array
          para pegar os argumentos. O primeiro argumento, como diz o enunciado,
          será o argumento de índice 0 - a nova idade será a idade anterior mais
          o valor do argumento no índice/posição 0*/
          
        }
        
      };

      let person = new Person('Clara','Pacheco',39)

      console.log(person)

      /* Os construtores criam um novo objeto - para referenciarmos o objeto que
       será instanciado ,usamos o "this", que é um objeto implícito e a partir
       dele, conseguimos criar as propriedades do objeto que vai ser instanciado
       a partir desse construtor.

       */

    /*
    Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
    pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
    parâmetros corretamente para o construtor para criar as novas pessoas.
    Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
    */
    console.log( 'Novas pessoas criadas à partir de Person:' );
    
    let pclara = new Person('Clara','Pacheco',39);
    let plara = new Person('Lara','Martins',12);
    let ppablo = new Person('Pablo','Macedo',27);

    console.log(pclara);
    console.log(plara);
    console.log(ppablo);

    /*
    Mostre no console o nome completo de cada pessoa.
    */
    console.log( '\nNomes das pessoas:' );
   
    console.log(pclara.getFullName());
    console.log(plara.getFullName());
    console.log(ppablo.getFullName());

    /*
    Mostre no console as idades de cada pessoa, com a frase:
    - "[NOME COMPLETO] tem [IDADE] anos."
    */
    console.log( '\nIdade das pessoas:' );
    
    console.log(`${pclara.getFullName()} tem ${pclara.getAge()}`);
    console.log(`${plara.getFullName()} tem ${plara.getAge()}`);
    console.log(`${ppablo.getFullName()} tem ${ppablo.getAge()}`);
   
    /*
    Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
    cada um. A frase deverá ser no formato:
    - "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
    */
    console.log( '\nNova idade das pessoas:' );

    console.log(pclara.addAge(1));
    console.log(`${pclara.getFullName()} agora tem ${pclara.getAge()}`);

    console.log(plara.addAge(2));
    console.log(`${plara.getFullName()} agora tem ${plara.getAge()}`);

    console.log(ppablo.addAge(3));
    console.log(`${ppablo.getFullName()} agora tem ${ppablo.getAge()}`)

})();