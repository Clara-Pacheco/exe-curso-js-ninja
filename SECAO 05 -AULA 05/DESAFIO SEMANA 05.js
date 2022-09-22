/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
 var myarray = [1, true, 'Clara', null, undefined, -56, {},[]];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
 function myFunction(array){
        return array;
 };

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myarray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
 function myFunction2(array,num){
     return array[num];
 }

/*
Declare uma variável que recebe um array com 7 valores, de tipos diferentes.
*/
var myvar2 = [2, 'arroz', undefined, null, false, [1,'Clara',5.2], {A:3}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.

*/
console.log(myFunction2(myvar2,0));       // retorna 2
console.log(myFunction2(myvar2,1));       // retorna 'arroz'
console.log(myFunction2(myvar2,2));       // retorna undefined
console.log(myFunction22(myvar2,3));      // retorna null
console.log(myFunction2(myvar2,4));       // retorna false
console.log(myFunction2(myvar,5));        // rertorna [1,'Clara',5.2]
console.log(myFunction(myvar2,6));        // retorna {A:3}


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(nomeLivro){
    var todosLivros = {'A Hora Da Estrela':{
                                 quantidadedePaginas : 88,
                                 autor : 'Clarice Lispector',
                                 editora : 'Rocco'
                                },
                        'A Pratica': {
                                quantidadedePaginas : 272,
                                autor : 'Seth Godin',
                                editora : 'Alta Books'
                                },
                         'Pense De Novo': {
                                quantidadedePaginas : 304,
                                autor : 'Adam Grant',
                                editora : 'Sextante'
                                }
                        }
                 if (!nomeLivro){
                     return todosLivros;
                 }
                 return todosLivros[nomeLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Pense de Novo' 
//Essa variável bookName é diferente da variável que está sendo passada como parâmetro para função-
//ela só existe dentro da função. A que estamo declarando acima, é uma variável global e existe para
// o programa inteiro.
console.log('O livro '+ bookName + ' tem '+ book(bookName).quantidadedePaginas + ' páginas! ' )

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/


console.log('O autor do livro ' + bookName + ' é ' + book(bookName).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + bookName + ' foi publicado pela  editora ' + book('A Hora Da Estrela').editora);