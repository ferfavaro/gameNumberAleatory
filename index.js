const numeroSecreto = parseInt(Math.random() * 11);
let numeroTentativas = 1;
let limiteTentativas = 3;

console.log('NUMERO_SECRETO', numeroSecreto);
console.log('LIMITE_TENTATIVAS', limiteTentativas);
console.log('');
console.log('NUMERO_TENTATIVAS', numeroTentativas);

function chutar() {
  const numeroInserido = parseInt(document.getElementById('valor').value)
  const elementoResultado = document.getElementById('resultado');
  const elementoTentativas = document.getElementById('tentativas');
  let dica = '';

  if(numeroInserido < numeroSecreto) {
    dica = 'O número inserido é menor que o número secreto!'
  } else {
    dica = 'O número inserido é maior que o número secreto!'
  }

  elementoTentativas.innerHTML = numeroTentativas

  if(numeroTentativas < limiteTentativas) {
    numeroTentativas = numeroTentativas + 1
  } else {
    elementoResultado.innerHTML = 'Fim de jogo! O número é ' + numeroSecreto;
  }
  console.log('NUMERO_TENTATIVAS', numeroTentativas);


  if(numeroTentativas <= limiteTentativas) {
    if (numeroInserido === numeroSecreto) {
      elementoResultado.innerHTML = '👍'
    } else if (numeroInserido > 10 || numeroInserido < 0) {
      elementoResultado.innerHTML = 'Você deve inserir um número de 0 a 10';
    } else {
      elementoResultado.innerHTML = '👎' + dica;
    }
  }
}
