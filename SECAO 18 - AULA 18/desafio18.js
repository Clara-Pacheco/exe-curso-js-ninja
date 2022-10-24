(function(){
  'use strict'
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
    
    function cleanCPF(cpf){
      return cpf.match(/[^-. x]/g)
    }

    console.log(cleanCPF("049-214 3421-1").join(''));
    console.log(cleanCPF("210.458.522-05").join(''));
    console.log(cleanCPF("735 500 794 - 22").join(''));
    console.log(cleanCPF("101.123-131x32").join(''));

    // Também poderia ter sido feito:

    console.log( 'Limpando CPFs:' );
    
    function cleanCPF2(cpf){
      return cpf.replace(/\D/g,"")
    }
    // Será feita a substituição de tudo que for número( usando a negação
    // com o barra D maiúsculo), para espaço em branco.
  
    // Para mostrar 4 console.log, ao invés de fazermos 4 console, podemos fazer
    // uma estrutura de repetição, para otimizar o processo e evitar repetição
    // de código

    let cpfArray = ["049-214 3421-1", "210.458.522-05", "735 500 794 - 22", "101.123-131x32"]

    cpfArray.forEach(function(cpf){
      console.log(cleanCPF2(cpf)) // ou poderia ser chamada a cleanCPF também 
    })

    // É preferencial usar forEach ou map para percorrer um array ao invés
    // de for ou while. 

    /*
    Usando os CPFs limpos acima, deixe-os com a formatação correta de CPF.
    Ex.: "999.999.999-99"
    Mostre o resultado no console.
    */
    console.log( '\nFormatando CPFs corretamente:' );

    // Usando a função de callback no método replace:
    // Chamando um por um no console.log:

     cpf1 = cleanCPF("049-214 3421-1").join(''); // 04921434211'
     console.log(cpf1.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, function(cpf1, g1,g2,g3,g4){
      
      return g1 + "." + g2 + "." + g3 + "-" + g4
     }));

     cpf2 = cleanCPF("210.458.522-05").join(''); // 04921434211'
     console.log(cpf2.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, function(cpf1, g1,g2,g3,g4){
      
      return g1 + "." + g2 + "." + g3 + "-" + g4
     }));

     cpf3 = cleanCPF("735 500 794 - 22").join(''); // 04921434211'
     console.log(cpf3.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, function(cpf1, g1,g2,g3,g4){
      
      return g1 + "." + g2 + "." + g3 + "-" + g4
     }));

     cpf4 = cleanCPF("101.123-131x32").join(''); // 04921434211'
     console.log(cpf4.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, function(cpf1, g1,g2,g3,g4){
      
      return g1 + "." + g2 + "." + g3 + "-" + g4
     }));

     // ou poderíamos fazer sem a função de callback

     cpfArray = ["049-214 3421-1", "210.458.522-05", "735 500 794 - 22", "101.123-131x32"]

     cpfArray.forEach(function(cpf){
       console.log(cleanCPF2(cpf).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'));
     })

     // ATENÇÃO: NÃO PODE HAVER ESPAÇOS ENTRE OS GRUPOS DE CAPTURAS!

     // O $1 captura o grupo 1, o $2 captura o grupo 2, o $3 captura o grupo 3 e assim
     // e assim por diante. A função de callback do método regex também aceita o um
     // parâmetro de captura total, ou seja, a regex inteira, sem ser dividida em grupos.
 

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
    
    let regex = /ju[n|l]ho/g

    let text = "Os meses de janeiro, junho e julho começam com a letra j."

   console.log(text.match(/ju[nl]ho/g) ? ["junho","julho"] : null)

   // DENTRO DE UMA LISTA [], CARACTERES ESPECIAIS SÃO ESCAPADOS -  A LISTA NÃO
   // OS TRATA COMO CARACTERES ESPECIAIS.
     
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
    let regex2 = /<\W+>/g

    let text2 = "<div><section><blockquote>Texto <img /></blockquote></section></div>"

    console.log(text2.match(/<\w+>/g))  // + = um ou mais caracteres

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
    
    let regex3 = /<li><\/li>|<\w{4}><\/\w{4}>/g

    let texto3 = "<div><ul><li></li><li></li><li><span></span></li></ul></div>"
    
    console.log(texto3.match(/<li><\/li>|<\w{4}><\/\w{4}>/g))
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
    
    let text4 = "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"
    
    console.log(text4.replace(/<(\w+)>([^<]+)<\/\w+>/g,
     `<$1>O texto dentro da tag "$1" é "$2"</$1> \n` ))
})();