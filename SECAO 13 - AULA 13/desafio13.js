(function(){
    /*
    Envolva todo o código desse desafio em uma IIFE.
    */

    /*
    Crie um array e mostre no console a representação em String desse array,
    usando o método visto na aula 13.
    */

    console.log( 'O array em formato de string é:' );

    let array = [1,2,3,4,5].toString()

    console.log(array)

    // console.log(array.toString())
    
    
   
    /*
    Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
    Cada array deve conter os estados dessa região.
    */
    
    let arraySul = ['Rio Grande do Sul','Paraná','Santa Catarina'];

    let arraySudeste = ['São Paulo','Rio de Janeiro','Minas Gerais','Espírito Santo'];

    /*
    Crie uma variável chamada `brasil`, que irá receber as duas regiões
    concatenadas. Mostre o `brasil` no console.
    */
    console.log( '\nAlguns Estados do Brasil:' );
    
    let brasil = arraySul.concat(arraySudeste);

    console.log(brasil)

    /*
    Adicione 3 novos estados da região Norte no início do array e mostre no console.
    */
    console.log( '\nMais estados adicionados:' );
    
    brasil.unshift('Amazonas','Rondônia','Roraima')

    console.log(brasil);

    /*
    Remova o primeiro estado do array `brasil` e mostre-o no console.
    */
    console.log( '\nEstado removido:' );
    
    console.log(brasil.shift());

    /*
    Crie um novo array chamado `newSul`, que receba somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
    */
    
    let newSul = brasil.slice(2,5);

    /*
    Mostre no console os estados que estão em `newSul`.
    */
    console.log( '\nEstados do Sul do Brasil:' );
    
    console.log(newSul);

    /*
    Mostre no console todos os estados que estão em `brasil`.
    */
    console.log( '\nAlguns Estados do Brasil:' );
    
    console.log(brasil);

    /*
    Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
    */
    
    let nordeste = ['Maranhao','Piauí','Ceará','Rio Grande do Norte','Paraíba','Pernanbuco','Alagoas','Sergipe'];

    /*
    Mostre no console os estados do nordeste.
    */
    console.log( '\nEstados do Nordeste:' );
    
    console.log(nordeste)

    /*
    Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
    chamada `newSudeste`.
    */
    
    let newSudeste = brasil.splice(5);

    // método slice não modifica o array original, mas o método splice modifica o array original;

    /*
    Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado.
    */
    brasil = brasil.concat(nordeste);

    // o método concat( ) também não modifica o array original; por isso aqui estamos atribuindo a concatenação
    // do array nordeste com o brasil a uma nova variável.

    /*
    Mostre no console os estados em `newSudeste`.
    */
    console.log( '\nEstados em newSudeste:' );
    
    console.log(newSudeste);

    /*
    Mostre no console os estados do `brasil`.
    */
    console.log( '\nAlguns estados do Brasil:' );
    
    console.log(brasil);

    /*
    usando forEach, percorra o array `brasil` e gere um novo array chamado
    `newBrasil`. Esse array deve ter cada item como um objeto, com as
    propriedades:
    - `id`: que será o índice do array `brasil`,
    - `estado`: que será o estado do array `brasil`.
    */
  
  let newBrasil = [];
   brasil.forEach(function(item,index){
       newBrasil.push({id:index,estado:item });
    })


    /*
    Mostre o array `newBrasil` no console
    */
    console.log( '\nnewBrasil:' );
    
    console.log(newBrasil);

    /*
    Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
    atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
    - "Sim, todos os estados tem mais de 7 letras!"
    Senão, mostre no console:
    - "Nem todos os estados tem mais de 7 letras!"
    */
    console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
    
    let moreThan7 = brasil.every(function(item){
      return item.length > 7;

    })

    if(moreThan7){
      console.log("Sim, todos os estados tem mais de 7 letras!");
    }else{
      console.log("Nem todos os estados tem mais de 7 letras!");
    }

    /*
    Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma variável. Se esse estado existir no array, mostrar a frase no
    console:
    - "Ceará está incluído!"
    Senão, mostrar a frase:
    - "Ceará não foi incluído :("
    */
    console.log( '\nCeará está incluído em `brasil`?' );
    
    let isCearainclude = brasil.some(function(item){
      // aqui, ele não irá passar por todos os itens para verificar se todos eles são iguais a Ceará; 
      // se apenas 1 deles for igua, a Ceará, ele retornará 'true'
      return item === 'Ceará';

    });

    if(isCearainclude){
      console.log("Ceará está incluído!");
    }else{
      console.log("Ceará não foi incluído :(")
    }

    /*
    Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "[ESTADO] pertence ao Brasil."
    Atribua o novo array a uma variável chamada `map`.
    */
    
    let map = newBrasil.map(function(item,index){
    
       item.id++;
       item.estado += ' pertence ao Brasil';

       return item
    
    });

    /*
    Mostre no console o array criado acima:
    */
    console.log( '\nnewBrasil agora com mais informações:' );
    
    console.log(map);

    /*
    Filtre o array criado acima, retornando somente os estados que tiverem
    ID par. Atribua o valor à uma variável chamada `filter`.
    */
    
    let filter = map.filter(function(item,index){
      if (index % 2 === 0) { // o filter irá filtrar esse array baseado na expressão passada no if.
        return item 
      }
    })

    /*
    Mostre o array filtrado acima no console.
    */
    console.log( '\nEstados com ID par:' );
    

    console.log(filter);
})();