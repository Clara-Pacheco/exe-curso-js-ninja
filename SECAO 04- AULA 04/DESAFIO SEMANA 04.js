/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
 var isTruthy =  function(a){
        return !!a;
 }

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0);
isTruthy(NaN);
isTruthy(undefined);
isTruthy(-1)
isTruthy(false);
isTruthy(-0);
isTruthy('');
isTruthy("");

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

isTrusty(10);
isTruthy({});
isTruthy([]);
isTruthy('1');
isTruthy('Clara');
isTruthy('0');
isTruthy(function(){});
isTruthy(20);
isTruthy('1234');
isTruthy(true);
isTruthy(10+10);


/*

Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - 'string'
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {marca: 'Fiat',
             modelo: 'Bolinha',
             placa: 'SVC23456',
             ano: 2022,
             cor: 'preto',
             quantasPortas: 4,
             assentos: 5,
             quantidadedePessoas: 0}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(novaCor){
        carro.cor = novaCor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor= function(){
    return carro.cor
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo= function(){
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca= function(){
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo= function(){
    return ('Esse carro é um ' + carro.marca + ' ' + carro.modelo);
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/



carro.adicionarPessoas = function(npessoas){
    // O valor total de pessoas é igual a quantidade de pessoas iniciais mais o número
    // de pessoas existentes.
    var totalPessoas = carro.quantidadedePessoas + npessoas;

    // Antes de adicionarmos novas pessoas, temos que checar quantas pessoas já existiam dentro do carro:
    //Se a qtd de pessoas que já existiam forem iguais ao número de assentos, o carro já estará lotado.
    if (carro.quantidadedePessoas === carro.assentos && totalPessoas >= carro.assentos){
        return 'O carro já está lotado!';
    }   
    // Se o novo total de pessoas, ou seja, as que já existiam dentro do carro mais as que foram adicionadas,
    // forem maiores que o número de assentos do carro, retornamos o número de pessoas que ainda cabem no carro.
    if (totalPessoas > carro.assentos){
        var quantasPessoasCabem = carro.assentos - carro.quantidadedePessoas; 
        var pluralOuSingular = quantasPessoasCabem === 1 ? 'pessoa' : 'pessoas';
        return 'Só cabem mais ' + quantasPessoasCabem + pluralOuSingular + ' !';
    }
    // Aqui incrementamos a quantidade de pessoas. No início do programa, não incrementamos a quantidade de pessoas
    // para obtermos uma nova quantidade de pessoas no carro. Somente somamos a quantidade de pessoas já existentes
    // no carro com as pessoas que foram adicionadas
    // Isso é necessário para que, quando chamarmos a função novamente para tentarmos adicionar mais pessoas no carro,
    // a quantidade de pessoas tem que estar atualizado para o novo valor, após a função ter sido chamada 1 vez já.
    carro.quantidadedePessoas += npessoas;
    return 'Já temos ' + totalPessoas + ' pessoas no carro! ';
}
/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor();           // preto

// Mude a cor do carro para vermelho.

carro.novaCor('vermelho');           

// E agora, qual a cor do carro?

carro.obterCor();           //vermelho

// Mude a cor do carro para verde musgo.

carro.novaCor('verde musgo');

// E agora, qual a cor do carro?

carro.obterCor();       //verde musgo

// Qual a marca e modelo do carro?

carro.obterMarcaModelo();       // Fiat Bolinha

// Adicione 2 pessoas no carro.

carro.adicionarPessoas(2);       // Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.

carro.adicionarPessoas(4);      // Só cabem mais 3 pessoas!

// Faça o carro encher.

 carro.adicionarPessoas(3);     // Já temos 5 pessoas no carro!

// Tire 4 pessoas do carro.

carro.adicionarPessoas(-4);     // Já temos 1 pessoas no carro!
// Aqui tiramos 4 pessoas, então ficamos com 1 pessoa no carro.

// Adicione 10 pessoas no carro.

carro.adicionarPessoas(10);     // Só cabem mais 4 pessoas!
//Aqui tentamos adiconar 10 pessoas, mas só cabem 4 pessoas. Ele só avisa que 
// cabem essas 4 pessoas, mas não a adiciona. Então continuamos com somente
// 1 pessoa no carro.

// Quantas pessoas temos no carro?

carro.quantidadedePessoas      // 1