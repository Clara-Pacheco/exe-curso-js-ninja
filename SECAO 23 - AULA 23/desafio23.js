(function(){
  'use strict'
    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.

    As regras são:

    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;

    - O input deve iniciar com valor zero;

    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;

    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);

    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;

    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;

    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.

    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".

    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */

    let input = document.querySelector(".userInput");
    const number1 = document.querySelector(".button1");
    const number2 = document.querySelector(".button2");
    const number3 = document.querySelector(".button3");
    const number4 = document.querySelector(".button4");
    const number5 = document.querySelector(".button5");
    const number6 = document.querySelector(".button6");
    const number7 = document.querySelector(".button7");
    const number8 = document.querySelector(".button8");
    const number9 = document.querySelector(".button9");
    const number0 = document.querySelector(".button0");

    const allbuttons = document.querySelectorAll(".buttons-number")

    const buttonAddition = document.querySelector(".buttonAddition");
    const buttonSubtraction = document.querySelector(".buttonSubtraction");
    const buttonMultiplication = document.querySelector(".buttonMultiplication");
    const buttonDivision = document.querySelector(".buttonDivision");
    const buttonIqual = document.querySelector(".buttonIqual");
    const buttonCE = document.querySelector(".buttonCE");

    // console.log(number1)
    // console.log(number2)
    // console.log(number3)
    // console.log(number4)
    // console.log(number5)
    // console.log(number6)
    // console.log(number7)
    // console.log(number8)
    // console.log(number9)
    // console.log(number0)
    // console.log(buttonAddition)
    // console.log(buttonSubtraction)
    // console.log(buttonMultiplication)
    // console.log(buttonDivision)
    // console.log(buttonCE)
    // console.log(buttonIqual)

    console.log(allbuttons);
})();