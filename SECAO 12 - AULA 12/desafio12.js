(function(){/*
  Envolva todo o conteúdo desse arquivo em uma IIFE.
  */

  /*
  Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
  
  let person = {
    name: 'Lara',
    lastName: 'Barros',
    age: 18
  }

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  
  console.log( `Propriedades de "person": ` );
  console.log(Object.keys(person))


  // O JS tem um objeto padrão chamado "Object" , interno do javascript, e esse 
  // "Object" tem um método chamado ".keys()" . Esse método retorna os métodos
  // e propriedades do objeto passado como parâmetro na forma de um array.

  /*
  Crie um array vazio chamado `books`.
  */
  
  let books = [];

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  
books.push({name:'nome1',pages:200}, {name:'nome2', pages: 300}, {name: 'nome3', pages: 150});


  /*
  Mostre no console todos os livros.
  */
  
console.log(books)
  /*
  Remova o último livro, e mostre-o no console.
  */
  
let lastBook =  books.pop()

console.log(`\nLivro que está sendo removido:` );

console.log(lastBook)


  /*
  Mostre no console os livros restantes.
  */

  console.log( `\nAgora sobraram somente os livros: ` ); 
  console.log(books)
  

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  // ?
  books = JSON.stringify(books)
  /*
  Mostre os livros nesse formato no console:
  */
  
  console.log( `\nLivros em formato string: `);
  console.log(books);

  /*
  Converta os livros novamente para objeto.
  */
  // ?

  books = JSON.parse(books)
  console.log( `\nAgora os livros são objetos novamente: ` );
  console.log(books)

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  
      for(let book of books){
        for(let prop in book){
          console.log(`${prop} : ${book[prop]}`)
        }
      }

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */

  let myName = ['l','a','r','a',' ','b','a','r','r','o','s'];

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
   
  console.log( `\nMeu nome é: ${myName.join('')}` );

  
  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */

  let nameReversed = myName.reverse()
  
  console.log( `\nMeu nome invertido é: ${nameReversed}`);

  console.log(nameReversed.join(''));
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  
  console.log( `\nAgora em ordem alfabética: ${myName.sort()}` );
})();